"use client";

import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Equipment, EQUIPMENT_LABELS } from "@/lib/exercises";
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

function parseEquipment(raw: string | null): Equipment[] {
  if (!raw) return ["none"];
  const items = raw
    .split(",")
    .map((s) => s.trim())
    .filter((s): s is Equipment =>
      VALID_EQUIPMENT.includes(s as Equipment)
    );
  return items.length > 0 ? items : ["none"];
}

function WorkoutContent() {
  const params = useSearchParams();
  const days = Math.max(1, Math.min(7, Number(params.get("days") ?? 3)));
  const durationParam = Number(params.get("duration") ?? 30);
  const duration: 15 | 30 = durationParam === 15 ? 15 : 30;
  const equipment = parseEquipment(params.get("equipment"));
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
        sessionIndex,
      }),
    [days, duration, equipment, sessionIndex]
  );

  return (
    <main className="mx-auto max-w-2xl px-5 py-8 sm:py-12">
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium text-brand-700 hover:text-brand-900"
        >
          ← Torna alla home
        </Link>
        <button
          onClick={() => {
            setStarted(false);
            setSessionIndex((i) => i + 1);
          }}
          className="text-sm font-medium text-slate-600 hover:text-slate-900"
        >
          Genera un'altra scheda
        </button>
      </div>

      <header className="mb-6">
        <h1 className="text-3xl font-bold text-brand-900">La tua scheda</h1>
        <p className="mt-1 text-sm text-slate-600">
          {duration} min · {plan.rounds} giri ·{" "}
          {formatDuration(plan.totalSeconds)} totali ·{" "}
          {plan.workSeconds}s lavoro / {plan.restSeconds}s riposo
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Frequenza scelta: {days}{" "}
          {days === 1 ? "giorno" : "giorni"} a settimana · Attrezzature:{" "}
          {equipment.map((e) => EQUIPMENT_LABELS[e]).join(", ")}
        </p>
      </header>

      {!started ? (
        <>
          <ul className="space-y-3">
            {plan.exercises.map((ex, i) => (
              <li
                key={`${ex.id}-${i}`}
                className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
              >
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-brand-50">
                  <ExerciseSvg id={ex.id} className="h-full w-full" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-semibold text-brand-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {ex.name}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">
                    {ex.description}
                  </p>
                  <p className="mt-1 text-xs italic text-slate-500">
                    {ex.tips}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setStarted(true)}
            className="mt-6 w-full rounded-xl bg-brand-600 py-4 text-lg font-bold text-white shadow-sm hover:bg-brand-700"
          >
            Inizia l'allenamento
          </button>
        </>
      ) : (
        <Timer plan={plan} />
      )}
    </main>
  );
}

export default function WorkoutPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto max-w-2xl px-5 py-12 text-center text-slate-500">
          Caricamento…
        </main>
      }
    >
      <WorkoutContent />
    </Suspense>
  );
}
