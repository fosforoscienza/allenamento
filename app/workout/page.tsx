"use client";

import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Equipment,
  EQUIPMENT_LABELS,
  Goal,
  GOAL_LABELS,
  Exercise,
} from "@/lib/exercises";
import { formatDuration, generateWorkout } from "@/lib/generator";
import ExerciseSvg from "@/components/ExerciseSvg";
import Timer from "@/components/Timer";

const VALID_EQUIPMENT: Equipment[] = [
  "none",
  "weights",
  "ring",
  "kettlebell",
  "bands",
];

const VALID_GOALS: Goal[] = [
  "completo",
  "dimagrire",
  "tonificare",
  "forza",
  "addominali",
  "gambe-glutei",
  "parte-superiore",
];

function parseEquipment(raw: string | null): Equipment[] {
  if (!raw) return ["none"];
  const items = raw
    .split(",")
    .map((s) => s.trim())
    .filter((s): s is Equipment => VALID_EQUIPMENT.includes(s as Equipment));
  return items.length > 0 ? items : ["none"];
}

function parseGoal(raw: string | null): Goal {
  if (raw && VALID_GOALS.includes(raw as Goal)) return raw as Goal;
  return "completo";
}

function WorkoutContent() {
  const params = useSearchParams();
  const days = Math.max(1, Math.min(7, Number(params.get("days") ?? 3)));
  const durationParam = Number(params.get("duration") ?? 30);
  const duration: 15 | 30 = durationParam === 15 ? 15 : 30;
  const equipment = parseEquipment(params.get("equipment"));
  const goal = parseGoal(params.get("goal"));
  const sessionParam = Number(params.get("session") ?? 0);

  const [sessionIndex, setSessionIndex] = useState(
    Number.isFinite(sessionParam) ? sessionParam : 0
  );
  const [started, setStarted] = useState(false);

  const plan = useMemo(
    () =>
      generateWorkout({
        daysPerWeek: days,
        durationMinutes: duration,
        equipment,
        goal,
        sessionIndex,
      }),
    [days, duration, equipment, goal, sessionIndex]
  );

  const goalMeta = GOAL_LABELS[goal];
  const isCalisthenics =
    equipment.length === 1 && equipment[0] === "none";

  return (
    <main>
      <div className="mb-5 flex items-center justify-between">
        <Link href="/" className="btn-ghost text-sm py-2 px-3">
          ←&nbsp;Home
        </Link>
        <button
          onClick={() => {
            setStarted(false);
            setSessionIndex((i) => i + 1);
          }}
          className="btn-ghost text-sm py-2 px-3"
        >
          Genera un'altra scheda
        </button>
      </div>

      <header className="mb-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-sky-500/10 border border-sky-400/30 px-3 py-1 text-xs font-medium text-sky-300">
            {goalMeta.name}
          </span>
          <span className="rounded-full bg-slate-800/60 border border-slate-700 px-3 py-1 text-xs text-slate-300">
            {duration} min · {plan.rounds} giri
          </span>
          {isCalisthenics && (
            <span className="rounded-full bg-emerald-500/10 border border-emerald-400/30 px-3 py-1 text-xs text-emerald-300">
              Calisthenics
            </span>
          )}
          <span className="rounded-full bg-slate-800/60 border border-slate-700 px-3 py-1 text-xs text-slate-300">
            {days}× a settimana
          </span>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-white">La tua scheda</h1>
        <p className="mt-1 text-sm text-slate-400">
          Durata totale: {formatDuration(plan.totalSeconds)} · Riscaldamento{" "}
          {Math.round(plan.warmupSeconds / 60)} min · Lavoro {plan.workSeconds}s
          / Riposo {plan.restSeconds}s
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Attrezzatura:{" "}
          {equipment.map((e) => EQUIPMENT_LABELS[e]).join(" · ")}
        </p>
      </header>

      {!started ? (
        <>
          <SectionTitle
            label="Riscaldamento"
            count={plan.warmup.length}
            sub={`~${Math.round(plan.warmupSeconds / 60)} min · attivazione e mobilità`}
            color="violet"
          />
          <ul className="mt-3 space-y-3">
            {plan.warmup.map((ex, i) => (
              <ExerciseRow key={`w-${ex.id}-${i}`} ex={ex} index={i} variant="warmup" />
            ))}
          </ul>

          <SectionTitle
            label="Allenamento principale"
            count={plan.exercises.length}
            sub={`${plan.rounds} giri · ${plan.workSeconds}s lavoro / ${plan.restSeconds}s riposo`}
            color="sky"
            className="mt-8"
          />
          <ul className="mt-3 space-y-3">
            {plan.exercises.map((ex, i) => (
              <ExerciseRow key={`m-${ex.id}-${i}`} ex={ex} index={i} variant="main" />
            ))}
          </ul>

          <button
            onClick={() => setStarted(true)}
            className="btn-primary mt-8 w-full text-base py-4"
          >
            Inizia l'allenamento
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </>
      ) : (
        <Timer plan={plan} />
      )}
    </main>
  );
}

function SectionTitle({
  label,
  count,
  sub,
  color,
  className = "",
}: {
  label: string;
  count: number;
  sub: string;
  color: "violet" | "sky";
  className?: string;
}) {
  const dot =
    color === "violet" ? "bg-violet-400" : "bg-sky-400";
  return (
    <div className={`flex items-baseline justify-between ${className}`}>
      <div className="flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${dot}`} />
        <h2 className="text-base font-semibold text-white">{label}</h2>
        <span className="text-xs text-slate-500">({count})</span>
      </div>
      <p className="hidden sm:block text-xs text-slate-500">{sub}</p>
    </div>
  );
}

function ExerciseRow({
  ex,
  index,
  variant,
}: {
  ex: Exercise;
  index: number;
  variant: "warmup" | "main";
}) {
  const accent =
    variant === "warmup" ? "text-violet-300" : "text-sky-300";
  const bg =
    variant === "warmup"
      ? "bg-violet-500/5 border-violet-500/20"
      : "bg-slate-900/60 border-slate-800";

  return (
    <li className={`card ${bg} p-4`}>
      <div className="flex gap-4">
        <div className="flex h-20 w-20 sm:h-24 sm:w-24 shrink-0 items-center justify-center rounded-xl bg-slate-950/60 border border-slate-800">
          <ExerciseSvg id={ex.id} className="h-full w-full" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2">
            <span className={`text-xs font-semibold ${accent}`}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-base font-semibold text-white">{ex.name}</h3>
          </div>
          <p className="mt-1 text-sm text-slate-400">{ex.description}</p>
          <details className="group mt-2">
            <summary className="cursor-pointer list-none text-xs font-medium text-slate-300 hover:text-white">
              <span className="inline-flex items-center gap-1">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 transition-transform group-open:rotate-90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
                Come si fa
              </span>
            </summary>
            <ol className="mt-2 space-y-1.5 pl-1 text-xs text-slate-300">
              {ex.howTo.map((step, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-slate-500 shrink-0">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-2 rounded-lg bg-amber-500/10 border border-amber-500/20 px-3 py-2 text-xs text-amber-200">
              💡 {ex.tips}
            </p>
          </details>
        </div>
      </div>
    </li>
  );
}

export default function WorkoutPage() {
  return (
    <Suspense
      fallback={
        <main className="text-center text-slate-400 py-12">Caricamento…</main>
      }
    >
      <WorkoutContent />
    </Suspense>
  );
}
