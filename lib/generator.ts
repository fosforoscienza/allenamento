import { Equipment, Exercise, Goal, pickExercises } from "./exercises";

export interface WorkoutParams {
  daysPerWeek: number;
  durationMinutes: 15 | 30;
  equipment: Equipment[];
  goal: Goal;
  sessionIndex?: number;
}

export interface WorkoutPlan {
  warmup: Exercise[];
  warmupSeconds: number;
  exercises: Exercise[];
  rounds: number;
  workSeconds: number;
  restSeconds: number;
  roundRestSeconds: number;
  totalSeconds: number;
  goal: Goal;
}

export function generateWorkout(params: WorkoutParams): WorkoutPlan {
  const equipment: Equipment[] =
    params.equipment.length > 0 ? params.equipment : ["none"];

  const session = params.sessionIndex ?? 0;
  const goalSeed: Record<Goal, number> = {
    completo: 1,
    dimagrire: 2,
    tonificare: 3,
    forza: 4,
    addominali: 5,
    "gambe-glutei": 6,
    "parte-superiore": 7,
  };
  const seedBase =
    session * 31 +
    params.daysPerWeek * 7 +
    params.durationMinutes * 13 +
    goalSeed[params.goal] * 101;

  // Riscaldamento sempre da corpo libero
  const isShort = params.durationMinutes === 15;
  const warmupCount = isShort ? 4 : 5;
  const warmupSecondsPer = isShort ? 25 : 30;
  const warmup = pickExercises({
    available: ["none"],
    count: warmupCount,
    seed: seedBase + 1,
    warmup: true,
  });
  const warmupSeconds = warmup.length * warmupSecondsPer;

  if (isShort) {
    const exercises = pickExercises({
      available: equipment,
      count: 5,
      seed: seedBase,
      goal: params.goal,
    });
    const rounds = 3;
    const workSeconds = 35;
    const restSeconds = 15;
    const roundRestSeconds = 30;
    const totalSeconds =
      warmupSeconds +
      rounds * exercises.length * (workSeconds + restSeconds) +
      (rounds - 1) * roundRestSeconds;
    return {
      warmup,
      warmupSeconds,
      exercises,
      rounds,
      workSeconds,
      restSeconds,
      roundRestSeconds,
      totalSeconds,
      goal: params.goal,
    };
  }

  const exercises = pickExercises({
    available: equipment,
    count: 8,
    seed: seedBase,
    goal: params.goal,
  });
  const rounds = 3;
  const workSeconds = 40;
  const restSeconds = 20;
  const roundRestSeconds = 60;
  const totalSeconds =
    warmupSeconds +
    rounds * exercises.length * (workSeconds + restSeconds) +
    (rounds - 1) * roundRestSeconds;
  return {
    warmup,
    warmupSeconds,
    exercises,
    rounds,
    workSeconds,
    restSeconds,
    roundRestSeconds,
    totalSeconds,
    goal: params.goal,
  };
}

export function formatDuration(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return s === 0 ? `${m} min` : `${m}m ${s}s`;
}
