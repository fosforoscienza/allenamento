import { Equipment, Exercise, pickExercises } from "./exercises";

export interface WorkoutParams {
  daysPerWeek: number;
  durationMinutes: 15 | 30;
  equipment: Equipment[];
  sessionIndex?: number; // for variety across the week
}

export interface WorkoutPlan {
  exercises: Exercise[];
  rounds: number;
  workSeconds: number;
  restSeconds: number;
  roundRestSeconds: number;
  totalSeconds: number;
}

export function generateWorkout(params: WorkoutParams): WorkoutPlan {
  const equipment: Equipment[] =
    params.equipment.length > 0 ? params.equipment : ["none"];

  const session = params.sessionIndex ?? 0;
  const seed = session * 31 + params.daysPerWeek * 7 + params.durationMinutes;

  if (params.durationMinutes === 15) {
    const exercises = pickExercises(equipment, 5, seed);
    const rounds = 3;
    const workSeconds = 40;
    const restSeconds = 20;
    const roundRestSeconds = 30;
    const totalSeconds =
      rounds * exercises.length * (workSeconds + restSeconds) +
      (rounds - 1) * roundRestSeconds;
    return {
      exercises,
      rounds,
      workSeconds,
      restSeconds,
      roundRestSeconds,
      totalSeconds,
    };
  }

  // 30 min
  const exercises = pickExercises(equipment, 8, seed);
  const rounds = 3;
  const workSeconds = 40;
  const restSeconds = 20;
  const roundRestSeconds = 60;
  const totalSeconds =
    rounds * exercises.length * (workSeconds + restSeconds) +
    (rounds - 1) * roundRestSeconds;
  return {
    exercises,
    rounds,
    workSeconds,
    restSeconds,
    roundRestSeconds,
    totalSeconds,
  };
}

export function formatDuration(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return s === 0 ? `${m} min` : `${m} min ${s}s`;
}
