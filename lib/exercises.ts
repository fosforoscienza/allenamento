export type Equipment =
  | "none"
  | "weights"
  | "ring"
  | "kettlebell"
  | "bands";

export type MuscleGroup =
  | "legs"
  | "glutes"
  | "core"
  | "chest"
  | "back"
  | "shoulders"
  | "arms"
  | "cardio"
  | "fullbody";

export interface Exercise {
  id: string;
  name: string;
  equipment: Equipment;
  groups: MuscleGroup[];
  description: string;
  tips: string;
}

export const EQUIPMENT_LABELS: Record<Equipment, string> = {
  none: "Nessuna attrezzatura",
  weights: "Piccoli pesi",
  ring: "Anello pilates",
  kettlebell: "Kettlebell",
  bands: "Elastici",
};

export const EXERCISES: Exercise[] = [
  // Bodyweight
  {
    id: "squat",
    name: "Squat",
    equipment: "none",
    groups: ["legs", "glutes"],
    description: "Piedi larghezza spalle, scendi piegando le ginocchia tenendo la schiena dritta.",
    tips: "Le ginocchia non devono superare le punte dei piedi.",
  },
  {
    id: "pushup",
    name: "Piegamenti",
    equipment: "none",
    groups: ["chest", "arms", "core"],
    description: "Mani a terra larghezza spalle, corpo dritto, scendi piegando i gomiti.",
    tips: "Mantieni il core attivo, niente bacino abbassato.",
  },
  {
    id: "plank",
    name: "Plank",
    equipment: "none",
    groups: ["core"],
    description: "Avambracci a terra, corpo in linea retta dalle spalle ai talloni.",
    tips: "Respira e non lasciare cadere i fianchi.",
  },
  {
    id: "jumping-jacks",
    name: "Saltelli (jumping jacks)",
    equipment: "none",
    groups: ["cardio", "fullbody"],
    description: "Salti aprendo gambe e portando le braccia sopra la testa.",
    tips: "Movimento ritmico e continuo.",
  },
  {
    id: "lunge",
    name: "Affondi alternati",
    equipment: "none",
    groups: ["legs", "glutes"],
    description: "Un passo avanti e piega il ginocchio, poi torna e cambia gamba.",
    tips: "Tronco eretto, ginocchio anteriore sopra la caviglia.",
  },
  {
    id: "mountain-climber",
    name: "Mountain climber",
    equipment: "none",
    groups: ["core", "cardio"],
    description: "In posizione di plank, porta alternativamente le ginocchia al petto.",
    tips: "Mantieni i fianchi bassi e ritmo costante.",
  },
  {
    id: "crunch",
    name: "Crunch addominali",
    equipment: "none",
    groups: ["core"],
    description: "Disteso, ginocchia piegate, solleva le scapole verso le ginocchia.",
    tips: "Niente strappi col collo, contrai gli addominali.",
  },
  {
    id: "glute-bridge",
    name: "Ponte glutei",
    equipment: "none",
    groups: ["glutes", "core"],
    description: "Disteso a pancia in su, piedi a terra, solleva il bacino.",
    tips: "Stringi i glutei in alto e mantieni 1 secondo.",
  },
  {
    id: "burpee",
    name: "Burpee",
    equipment: "none",
    groups: ["fullbody", "cardio"],
    description: "Squat, mani a terra, gambe indietro in plank, salta indietro e su.",
    tips: "Ritmo regolare, respira.",
  },
  {
    id: "high-knees",
    name: "Skip alto",
    equipment: "none",
    groups: ["cardio", "legs"],
    description: "In piedi, corri sul posto portando le ginocchia in alto.",
    tips: "Braccia coordinate, addome contratto.",
  },
  {
    id: "superman",
    name: "Superman",
    equipment: "none",
    groups: ["back", "glutes"],
    description: "A pancia in giù, solleva contemporaneamente braccia e gambe.",
    tips: "Movimento controllato, sguardo verso il basso.",
  },
  {
    id: "side-plank",
    name: "Plank laterale",
    equipment: "none",
    groups: ["core"],
    description: "Su un lato, avambraccio a terra, fianchi sollevati. Cambia lato a metà.",
    tips: "Corpo in linea, non far cadere i fianchi.",
  },

  // Small weights
  {
    id: "bicep-curl",
    name: "Curl bicipiti",
    equipment: "weights",
    groups: ["arms"],
    description: "In piedi, pesi nelle mani, piega i gomiti portando i pesi alle spalle.",
    tips: "Gomiti vicini al corpo, niente slancio.",
  },
  {
    id: "shoulder-press",
    name: "Spinte spalle",
    equipment: "weights",
    groups: ["shoulders", "arms"],
    description: "Pesi all'altezza delle spalle, spingi sopra la testa.",
    tips: "Schiena dritta, non inarcare la zona lombare.",
  },
  {
    id: "lateral-raise",
    name: "Alzate laterali",
    equipment: "weights",
    groups: ["shoulders"],
    description: "Pesi lungo i fianchi, sollevali lateralmente fino alle spalle.",
    tips: "Gomiti leggermente piegati, movimento controllato.",
  },
  {
    id: "weighted-row",
    name: "Rematore con manubri",
    equipment: "weights",
    groups: ["back", "arms"],
    description: "Busto inclinato avanti, tira i pesi verso i fianchi.",
    tips: "Schiena neutra, scapole indietro.",
  },
  {
    id: "weighted-squat",
    name: "Squat con pesi",
    equipment: "weights",
    groups: ["legs", "glutes"],
    description: "Pesi ai lati o alle spalle, esegui lo squat completo.",
    tips: "Schiena dritta, scendi sotto il parallelo se possibile.",
  },
  {
    id: "tricep-extension",
    name: "Estensione tricipiti",
    equipment: "weights",
    groups: ["arms"],
    description: "Peso sopra la testa con due mani, piega i gomiti dietro la nuca.",
    tips: "Gomiti fermi, vicini alle orecchie.",
  },

  // Pilates ring
  {
    id: "ring-chest-press",
    name: "Compressione petto con anello",
    equipment: "ring",
    groups: ["chest", "arms"],
    description: "Anello tra le mani all'altezza del petto, comprimi e rilascia.",
    tips: "Mantieni le scapole basse e contrai il petto.",
  },
  {
    id: "ring-inner-thigh",
    name: "Adduttori con anello",
    equipment: "ring",
    groups: ["legs", "core"],
    description: "Disteso di lato o in piedi, anello tra le caviglie/ginocchia, comprimi.",
    tips: "Movimento lento, contrai gli adduttori.",
  },
  {
    id: "ring-glute-bridge",
    name: "Ponte glutei con anello",
    equipment: "ring",
    groups: ["glutes", "legs"],
    description: "Anello tra le ginocchia, esegui il ponte mantenendo la pressione.",
    tips: "Spingi le ginocchia verso l'esterno contro l'anello.",
  },
  {
    id: "ring-overhead-press",
    name: "Compressione sopra la testa",
    equipment: "ring",
    groups: ["shoulders", "core"],
    description: "Anello tra le mani sopra la testa, comprimi attivando addome e spalle.",
    tips: "Mantieni le costole basse.",
  },

  // Kettlebell
  {
    id: "kb-swing",
    name: "Kettlebell swing",
    equipment: "kettlebell",
    groups: ["fullbody", "glutes", "back"],
    description: "Slancio del kettlebell tra le gambe e in alto fino al petto, hip hinge.",
    tips: "Spinta dai glutei, schiena neutra.",
  },
  {
    id: "goblet-squat",
    name: "Goblet squat",
    equipment: "kettlebell",
    groups: ["legs", "glutes", "core"],
    description: "Kettlebell al petto con due mani, esegui lo squat profondo.",
    tips: "Petto in fuori, gomiti tra le ginocchia.",
  },
  {
    id: "kb-deadlift",
    name: "Stacco con kettlebell",
    equipment: "kettlebell",
    groups: ["back", "glutes", "legs"],
    description: "Kettlebell a terra tra i piedi, raccogli con schiena dritta e risali.",
    tips: "Bacino indietro, schiena neutra.",
  },
  {
    id: "kb-row",
    name: "Rematore con kettlebell",
    equipment: "kettlebell",
    groups: ["back", "arms"],
    description: "Busto inclinato, tira il kettlebell verso il fianco.",
    tips: "Stringi la scapola in alto.",
  },

  // Bands
  {
    id: "band-pull-apart",
    name: "Apertura elastico",
    equipment: "bands",
    groups: ["back", "shoulders"],
    description: "Elastico teso davanti al petto, allarga le braccia ai lati.",
    tips: "Stringi le scapole alla fine del movimento.",
  },
  {
    id: "band-squat",
    name: "Squat con elastico",
    equipment: "bands",
    groups: ["legs", "glutes"],
    description: "Elastico sotto i piedi e sulle spalle, esegui lo squat.",
    tips: "Mantieni la tensione costante.",
  },
  {
    id: "band-row",
    name: "Rematore con elastico",
    equipment: "bands",
    groups: ["back", "arms"],
    description: "Elastico ancorato davanti, tira verso il busto.",
    tips: "Gomiti vicini al corpo, scapole indietro.",
  },
  {
    id: "band-glute-kickback",
    name: "Calcio glutei con elastico",
    equipment: "bands",
    groups: ["glutes"],
    description: "Elastico alle caviglie, in quadrupedia spingi una gamba indietro.",
    tips: "Movimento controllato, contrai il gluteo.",
  },
  {
    id: "band-lateral-walk",
    name: "Camminata laterale con elastico",
    equipment: "bands",
    groups: ["glutes", "legs"],
    description: "Elastico sopra le ginocchia, mini squat e cammina di lato.",
    tips: "Mantieni la tensione, non unire i piedi.",
  },
];

export function pickExercises(
  available: Equipment[],
  count: number,
  seed: number
): Exercise[] {
  const pool = EXERCISES.filter((e) => available.includes(e.equipment));
  if (pool.length === 0) return [];

  // Simple seeded shuffle (Mulberry32)
  let s = seed >>> 0;
  const rand = () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  const shuffled = [...pool].sort(() => rand() - 0.5);

  // Try to balance groups: avoid two consecutive same primary group
  const result: Exercise[] = [];
  const remaining = [...shuffled];
  while (result.length < count && remaining.length > 0) {
    const lastGroup = result[result.length - 1]?.groups[0];
    const idx = remaining.findIndex((e) => e.groups[0] !== lastGroup);
    const pickIdx = idx >= 0 ? idx : 0;
    result.push(remaining.splice(pickIdx, 1)[0]);
  }

  // If pool smaller than count, repeat (with rotation)
  while (result.length < count) {
    result.push(shuffled[result.length % shuffled.length]);
  }

  return result.slice(0, count);
}
