"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Exercise } from "@/lib/exercises";
import { WorkoutPlan } from "@/lib/generator";
import ExerciseSvg from "./ExerciseSvg";

type Phase =
  | { kind: "warmup"; idx: number }
  | { kind: "warmupRest"; idx: number }
  | { kind: "work"; exerciseIdx: number; round: number }
  | { kind: "rest"; exerciseIdx: number; round: number }
  | { kind: "roundRest"; round: number }
  | { kind: "done" };

function buildPhases(plan: WorkoutPlan): Phase[] {
  const phases: Phase[] = [];
  for (let i = 0; i < plan.warmup.length; i++) {
    phases.push({ kind: "warmup", idx: i });
    if (i < plan.warmup.length - 1) {
      phases.push({ kind: "warmupRest", idx: i });
    }
  }
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
  const warmupSec = Math.round(plan.warmupSeconds / Math.max(1, plan.warmup.length));
  switch (phase.kind) {
    case "warmup":
      return warmupSec;
    case "warmupRest":
      return 5;
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
      } else if (nextPhase.kind === "warmup") {
        beep(660, 150);
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
  const elapsed =
    elapsedSecondsBefore + (phaseSeconds(phase, plan) - secondsLeft);
  const progress = Math.min(100, Math.max(0, (elapsed / totalSeconds) * 100));

  if (phase.kind === "done") {
    return (
      <div className="card p-10 text-center border-emerald-500/40 bg-emerald-500/5">
        <div className="mx-auto h-14 w-14 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            className="h-8 w-8 text-emerald-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="mt-5 text-3xl font-bold text-white">
          Allenamento completato!
        </h2>
        <p className="mt-2 text-emerald-200/80">
          Ottimo lavoro. Concediti uno stretching di 2-3 minuti.
        </p>
        <button onClick={reset} className="btn-primary mt-6">
          Ricomincia
        </button>
      </div>
    );
  }

  const isWarmupPhase = phase.kind === "warmup" || phase.kind === "warmupRest";

  const currentExercise: Exercise | null =
    phase.kind === "warmup"
      ? plan.warmup[phase.idx]
      : phase.kind === "warmupRest"
      ? plan.warmup[phase.idx]
      : phase.kind === "work" || phase.kind === "rest"
      ? plan.exercises[phase.exerciseIdx]
      : null;

  const nextExercise: Exercise | null = (() => {
    for (let i = phaseIdx + 1; i < phases.length; i++) {
      const p = phases[i];
      if (p.kind === "warmup") return plan.warmup[p.idx];
      if (p.kind === "work") return plan.exercises[p.exerciseIdx];
    }
    return null;
  })();

  const phaseLabel =
    phase.kind === "warmup"
      ? "RISCALDAMENTO"
      : phase.kind === "warmupRest"
      ? "TRANSIZIONE"
      : phase.kind === "work"
      ? "LAVORO"
      : phase.kind === "rest"
      ? "RIPOSO"
      : "PAUSA TRA I GIRI";

  const phaseAccent =
    phase.kind === "warmup"
      ? "from-violet-500 to-fuchsia-500"
      : phase.kind === "warmupRest"
      ? "from-slate-600 to-slate-500"
      : phase.kind === "work"
      ? "from-sky-500 to-indigo-500"
      : phase.kind === "rest"
      ? "from-amber-500 to-orange-500"
      : "from-slate-700 to-slate-600";

  const ringColor =
    phase.kind === "warmup"
      ? "stroke-violet-400"
      : phase.kind === "work"
      ? "stroke-sky-400"
      : phase.kind === "rest"
      ? "stroke-amber-400"
      : "stroke-slate-400";

  const ringRadius = 88;
  const circumference = 2 * Math.PI * ringRadius;
  const phaseTotal = phaseSeconds(phase, plan);
  const phaseProgress = phaseTotal === 0 ? 0 : 1 - secondsLeft / phaseTotal;
  const dashOffset = circumference * (1 - phaseProgress);

  const positionLabel = (() => {
    if (phase.kind === "warmup")
      return `Riscaldamento ${phase.idx + 1}/${plan.warmup.length}`;
    if (phase.kind === "work")
      return `Esercizio ${phase.exerciseIdx + 1}/${
        plan.exercises.length
      } · Giro ${phase.round + 1}/${plan.rounds}`;
    if (phase.kind === "rest")
      return `Riposo · Prossimo: ${nextExercise?.name ?? "—"}`;
    if (phase.kind === "roundRest")
      return `Pausa giro ${phase.round + 1}/${plan.rounds - 1}`;
    return "Transizione";
  })();

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-full bg-slate-800 border border-slate-700">
        <div
          className="h-2 bg-gradient-to-r from-sky-400 to-indigo-400 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div
        className={`rounded-2xl p-3 text-center font-bold tracking-[0.2em] text-sm bg-gradient-to-r ${phaseAccent} text-white shadow-lg`}
      >
        {phaseLabel}
      </div>

      <div className="card p-6 sm:p-8">
        <div className="flex flex-col items-center gap-5">
          <div className="relative h-56 w-56 sm:h-64 sm:w-64">
            <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
              <circle
                cx="100"
                cy="100"
                r={ringRadius}
                className="stroke-slate-800"
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
              <span className="text-6xl sm:text-7xl font-bold tabular-nums text-white">
                {secondsLeft}
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.3em] text-slate-400">
                secondi
              </span>
            </div>
          </div>

          {currentExercise && (
            <div className="w-full text-center">
              <div className="text-xs uppercase tracking-wider text-slate-400">
                {positionLabel}
              </div>
              <h3 className="mt-1 text-2xl font-bold text-white">
                {phase.kind === "rest" || phase.kind === "warmupRest"
                  ? "Recupera"
                  : currentExercise.name}
              </h3>

              {(phase.kind === "work" || phase.kind === "warmup") && (
                <>
                  <div className="mx-auto mt-4 h-40 w-40 rounded-2xl bg-slate-900/60 border border-slate-800 p-2">
                    <ExerciseSvg
                      id={currentExercise.id}
                      className="h-full w-full"
                    />
                  </div>
                  <p className="mt-4 text-sm text-slate-300">
                    {currentExercise.description}
                  </p>
                  <ol className="mx-auto mt-3 max-w-md space-y-1.5 text-left text-xs text-slate-400">
                    {currentExercise.howTo.map((step, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-slate-500 shrink-0">
                          {i + 1}.
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-3 text-xs italic text-amber-300/80">
                    💡 {currentExercise.tips}
                  </p>
                </>
              )}

              {(phase.kind === "rest" ||
                phase.kind === "warmupRest" ||
                phase.kind === "roundRest") &&
                nextExercise && (
                  <div className="mt-4">
                    <div className="text-xs uppercase tracking-wider text-slate-500">
                      Prossimo esercizio
                    </div>
                    <div className="mt-1 text-base font-semibold text-slate-200">
                      {nextExercise.name}
                    </div>
                    <div className="mx-auto mt-2 h-32 w-32 rounded-2xl bg-slate-900/60 border border-slate-800 p-2 opacity-80">
                      <ExerciseSvg
                        id={nextExercise.id}
                        className="h-full w-full"
                      />
                    </div>
                  </div>
                )}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => setRunning((r) => !r)}
          className="btn-primary py-3"
        >
          {running ? "Pausa" : "Avvia"}
        </button>
        <button onClick={skip} className="btn-ghost py-3">
          Salta
        </button>
        <button onClick={reset} className="btn-ghost py-3">
          Reset
        </button>
      </div>

      <div className="text-center text-xs text-slate-500">
        {isWarmupPhase
          ? "Mobilità e attivazione muscolare"
          : `${plan.workSeconds}s lavoro · ${plan.restSeconds}s riposo · giro ${
              "round" in phase ? phase.round + 1 : 1
            }/${plan.rounds}`}
      </div>
    </div>
  );
}
