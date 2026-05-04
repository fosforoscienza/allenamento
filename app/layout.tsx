import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Allenamento a casa",
  description:
    "Crea schede di allenamento personalizzate da fare a casa con timer guidato.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
