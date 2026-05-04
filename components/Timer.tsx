"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Exercise } from "@/lib/exercises";
import { WorkoutPlan } from "@/lib/generator";
import ExerciseSvg from "./ExerciseSvg";

type Phase =
  | { kind: "work"; exerciseIdx: number; round: number }
  | { kind: "rest"; exerciseIdx: number; round: number }
  | { kind: "roundRest"; round: number }
  | { kind: "done" };

function buildPhases(plan: WorkoutPlan): Phase[] {
  const phases: Phase[] = [];
  for (let r = 0; r < plan.rounds; r++) {
    for (let i = 0; i < plan.exercises.length; i++) {
      phases.push({ kind: "work", exerciseIdx: i, round: r });
      const isLastEx = i === plan.exercises.length - 1;
      const isLastRound = r === plan.rounds - 1;
      if (!(isLastEx && isLastRound)) {
        if (isLastEx) {
          phases.push({ kind: "roundRest", round: r });
        } else {
          phases.push({ kind: "rest", exerciseIdx: i, round: r });
        }
      }
    }
  }
  phases.push({ kind: "done" });
  return phases;
}

function phaseSeconds(phase: Phase, plan: WorkoutPlan): number {
  switch (phase.kind) {
    case "work":
      return plan.workSeconds;
    case "rest":
      return plan.restSeconds;
    case "roundRest":
      return plan.roundRestSeconds;
    case "done":
      return 0;
  }
}

function beep(frequency: number, durationMs: number) {
  if (typeof window === "undefined") return;
  try {
    const Ctx = (window.AudioContext ||
      // @ts-expect-error webkit prefix
      window.webkitAudioContext) as typeof AudioContext;
    const ctx = new Ctx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = frequency;
    osc.type = "sine";
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.4, ctx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(
      0.0001,
      ctx.currentTime + durationMs / 1000
    );
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + durationMs / 1000 + 0.05);
    setTimeout(() => ctx.close(), durationMs + 200);
  } catch {
    /* no-op */
  }
}

export default function Timer({ plan }: { plan: WorkoutPlan }) {
  const phases = useMemo(() => buildPhases(plan), [plan]);
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(
    phaseSeconds(phases[0], plan)
  );
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const phase = phases[phaseIdx];

  useEffect(() => {
    if (!running) return;
    intervalRef.current = setInterval(() => {
      setSecondsLeft((s) => s - 1);
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running, phaseIdx]);

  useEffect(() => {
    if (secondsLeft <= 0 && phase.kind !== "done") {
      const next = phaseIdx + 1;
      const nextPhase = phases[next];
      if (nextPhase.kind === "done") {
        beep(880, 600);
      } else if (nextPhase.kind === "work") {
        beep(880, 250);
      } else {
        beep(440, 200);
      }
      setPhaseIdx(next);
      setSecondsLeft(phaseSeconds(nextPhase, plan));
    } else if (
      running &&
      secondsLeft <= 3 &&
      secondsLeft > 0 &&
      phase.kind !== "done"
    ) {
      beep(660, 100);
    }
  }, [secondsLeft, phase, phaseIdx, phases, plan, running]);

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setRunning(false);
    setPhaseIdx(0);
    setSecondsLeft(phaseSeconds(phases[0], plan));
  };

  const skip = () => {
    if (phase.kind === "done") return;
    const next = phaseIdx + 1;
    setPhaseIdx(next);
    setSecondsLeft(phaseSeconds(phases[next], plan));
  };

  const totalSeconds = plan.totalSeconds;
  const elapsedSecondsBefore = phases
    .slice(0, phaseIdx)
    .reduce((acc, p) => acc + phaseSeconds(p, plan), 0);
  const elapsed = elapsedSecondsBefore + (phaseSeconds(phase, plan) - secondsLeft);
  const progress = Math.min(100, (elapsed / totalSeconds) * 100);

  if (phase.kind === "done") {
    return (
      <div className="rounded-2xl bg-emerald-50 p-8 text-center ring-1 ring-emerald-200">
        <h2 className="text-3xl font-bold text-emerald-700">
          Allenamento completato!
        </h2>
        <p className="mt-2 text-emerald-800">
          Ottimo lavoro. Ricordati lo stretching.
        </p>
        <button
          onClick={reset}
          className="mt-6 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
        >
          Ricomincia
        </button>
      </div>
    );
  }

  const currentExercise: Exercise | null =
    phase.kind === "work" || phase.kind === "rest"
      ? plan.exercises[phase.exerciseIdx]
      : phase.kind === "roundRest"
      ? plan.exercises[0]
      : null;

  const nextExercise: Exercise | null = (() => {
    for (let i = phaseIdx + 1; i < phases.length; i++) {
      const p = phases[i];
      if (p.kind === "work") return plan.exercises[p.exerciseIdx];
    }
    return null;
  })();

  const phaseLabel =
    phase.kind === "work"
      ? "LAVORO"
      : phase.kind === "rest"
      ? "RIPOSO"
      : "PAUSA TRA I GIRI";

  const phaseColor =
    phase.kind === "work"
      ? "bg-brand-600 text-white"
      : phase.kind === "rest"
      ? "bg-amber-400 text-amber-950"
      : "bg-slate-700 text-white";

  const ringColor =
    phase.kind === "work" ? "stroke-brand-500" : "stroke-amber-400";

  const ringRadius = 90;
  const circumference = 2 * Math.PI * ringRadius;
  const phaseTotal = phaseSeconds(phase, plan);
  const phaseProgress = phaseTotal === 0 ? 0 : 1 - secondsLeft / phaseTotal;
  const dashOffset = circumference * (1 - phaseProgress);

  return (
    <div className="space-y-5">
      <div className="overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-2 bg-brand-500 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div
        className={`rounded-2xl p-5 text-center font-bold tracking-wider ${phaseColor}`}
      >
        {phaseLabel}
      </div>

      <div className="flex flex-col items-center gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <div className="relative h-56 w-56">
          <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
            <circle
              cx="100"
              cy="100"
              r={ringRadius}
              className="stroke-slate-100"
              strokeWidth="14"
              fill="none"
            />
            <circle
              cx="100"
              cy="100"
              r={ringRadius}
              className={ringColor}
              strokeWidth="14"
              strokeLinecap="round"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              style={{ transition: "stroke-dashoffset 1s linear" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-6xl font-bold tabular-nums text-slate-900">
              {secondsLeft}
            </span>
            <span className="text-xs uppercase tracking-wider text-slate-500">
              secondi
            </span>
          </div>
        </div>

        {currentExercise && (
          <div className="w-full text-center">
            <div className="text-xs uppercase tracking-wider text-slate-500">
              {phase.kind === "work"
                ? `Esercizio ${
                    "exerciseIdx" in phase ? phase.exerciseIdx + 1 : 0
                  } / ${plan.exercises.length} · Giro ${
                    ("round" in phase ? phase.round : 0) + 1
                  } / ${plan.rounds}`
                : phase.kind === "rest"
                ? `Prossimo: ${
                    nextExercise ? nextExercise.name : "—"
                  }`
                : `Pausa tra i giri (${
                    "round" in phase ? phase.round + 1 : 0
                  } / ${plan.rounds - 1})`}
            </div>
            <h3 className="mt-1 text-2xl font-bold text-slate-900">
              {phase.kind === "work" ? currentExercise.name : "Recupera"}
            </h3>
            {phase.kind === "work" && (
              <>
                <div className="mx-auto mt-3 h-40 w-40">
                  <ExerciseSvg
                    id={currentExercise.id}
                    className="h-full w-full"
                  />
                </div>
                <p className="mt-3 text-sm text-slate-600">
                  {currentExercise.description}
                </p>
                <p className="mt-1 text-xs italic text-slate-500">
                  {currentExercise.tips}
                </p>
              </>
            )}
            {phase.kind !== "work" && nextExercise && (
              <div className="mx-auto mt-3 h-32 w-32 opacity-60">
                <ExerciseSvg
                  id={nextExercise.id}
                  className="h-full w-full"
                />
              </div>
            )}
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={() => setRunning((r) => !r)}
          className="rounded-xl bg-brand-600 py-3 font-semibold text-white shadow-sm hover:bg-brand-700"
        >
          {running ? "Pausa" : "Avvia"}
        </button>
        <button
          onClick={skip}
          className="rounded-xl bg-slate-200 py-3 font-semibold text-slate-700 hover:bg-slate-300"
        >
          Salta
        </button>
        <button
          onClick={reset}
          className="rounded-xl bg-slate-200 py-3 font-semibold text-slate-700 hover:bg-slate-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
