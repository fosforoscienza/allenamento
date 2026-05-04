import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Allenamento — Schede personalizzate a casa",
  description:
    "Crea la tua scheda di allenamento a casa: calisthenics, pesi, kettlebell, anello pilates, elastici. Timer guidato, riscaldamento e spiegazioni passo-passo.",
};

export const viewport: Viewport = {
  themeColor: "#0a0e1a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-10">
          <header className="mb-8 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 group">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-500 shadow-lg shadow-sky-500/30 flex items-center justify-center transition-transform group-hover:scale-105">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 6L4 4M18 6l2-2M6 18l-2 2M18 18l2 2M9 9l6 6M15 9l-6 6" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-semibold tracking-tight text-white">
                  Allenamento
                </div>
                <div className="text-xs text-slate-400 -mt-0.5">
                  Schede personalizzate a casa
                </div>
              </div>
            </a>
          </header>
          {children}
          <footer className="mt-16 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
            Allenati con costanza · Ascolta sempre il tuo corpo
          </footer>
        </div>
      </body>
    </html>
  );
}
