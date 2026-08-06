import type { Metadata } from "next";
import { Bebas_Neue, Courier_Prime, Special_Elite } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const courierPrime = Courier_Prime({
  variable: "--font-courier",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const specialElite = Special_Elite({
  variable: "--font-special-elite",
  weight: "400",
  subsets: ["latin"],
});

const RECRUITMENT_POSTER_URL =
  "https://upload.wikimedia.org/wikipedia/commons/5/59/J._M._Flagg%2C_I_Want_You_for_U.S._Army_poster_%281917%29.jpg";

export const metadata: Metadata = {
  title: "War & Peace Daily",
  description: "A daily military history map room briefing.",
  openGraph: {
    title: "Enlist in today's War Room mission",
    description: "A daily military history map room briefing.",
    images: [RECRUITMENT_POSTER_URL],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enlist in today's War Room mission",
    images: [RECRUITMENT_POSTER_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${courierPrime.variable} ${specialElite.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
