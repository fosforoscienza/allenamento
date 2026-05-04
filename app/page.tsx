"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Equipment, EQUIPMENT_LABELS } from "@/lib/exercises";

const EQUIPMENT_ORDER: Equipment[] = [
  "none",
  "weights",
  "ring",
  "kettlebell",
  "bands",
];

export default function Home() {
  const router = useRouter();
  const [days, setDays] = useState(3);
  const [duration, setDuration] = useState<15 | 30>(30);
  const [equipment, setEquipment] = useState<Equipment[]>(["none"]);

  const toggleEquipment = (eq: Equipment) => {
    setEquipment((prev) => {
      if (eq === "none") return prev.includes("none") ? prev : ["none"];
      const without = prev.filter((p) => p !== "none");
      return without.includes(eq)
        ? without.filter((p) => p !== eq)
        : [...without, eq];
    });
  };

  const start = () => {
    const eq = equipment.length === 0 ? "none" : equipment.join(",");
    router.push(
      `/workout?days=${days}&duration=${duration}&equipment=${eq}&session=0`
    );
  };

  return (
    <main className="mx-auto max-w-2xl px-5 py-10 sm:py-16">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-brand-900 sm:text-5xl">
          Allenamento a casa
        </h1>
        <p className="mt-3 text-slate-600">
          Crea la tua scheda personalizzata e segui il timer guidato.
        </p>
      </header>

      <div className="space-y-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-slate-800">
            Quante volte alla settimana?
          </h2>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6, 7].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setDays(n)}
                className={`h-12 w-12 rounded-full text-base font-semibold transition ${
                  days === n
                    ? "bg-brand-600 text-white shadow"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-slate-800">
            Durata della sessione
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {[15, 30].map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setDuration(v as 15 | 30)}
                className={`rounded-xl px-4 py-4 text-lg font-semibold transition ${
                  duration === v
                    ? "bg-brand-600 text-white shadow"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {v} minuti
              </button>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-slate-800">
            Attrezzature disponibili
          </h2>
          <p className="mb-3 text-sm text-slate-500">
            Seleziona ciò che hai a casa. Puoi sceglierne più di una.
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {EQUIPMENT_ORDER.map((eq) => {
              const selected = equipment.includes(eq);
              return (
                <button
                  key={eq}
                  type="button"
                  onClick={() => toggleEquipment(eq)}
                  className={`rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition ${
                    selected
                      ? "border-brand-600 bg-brand-50 text-brand-900"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                  }`}
                >
                  <span className="block text-base">
                    {EQUIPMENT_LABELS[eq]}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <button
          type="button"
          onClick={start}
          disabled={equipment.length === 0}
          className="w-full rounded-xl bg-brand-600 py-4 text-lg font-bold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          Genera la scheda
        </button>
      </div>

      <p className="mt-6 text-center text-xs text-slate-500">
        Esegui un breve riscaldamento di 3-5 minuti prima di iniziare.
      </p>
    </main>
  );
}
