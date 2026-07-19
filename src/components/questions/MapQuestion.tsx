"use client";

import { useRef, useState } from "react";
import Map, { Marker, Source, Layer, type MapMouseEvent } from "react-map-gl/mapbox";
import type { Map as MapboxMap, MapboxEvent } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { haversineDistanceKm } from "@/lib/game/scoring";

// Hide every text label (symbol layers: place/city/country/road names) so
// the map doesn't give away the answer, but keep country border lines.
function hideLabels(map: MapboxMap) {
  for (const layer of map.getStyle()?.layers ?? []) {
    if (layer.type === "symbol") {
      map.setLayoutProperty(layer.id, "visibility", "none");
    }
  }
}

// dark-v11's water and land tones sit close to black, which makes small
// islands hard to spot against the ocean. Lighten both a step so land/water
// stays legible without losing the dark "war room" look.
function softenContrast(map: MapboxMap) {
  for (const layer of map.getStyle()?.layers ?? []) {
    if (layer.type === "fill" && layer.id.includes("water")) {
      map.setPaintProperty(layer.id, "fill-color", "#35505c");
    }
    if (layer.type === "background") {
      map.setPaintProperty(layer.id, "background-color", "#4a4238");
    }
  }
}

export default function MapQuestion({
  prompt,
  disabled,
  targetLat,
  targetLng,
  onSubmit,
}: {
  prompt: string;
  disabled: boolean;
  targetLat: number;
  targetLng: number;
  onSubmit: (lat: number, lng: number) => void;
}) {
  const [pin, setPin] = useState<{ lat: number; lng: number } | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const mapRef = useRef<MapboxMap | null>(null);

  function handleClick(e: MapMouseEvent) {
    if (disabled || submitted) return;
    setPin({ lat: e.lngLat.lat, lng: e.lngLat.lng });
  }

  function handleLoad(e: MapboxEvent) {
    mapRef.current = e.target;
    hideLabels(e.target);
    softenContrast(e.target);
  }

  function handleSubmit() {
    if (!pin) return;
    setSubmitted(true);
    onSubmit(pin.lat, pin.lng);

    mapRef.current?.fitBounds(
      [
        [pin.lng, pin.lat],
        [targetLng, targetLat],
      ],
      { padding: 60, duration: 600 },
    );
  }

  const distanceKm = pin ? haversineDistanceKm(pin.lat, pin.lng, targetLat, targetLng) : null;

  return (
    <div className="flex flex-col gap-4">
      <p className="font-body text-lg text-ink">{prompt}</p>
      <div className="h-96 w-full overflow-hidden border-2 border-ink">
        <Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          initialViewState={{ longitude: 10, latitude: 20, zoom: 1.3 }}
          mapStyle="mapbox://styles/mapbox/dark-v11"
          onClick={handleClick}
          onLoad={handleLoad}
          cursor={disabled || submitted ? "default" : "crosshair"}
        >
          {pin && <Marker longitude={pin.lng} latitude={pin.lat} color="#8c3024" />}

          {submitted && (
            <>
              <Marker longitude={targetLng} latitude={targetLat} color="#ad8a3d" />
              {pin && (
                <Source
                  type="geojson"
                  data={{
                    type: "Feature",
                    properties: {},
                    geometry: {
                      type: "LineString",
                      coordinates: [
                        [pin.lng, pin.lat],
                        [targetLng, targetLat],
                      ],
                    },
                  }}
                >
                  <Layer
                    type="line"
                    paint={{
                      "line-color": "#ad8a3d",
                      "line-width": 2,
                      "line-dasharray": [2, 2],
                    }}
                  />
                </Source>
              )}
            </>
          )}
        </Map>
      </div>

      {submitted ? (
        <p className="font-body text-ink">
          You were{" "}
          <span className="font-semibold">{Math.round(distanceKm ?? 0)} km</span> from the
          target.
        </p>
      ) : (
        <button
          disabled={disabled || !pin}
          onClick={handleSubmit}
          className="self-start border-2 border-ink bg-olive px-4 py-2 text-sm font-semibold text-paper disabled:opacity-40"
        >
          Drop pin & submit
        </button>
      )}
    </div>
  );
}
