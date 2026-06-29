"use client";

import { useState } from "react";
import Map, { Marker, type MapMouseEvent } from "react-map-gl/mapbox";
import type { Map as MapboxMap, MapboxEvent } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Hide every text label (symbol layers: place/city/country/road names) so
// the map doesn't give away the answer, but keep country border lines.
function hideLabels(map: MapboxMap) {
  for (const layer of map.getStyle()?.layers ?? []) {
    if (layer.type === "symbol") {
      map.setLayoutProperty(layer.id, "visibility", "none");
    }
  }
}

export default function MapQuestion({
  prompt,
  disabled,
  onSubmit,
}: {
  prompt: string;
  disabled: boolean;
  onSubmit: (lat: number, lng: number) => void;
}) {
  const [pin, setPin] = useState<{ lat: number; lng: number } | null>(null);

  function handleClick(e: MapMouseEvent) {
    if (disabled) return;
    setPin({ lat: e.lngLat.lat, lng: e.lngLat.lng });
  }

  function handleLoad(e: MapboxEvent) {
    hideLabels(e.target);
  }

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
          cursor={disabled ? "default" : "crosshair"}
        >
          {pin && (
            <Marker longitude={pin.lng} latitude={pin.lat} color="#8c3024" />
          )}
        </Map>
      </div>
      <button
        disabled={disabled || !pin}
        onClick={() => pin && onSubmit(pin.lat, pin.lng)}
        className="self-start border-2 border-ink bg-olive px-4 py-2 text-sm font-semibold text-paper disabled:opacity-40"
      >
        Drop pin & submit
      </button>
    </div>
  );
}
