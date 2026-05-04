"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Equipment,
  EQUIPMENT_LABELS,
  Goal,
  GOAL_LABELS,
} from "@/lib/exercises";

const EQUIPMENT_ORDER: Equipment[] = [
  "none",
  "weights",
  "ring",
  "kettlebell",
  "bands",
];

const GOAL_ORDER: Goal[] = [
  "completo",
  "dimagrire",
  "tonificare",
  "forza",
  "addominali",
  "gambe-glutei",
  "parte-superiore",
];

const DAYS = [1, 2, 3, 4, 5, 6, 7] as const;

export default function Home() {
  const router = useRouter();
  const [days, setDays] = useState(3);
  const [duration, setDuration] = useState<15 | 30>(30);
  const [goal, setGoal] = useState<Goal>("completo");
  const [equipment, setEquipment] = useState<Equipment[]>(["none"]);
  const [calisthenics, setCalisthenics] = useState(true);

  const toggleEquipment = (eq: Equipment) => {
    if (calisthenics) return;
    setEquipment((prev) => {
      if (eq === "none") return prev.includes("none") ? prev : ["none"];
      const without = prev.filter((p) => p !== "none");
      return without.includes(eq)
        ? without.filter((p) => p !== eq)
        : [...without, eq];
    });
  };

  const toggleCalisthenics = () => {
    if (calisthenics) {
      setCalisthenics(false);
      setEquipment(["none"]);
    } else {
      setCalisthenics(true);
      setEquipment(["none"]);
    }
  };

  const effectiveEquipment: Equipment[] = calisthenics
    ? ["none"]
    : equipment.length === 0
    ? ["none"]
    : equipment;

  const start = () => {
    const eq = effectiveEquipment.join(",");
    router.push(
      `/workout?days=${days}&duration=${duration}&goal=${goal}&equipment=${eq}&session=0`
    );
  };

  return (
    <main>
      <section className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/40 px-3 py-1 text-xs text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Personalizza il tuo allenamento in 30 secondi
        </div>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Crea la tua scheda
          <span className="block bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
            di allenamento a casa
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          Scegli obiettivo, durata e attrezzatura. Riceverai una scheda
          completa con riscaldamento, esercizi spiegati passo-passo e timer
          guidato.
        </p>
      </section>

      <div className="card p-6 sm:p-8 space-y-8">
        <Section
          title="Obiettivo"
          subtitle="Su cosa vuoi concentrarti?"
          step={1}
        >
          <div className="grid gap-2 sm:grid-cols-2">
            {GOAL_ORDER.map((g) => {
              const meta = GOAL_LABELS[g];
              const active = goal === g;
              return (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGoal(g)}
                  className={`rounded-xl border px-4 py-3 text-left transition-all ${
                    active
                      ? "border-sky-400/60 bg-sky-500/10 shadow-inner shadow-sky-500/10"
                      : "border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-800/50"
                  }`}
                >
                  <div
                    className={`text-sm font-semibold ${
                      active ? "text-sky-200" : "text-slate-100"
                    }`}
                  >
                    {meta.name}
                  </div>
                  <div className="text-xs text-slate-400">{meta.sub}</div>
                </button>
              );
            })}
          </div>
        </Section>

        <Section
          title="Frequenza"
          subtitle="Quante volte alla settimana ti vuoi allenare?"
          step={2}
        >
          <div className="flex flex-wrap gap-2">
            {DAYS.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setDays(n)}
                className={`h-12 w-12 rounded-xl text-base font-semibold transition-all ${
                  days === n
                    ? "bg-gradient-to-br from-sky-500 to-indigo-500 text-white shadow-lg shadow-sky-500/30"
                    : "bg-slate-900/40 text-slate-300 border border-slate-800 hover:bg-slate-800/60"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </Section>

        <Section
          title="Durata sessione"
          subtitle="Quanto tempo hai a disposizione?"
          step={3}
        >
          <div className="grid grid-cols-2 gap-3">
            {[15, 30].map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setDuration(v as 15 | 30)}
                className={`rounded-xl px-4 py-4 text-base font-semibold transition-all ${
                  duration === v
                    ? "bg-gradient-to-br from-sky-500 to-indigo-500 text-white shadow-lg shadow-sky-500/30"
                    : "bg-slate-900/40 text-slate-300 border border-slate-800 hover:bg-slate-800/60"
                }`}
              >
                <div className="text-xl">{v} min</div>
                <div className="text-xs font-normal opacity-80 mt-0.5">
                  {v === 15 ? "Sessione veloce" : "Sessione completa"}
                </div>
              </button>
            ))}
          </div>
        </Section>

        <Section
          title="Modalità & attrezzatura"
          subtitle="Scegli cosa hai a disposizione"
          step={4}
        >
          <button
            type="button"
            onClick={toggleCalisthenics}
            className={`mb-3 w-full rounded-xl border px-4 py-3 text-left transition-all ${
              calisthenics
                ? "border-emerald-400/60 bg-emerald-500/10"
                : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div
                  className={`text-sm font-semibold ${
                    calisthenics ? "text-emerald-200" : "text-slate-100"
                  }`}
                >
                  Solo calisthenics (corpo libero)
                </div>
                <div className="text-xs text-slate-400">
                  Niente attrezzi: solo il tuo corpo.
                </div>
              </div>
              <div
                className={`h-6 w-11 rounded-full p-0.5 transition-colors ${
                  calisthenics ? "bg-emerald-500" : "bg-slate-700"
                }`}
              >
                <div
                  className={`h-5 w-5 rounded-full bg-white transition-transform ${
                    calisthenics ? "translate-x-5" : ""
                  }`}
                />
              </div>
            </div>
          </button>

          <div
            className={`grid gap-2 sm:grid-cols-2 transition-opacity ${
              calisthenics ? "opacity-40 pointer-events-none" : ""
            }`}
          >
            {EQUIPMENT_ORDER.map((eq) => {
              const selected = equipment.includes(eq);
              return (
                <button
                  key={eq}
                  type="button"
                  onClick={() => toggleEquipment(eq)}
                  className={`rounded-xl border px-4 py-3 text-left transition-all ${
                    selected
                      ? "border-sky-400/60 bg-sky-500/10 text-sky-200"
                      : "border-slate-800 bg-slate-900/40 text-slate-300 hover:border-slate-700 hover:bg-slate-800/50"
                  }`}
                >
                  <div className="text-sm font-semibold">
                    {EQUIPMENT_LABELS[eq]}
                  </div>
                  <div className="text-xs text-slate-400">
                    {EQUIPMENT_HINT[eq]}
                  </div>
                </button>
              );
            })}
          </div>
        </Section>

        <button
          type="button"
          onClick={start}
          className="btn-primary w-full text-base py-4"
        >
          Genera la scheda
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Feature
          title="Riscaldamento incluso"
          desc="Mobilità e attivazione prima di ogni sessione."
        />
        <Feature
          title="Spiegazioni passo-passo"
          desc="Ogni esercizio ha istruzioni precise."
        />
        <Feature
          title="Timer guidato"
          desc="Lavoro e riposo gestiti automaticamente."
        />
      </div>
    </main>
  );
}

const EQUIPMENT_HINT: Record<Equipment, string> = {
  none: "Esercizi a corpo libero",
  weights: "Manubri o bottiglie d'acqua",
  ring: "Magic circle pilates",
  kettlebell: "Una o più kettlebell",
  bands: "Elastici / fasce di resistenza",
};

function Section({
  title,
  subtitle,
  step,
  children,
}: {
  title: string;
  subtitle?: string;
  step: number;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-xs font-semibold text-slate-300 ring-1 ring-slate-700">
          {step}
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">{title}</h2>
          {subtitle && (
            <p className="text-xs text-slate-400 -mt-0.5">{subtitle}</p>
          )}
        </div>
      </div>
      {children}
    </section>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="card p-4">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-1 text-xs text-slate-400">{desc}</div>
    </div>
  );
}
