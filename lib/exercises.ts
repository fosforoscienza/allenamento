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
  | "fullbody"
  | "mobility";

export type Goal =
  | "completo"
  | "dimagrire"
  | "tonificare"
  | "forza"
  | "addominali"
  | "gambe-glutei"
  | "parte-superiore";

export interface Exercise {
  id: string;
  name: string;
  equipment: Equipment;
  groups: MuscleGroup[];
  goals: Goal[];
  warmup?: boolean;
  description: string;
  howTo: string[];
  tips: string;
}

export const EQUIPMENT_LABELS: Record<Equipment, string> = {
  none: "Corpo libero (calisthenics)",
  weights: "Piccoli pesi / manubri",
  ring: "Anello pilates",
  kettlebell: "Kettlebell",
  bands: "Elastici",
};

export const GOAL_LABELS: Record<Goal, { name: string; sub: string }> = {
  completo: { name: "Allenamento completo", sub: "Equilibrio full-body" },
  dimagrire: { name: "Dimagrire", sub: "Brucia grassi · cardio" },
  tonificare: { name: "Tonificare", sub: "Definizione muscolare" },
  forza: { name: "Forza", sub: "Aumenta la forza" },
  addominali: { name: "Addominali", sub: "Core · pancia piatta" },
  "gambe-glutei": { name: "Gambe & glutei", sub: "Parte inferiore" },
  "parte-superiore": {
    name: "Parte superiore",
    sub: "Petto, schiena, braccia, spalle",
  },
};

export const EXERCISES: Exercise[] = [
  // ─────────── WARM-UP ───────────
  {
    id: "wu-march",
    name: "Marcia sul posto",
    equipment: "none",
    warmup: true,
    groups: ["cardio", "mobility"],
    goals: [
      "completo",
      "dimagrire",
      "tonificare",
      "forza",
      "addominali",
      "gambe-glutei",
      "parte-superiore",
    ],
    description:
      "Marcia sul posto sollevando le ginocchia, oscillando le braccia.",
    howTo: [
      "In piedi, schiena dritta, sguardo avanti.",
      "Solleva alternativamente le ginocchia all'altezza dell'anca.",
      "Coordina le braccia in modo opposto alle gambe.",
      "Mantieni un ritmo costante e respira.",
    ],
    tips: "Ottimo come primo movimento per attivare la circolazione.",
  },
  {
    id: "wu-arm-circles",
    name: "Circonduzioni braccia",
    equipment: "none",
    warmup: true,
    groups: ["shoulders", "mobility"],
    goals: [
      "completo",
      "dimagrire",
      "tonificare",
      "forza",
      "parte-superiore",
      "addominali",
      "gambe-glutei",
    ],
    description: "Cerchi ampi con le braccia per riscaldare le spalle.",
    howTo: [
      "In piedi, braccia tese ai lati a livello delle spalle.",
      "Disegna piccoli cerchi in avanti per 15 secondi.",
      "Inverti il senso e disegna cerchi all'indietro.",
      "Aumenta gradualmente l'ampiezza del movimento.",
    ],
    tips: "Spalle basse e rilassate, niente strappi.",
  },
  {
    id: "wu-hip-circles",
    name: "Circonduzioni anche",
    equipment: "none",
    warmup: true,
    groups: ["mobility", "core"],
    goals: [
      "completo",
      "dimagrire",
      "tonificare",
      "forza",
      "addominali",
      "gambe-glutei",
      "parte-superiore",
    ],
    description: "Cerchi con il bacino per mobilizzare le anche.",
    howTo: [
      "In piedi, mani sui fianchi, piedi larghezza spalle.",
      "Disegna cerchi ampi con il bacino in senso orario.",
      "Cambia senso a metà del tempo.",
      "Mantieni il busto stabile e i piedi a terra.",
    ],
    tips: "Movimento lento e controllato.",
  },
  {
    id: "wu-torso-twist",
    name: "Torsioni del busto",
    equipment: "none",
    warmup: true,
    groups: ["core", "mobility"],
    goals: [
      "completo",
      "dimagrire",
      "tonificare",
      "forza",
      "addominali",
      "gambe-glutei",
      "parte-superiore",
    ],
    description: "Torsioni del busto con braccia rilassate.",
    howTo: [
      "In piedi, gambe larghezza spalle, ginocchia morbide.",
      "Ruota busto e braccia a destra in modo fluido.",
      "Lascia che le braccia seguano il movimento.",
      "Inverti immediatamente verso sinistra.",
    ],
    tips: "Il bacino resta stabile, ruota solo dal busto.",
  },
  {
    id: "wu-leg-swings",
    name: "Slanci delle gambe",
    equipment: "none",
    warmup: true,
    groups: ["legs", "mobility"],
    goals: [
      "completo",
      "dimagrire",
      "tonificare",
      "forza",
      "gambe-glutei",
      "addominali",
      "parte-superiore",
    ],
    description: "Slanci avanti-indietro per riscaldare l'anca.",
    howTo: [
      "In piedi, mano appoggiata a un muro per equilibrio.",
      "Slancia una gamba avanti e indietro in modo fluido.",
      "Esegui 10 slanci, poi cambia gamba.",
      "Mantieni il busto eretto e l'addome attivo.",
    ],
    tips: "Movimento ampio ma controllato.",
  },
  {
    id: "wu-knee-hugs",
    name: "Ginocchia al petto",
    equipment: "none",
    warmup: true,
    groups: ["legs", "core", "mobility"],
    goals: [
      "completo",
      "dimagrire",
      "tonificare",
      "forza",
      "gambe-glutei",
      "addominali",
      "parte-superiore",
    ],
    description: "Porta alternativamente le ginocchia al petto.",
    howTo: [
      "In piedi, schiena dritta.",
      "Porta il ginocchio destro al petto, abbraccialo per 1 sec.",
      "Rilascia e ripeti con il ginocchio sinistro.",
      "Alterna in modo fluido.",
    ],
    tips: "Mantieni l'equilibrio attivando il core.",
  },
  {
    id: "wu-mobility-squat",
    name: "Squat di mobilità",
    equipment: "none",
    warmup: true,
    groups: ["legs", "mobility"],
    goals: [
      "completo",
      "dimagrire",
      "tonificare",
      "forza",
      "gambe-glutei",
      "addominali",
      "parte-superiore",
    ],
    description: "Squat lenti per attivare gambe e anche.",
    howTo: [
      "Piedi larghezza spalle, braccia tese in avanti.",
      "Scendi lentamente in squat, schiena neutra.",
      "Tieni la posizione bassa per 1-2 secondi.",
      "Risali con controllo.",
    ],
    tips: "Profondità solo dove riesci a mantenere la schiena dritta.",
  },
  {
    id: "wu-shoulder-rolls",
    name: "Circonduzioni spalle",
    equipment: "none",
    warmup: true,
    groups: ["shoulders", "back", "mobility"],
    goals: [
      "completo",
      "dimagrire",
      "tonificare",
      "forza",
      "parte-superiore",
      "addominali",
      "gambe-glutei",
    ],
    description: "Rotazioni delle spalle in entrambe le direzioni.",
    howTo: [
      "In piedi, braccia rilassate ai lati.",
      "Solleva le spalle e ruotale all'indietro.",
      "Disegna cerchi grandi e fluidi.",
      "Cambia direzione a metà tempo.",
    ],
    tips: "Movimento lento per sciogliere il trapezio.",
  },
  {
    id: "wu-cat-cow",
    name: "Gatto-mucca",
    equipment: "none",
    warmup: true,
    groups: ["back", "core", "mobility"],
    goals: [
      "completo",
      "dimagrire",
      "tonificare",
      "forza",
      "addominali",
      "parte-superiore",
      "gambe-glutei",
    ],
    description: "Mobilità della colonna in quadrupedia.",
    howTo: [
      "In quadrupedia, mani sotto le spalle, ginocchia sotto le anche.",
      "Inarca la schiena verso il basso, sguardo in alto (mucca).",
      "Inverti incurvando la schiena verso l'alto, mento al petto (gatto).",
      "Alterna in modo fluido seguendo il respiro.",
    ],
    tips: "Movimento lento e controllato, sincronizzato col respiro.",
  },
  {
    id: "wu-jumping-jacks",
    name: "Saltelli leggeri",
    equipment: "none",
    warmup: true,
    groups: ["cardio", "fullbody"],
    goals: [
      "completo",
      "dimagrire",
      "tonificare",
      "forza",
      "addominali",
      "gambe-glutei",
      "parte-superiore",
    ],
    description: "Jumping jacks a ritmo blando per alzare la frequenza.",
    howTo: [
      "Piedi uniti, braccia ai fianchi.",
      "Salta aprendo le gambe e portando le braccia sopra la testa.",
      "Salta di nuovo tornando alla posizione iniziale.",
      "Mantieni un ritmo costante.",
    ],
    tips: "Ritmo blando in fase di riscaldamento.",
  },

  // ─────────── BODYWEIGHT MAIN ───────────
  {
    id: "squat",
    name: "Squat",
    equipment: "none",
    groups: ["legs", "glutes"],
    goals: ["completo", "tonificare", "forza", "gambe-glutei"],
    description: "Re degli esercizi per gambe e glutei.",
    howTo: [
      "Piedi larghezza spalle, punte leggermente in fuori.",
      "Spingi i fianchi indietro come per sederti su una sedia.",
      "Scendi finché le cosce sono parallele al pavimento.",
      "Spingi sui talloni per tornare in piedi contraendo i glutei.",
    ],
    tips: "Ginocchia in linea con le punte dei piedi, schiena dritta.",
  },
  {
    id: "jump-squat",
    name: "Squat con salto",
    equipment: "none",
    groups: ["legs", "glutes", "cardio"],
    goals: ["dimagrire", "completo", "gambe-glutei"],
    description: "Squat esplosivo con salto: brucia molte calorie.",
    howTo: [
      "Esegui uno squat normale.",
      "Risalendo, spingi con forza per saltare verticalmente.",
      "Atterra morbido sulle punte e ammortizza piegando le ginocchia.",
      "Concatenati subito col successivo.",
    ],
    tips: "Atterraggio sempre controllato per proteggere le ginocchia.",
  },
  {
    id: "lunge",
    name: "Affondi alternati",
    equipment: "none",
    groups: ["legs", "glutes"],
    goals: ["completo", "tonificare", "forza", "gambe-glutei"],
    description: "Affondi avanti alternando gamba destra e sinistra.",
    howTo: [
      "In piedi, busto eretto, mani sui fianchi.",
      "Fai un passo avanti e abbassa il bacino.",
      "Il ginocchio anteriore sopra la caviglia, quello posteriore vicino al pavimento.",
      "Spingi sul tallone anteriore per tornare in piedi e cambia gamba.",
    ],
    tips: "Tronco eretto durante tutto il movimento.",
  },
  {
    id: "reverse-lunge",
    name: "Affondi indietro",
    equipment: "none",
    groups: ["legs", "glutes"],
    goals: ["completo", "tonificare", "forza", "gambe-glutei"],
    description: "Variante più stabile dell'affondo classico.",
    howTo: [
      "In piedi, mani sui fianchi.",
      "Fai un passo lungo all'indietro e piega entrambe le ginocchia.",
      "Il ginocchio anteriore resta sopra la caviglia.",
      "Spingi col tallone anteriore per tornare in piedi.",
    ],
    tips: "Più gentile sulle ginocchia rispetto all'affondo avanti.",
  },
  {
    id: "wall-sit",
    name: "Wall sit",
    equipment: "none",
    groups: ["legs", "glutes"],
    goals: ["forza", "tonificare", "gambe-glutei"],
    description: "Mantieni la posizione di squat contro il muro.",
    howTo: [
      "Schiena al muro, scivola in basso fino ad avere ginocchia a 90°.",
      "Cosce parallele al pavimento, ginocchia sopra le caviglie.",
      "Schiena ben aderente al muro.",
      "Mantieni la posizione respirando.",
    ],
    tips: "Se diventa troppo, sali leggermente per ridurre l'angolo.",
  },
  {
    id: "glute-bridge",
    name: "Ponte glutei",
    equipment: "none",
    groups: ["glutes", "core"],
    goals: ["tonificare", "forza", "gambe-glutei"],
    description: "Sollevamento del bacino: classico per i glutei.",
    howTo: [
      "Disteso a pancia in su, ginocchia piegate, piedi a terra.",
      "Spingi sui talloni e solleva il bacino verso l'alto.",
      "Stringi forte i glutei in cima.",
      "Scendi controllando il movimento.",
    ],
    tips: "Le anche devono essere allineate con ginocchia e spalle.",
  },
  {
    id: "single-leg-glute-bridge",
    name: "Ponte glutei monopodalico",
    equipment: "none",
    groups: ["glutes", "core"],
    goals: ["forza", "tonificare", "gambe-glutei"],
    description: "Ponte glutei eseguito su una sola gamba.",
    howTo: [
      "Posizione del ponte glutei.",
      "Solleva una gamba mantenendo ginocchio piegato.",
      "Spingi col tallone d'appoggio per sollevare il bacino.",
      "Esegui metà ripetizioni per gamba.",
    ],
    tips: "Il bacino resta dritto, non si inclina.",
  },
  {
    id: "pushup",
    name: "Piegamenti (push-up)",
    equipment: "none",
    groups: ["chest", "arms", "core"],
    goals: ["forza", "tonificare", "completo", "parte-superiore"],
    description: "Push-up classici per petto, spalle e tricipiti.",
    howTo: [
      "Mani a terra larghezza spalle, corpo in linea.",
      "Scendi piegando i gomiti a circa 45° dal busto.",
      "Sfiora il pavimento col petto.",
      "Spingi per tornare in alto contraendo il petto.",
    ],
    tips: "Se troppo difficile, appoggia le ginocchia.",
  },
  {
    id: "incline-pushup",
    name: "Piegamenti inclinati",
    equipment: "none",
    groups: ["chest", "arms"],
    goals: ["tonificare", "parte-superiore", "completo"],
    description: "Push-up con mani su superficie rialzata: più accessibili.",
    howTo: [
      "Mani su un tavolo o sedia stabile, corpo in linea.",
      "Scendi piegando i gomiti, sfiora la superficie col petto.",
      "Spingi e torna su.",
      "Mantieni il core attivo per non far cadere i fianchi.",
    ],
    tips: "Più la superficie è alta, più l'esercizio è facile.",
  },
  {
    id: "pike-pushup",
    name: "Pike push-up",
    equipment: "none",
    groups: ["shoulders", "arms"],
    goals: ["forza", "parte-superiore"],
    description: "Push-up a 'V': enfasi sulle spalle.",
    howTo: [
      "Posizione di piegamento, fianchi alti come una V rovesciata.",
      "Piega i gomiti portando la testa verso il pavimento.",
      "Spingi per tornare nella V.",
      "Mantieni i talloni il più vicino possibile al pavimento.",
    ],
    tips: "Più i piedi sono vicini alle mani, più peso sulle spalle.",
  },
  {
    id: "tricep-dip",
    name: "Dip tricipiti su sedia",
    equipment: "none",
    groups: ["arms", "chest"],
    goals: ["forza", "tonificare", "parte-superiore"],
    description: "Dip ai tricipiti usando una sedia o panca.",
    howTo: [
      "Mani sul bordo di una sedia stabile, gambe distese in avanti.",
      "Scendi piegando i gomiti finché il braccio è a 90°.",
      "Spingi per tornare in alto contraendo i tricipiti.",
      "Gomiti che puntano dritti dietro, non verso fuori.",
    ],
    tips: "Tieni le spalle basse e lontane dalle orecchie.",
  },
  {
    id: "plank",
    name: "Plank",
    equipment: "none",
    groups: ["core"],
    goals: ["addominali", "tonificare", "forza"],
    description: "Tenuta isometrica per il core.",
    howTo: [
      "Avambracci a terra, gomiti sotto le spalle.",
      "Corpo in linea retta dalla testa ai talloni.",
      "Contrai addome, glutei e quadricipiti.",
      "Respira normalmente per tutta la durata.",
    ],
    tips: "Niente fianchi alti né bassi, linea perfetta.",
  },
  {
    id: "side-plank",
    name: "Plank laterale",
    equipment: "none",
    groups: ["core"],
    goals: ["addominali", "tonificare", "forza"],
    description: "Plank di lato per gli obliqui.",
    howTo: [
      "Su un fianco, avambraccio a terra sotto la spalla.",
      "Solleva i fianchi creando una linea retta.",
      "Mano libera sul fianco o tesa verso l'alto.",
      "Tieni metà tempo, poi cambia lato.",
    ],
    tips: "Niente bacino caduto verso il pavimento.",
  },
  {
    id: "plank-shoulder-taps",
    name: "Plank con tocchi di spalla",
    equipment: "none",
    groups: ["core", "shoulders"],
    goals: ["addominali", "tonificare", "forza"],
    description: "Plank alto con tocchi alternati alle spalle.",
    howTo: [
      "Plank alto, mani sotto le spalle.",
      "Tocca la spalla sinistra con la mano destra.",
      "Torna giù e ripeti dall'altro lato.",
      "Mantieni i fianchi fermi, niente oscillazioni.",
    ],
    tips: "Più allarghi i piedi, più l'esercizio è stabile.",
  },
  {
    id: "mountain-climber",
    name: "Mountain climber",
    equipment: "none",
    groups: ["core", "cardio"],
    goals: ["dimagrire", "addominali", "completo"],
    description: "Corsa sul posto in posizione di plank.",
    howTo: [
      "Plank alto, mani sotto le spalle.",
      "Porta velocemente il ginocchio destro al petto.",
      "Cambia gamba in modo esplosivo.",
      "Mantieni i fianchi bassi e l'addome attivo.",
    ],
    tips: "Ritmo veloce ma controllato.",
  },
  {
    id: "burpee",
    name: "Burpee",
    equipment: "none",
    groups: ["fullbody", "cardio"],
    goals: ["dimagrire", "completo", "forza"],
    description: "Esercizio total-body, brucia molte calorie.",
    howTo: [
      "In piedi, scendi in squat e appoggia le mani a terra.",
      "Salta indietro con i piedi in posizione di plank.",
      "Esegui un piegamento (opzionale), poi salta in avanti.",
      "Salta in alto distendendo le braccia sopra la testa.",
    ],
    tips: "Ritmo regolare, qualità prima della velocità.",
  },
  {
    id: "high-knees",
    name: "Skip alto",
    equipment: "none",
    groups: ["cardio", "legs"],
    goals: ["dimagrire", "completo", "gambe-glutei"],
    description: "Corsa sul posto con ginocchia alte.",
    howTo: [
      "In piedi, busto leggermente in avanti.",
      "Solleva le ginocchia ad altezza anca, alternando velocemente.",
      "Coordina le braccia in modo opposto.",
      "Atterra sulle punte dei piedi.",
    ],
    tips: "Mantieni l'addome attivo e il ritmo costante.",
  },
  {
    id: "jumping-jacks",
    name: "Jumping jacks",
    equipment: "none",
    groups: ["cardio", "fullbody"],
    goals: ["dimagrire", "completo"],
    description: "Saltelli aprendo gambe e braccia.",
    howTo: [
      "Piedi uniti, braccia lungo il corpo.",
      "Salta aprendo le gambe e portando le braccia sopra la testa.",
      "Salta di nuovo tornando alla posizione iniziale.",
      "Movimento esplosivo e ritmico.",
    ],
    tips: "Atterra sempre con ginocchia morbide.",
  },
  {
    id: "crunch",
    name: "Crunch addominali",
    equipment: "none",
    groups: ["core"],
    goals: ["addominali", "tonificare"],
    description: "Crunch classico per il retto addominale.",
    howTo: [
      "Disteso a pancia in su, ginocchia piegate, mani alle tempie.",
      "Solleva le scapole staccandole dal pavimento.",
      "Espira contraendo gli addominali.",
      "Scendi controllando senza appoggiare la testa.",
    ],
    tips: "Il collo segue la colonna, non tirare con le mani.",
  },
  {
    id: "reverse-crunch",
    name: "Crunch inverso",
    equipment: "none",
    groups: ["core"],
    goals: ["addominali", "tonificare"],
    description: "Crunch inverso per la parte bassa dell'addome.",
    howTo: [
      "Disteso, mani lungo i fianchi, gambe piegate a 90°.",
      "Stacca il bacino dal pavimento portando le ginocchia al petto.",
      "Contrai forte l'addome basso in cima.",
      "Scendi lentamente senza far cadere le gambe.",
    ],
    tips: "Movimento corto ma intenso, niente slancio.",
  },
  {
    id: "bicycle-crunch",
    name: "Bicicletta",
    equipment: "none",
    groups: ["core"],
    goals: ["addominali", "tonificare", "dimagrire"],
    description: "Crunch alternato 'a bicicletta' per gli obliqui.",
    howTo: [
      "Disteso, mani alle tempie, gambe sollevate a 90°.",
      "Porta gomito destro al ginocchio sinistro mentre estendi l'altra gamba.",
      "Inverti il movimento alternando in modo fluido.",
      "Espira ad ogni torsione.",
    ],
    tips: "Ruota dal busto, non tirare il collo con le mani.",
  },
  {
    id: "russian-twist",
    name: "Russian twist",
    equipment: "none",
    groups: ["core"],
    goals: ["addominali", "tonificare"],
    description: "Torsione del busto da seduto per gli obliqui.",
    howTo: [
      "Seduto, ginocchia piegate, busto inclinato indietro.",
      "Mani giunte davanti al petto.",
      "Ruota il busto a destra e poi a sinistra.",
      "Per più difficoltà, solleva i piedi da terra.",
    ],
    tips: "Mantieni la schiena dritta, ruota dal busto.",
  },
  {
    id: "v-up",
    name: "V-up",
    equipment: "none",
    groups: ["core"],
    goals: ["addominali", "forza"],
    description: "Solleva contemporaneamente busto e gambe formando una V.",
    howTo: [
      "Disteso, braccia tese sopra la testa, gambe distese.",
      "Solleva contemporaneamente busto e gambe.",
      "Tocca le punte dei piedi con le mani in cima.",
      "Scendi controllando senza toccare il pavimento.",
    ],
    tips: "Se troppo difficile, piega le ginocchia.",
  },
  {
    id: "flutter-kicks",
    name: "Forbici",
    equipment: "none",
    groups: ["core"],
    goals: ["addominali", "tonificare"],
    description: "Movimento alternato delle gambe a 'forbice'.",
    howTo: [
      "Disteso, mani sotto i glutei o lungo i fianchi.",
      "Solleva leggermente le gambe da terra.",
      "Esegui piccoli movimenti alternati su e giù.",
      "Mantieni la zona lombare aderente al pavimento.",
    ],
    tips: "Più tieni le gambe basse, più l'addome lavora.",
  },
  {
    id: "dead-bug",
    name: "Dead bug",
    equipment: "none",
    groups: ["core"],
    goals: ["addominali", "forza", "tonificare"],
    description: "Esercizio di stabilità del core.",
    howTo: [
      "Disteso, braccia verso il soffitto, ginocchia a 90°.",
      "Estendi braccio destro indietro e gamba sinistra avanti.",
      "Torna al centro e ripeti dall'altro lato.",
      "Tieni la zona lombare a terra durante tutto il movimento.",
    ],
    tips: "Movimento lento, qualità prima della quantità.",
  },
  {
    id: "bird-dog",
    name: "Bird dog",
    equipment: "none",
    groups: ["core", "back"],
    goals: ["forza", "tonificare", "addominali"],
    description: "Stabilità del core e zona lombare in quadrupedia.",
    howTo: [
      "In quadrupedia, mani sotto le spalle, ginocchia sotto le anche.",
      "Estendi braccio destro avanti e gamba sinistra indietro.",
      "Mantieni 1-2 secondi, poi cambia lato.",
      "Non far ruotare il bacino.",
    ],
    tips: "Schiena neutra, sguardo verso il pavimento.",
  },
  {
    id: "superman",
    name: "Superman",
    equipment: "none",
    groups: ["back", "glutes"],
    goals: ["forza", "tonificare", "parte-superiore"],
    description: "Sollevamento di braccia e gambe da prono.",
    howTo: [
      "A pancia in giù, braccia tese in avanti.",
      "Solleva braccia, petto e gambe contemporaneamente.",
      "Tieni 1-2 secondi in alto.",
      "Scendi controllando.",
    ],
    tips: "Sguardo verso il pavimento, niente iperestensione del collo.",
  },

  // ─────────── PICCOLI PESI ───────────
  {
    id: "bicep-curl",
    name: "Curl bicipiti",
    equipment: "weights",
    groups: ["arms"],
    goals: ["tonificare", "forza", "parte-superiore"],
    description: "Classico esercizio di isolamento per i bicipiti.",
    howTo: [
      "In piedi, manubri lungo i fianchi, palmi in avanti.",
      "Piega i gomiti portando i pesi verso le spalle.",
      "Stringi forte i bicipiti in cima.",
      "Scendi controllando senza far cadere i pesi.",
    ],
    tips: "Gomiti vicini al busto, niente slancio del corpo.",
  },
  {
    id: "shoulder-press",
    name: "Spinte sopra la testa",
    equipment: "weights",
    groups: ["shoulders", "arms"],
    goals: ["forza", "tonificare", "parte-superiore"],
    description: "Spinte verticali per le spalle.",
    howTo: [
      "Manubri all'altezza delle spalle, palmi in avanti.",
      "Spingi i pesi verso l'alto fino a distendere le braccia.",
      "Mantieni le costole basse.",
      "Scendi controllando alle spalle.",
    ],
    tips: "Niente inarcamento della schiena lombare.",
  },
  {
    id: "lateral-raise",
    name: "Alzate laterali",
    equipment: "weights",
    groups: ["shoulders"],
    goals: ["tonificare", "parte-superiore"],
    description: "Isolamento dei deltoidi laterali.",
    howTo: [
      "In piedi, manubri lungo i fianchi.",
      "Solleva le braccia ai lati fino all'altezza delle spalle.",
      "Gomiti leggermente piegati durante il movimento.",
      "Scendi lentamente.",
    ],
    tips: "Movimento controllato, niente slancio.",
  },
  {
    id: "weighted-row",
    name: "Rematore con manubri",
    equipment: "weights",
    groups: ["back", "arms"],
    goals: ["forza", "tonificare", "parte-superiore"],
    description: "Tirata orizzontale per la schiena.",
    howTo: [
      "Busto inclinato a 45°, ginocchia morbide, schiena neutra.",
      "Manubri lungo la linea delle gambe.",
      "Tira i pesi verso la vita stringendo le scapole.",
      "Scendi controllando.",
    ],
    tips: "Niente arrotondamento della schiena, sguardo a 1m davanti.",
  },
  {
    id: "weighted-squat",
    name: "Squat con pesi",
    equipment: "weights",
    groups: ["legs", "glutes"],
    goals: ["forza", "tonificare", "gambe-glutei", "completo"],
    description: "Squat tenendo i pesi alle spalle o ai fianchi.",
    howTo: [
      "Manubri sulle spalle o lungo i fianchi.",
      "Esegui lo squat scendendo con la schiena dritta.",
      "Cosce parallele al pavimento.",
      "Risali spingendo dai talloni.",
    ],
    tips: "Mantieni il petto in fuori durante tutto il movimento.",
  },
  {
    id: "tricep-extension",
    name: "Estensione tricipiti",
    equipment: "weights",
    groups: ["arms"],
    goals: ["tonificare", "forza", "parte-superiore"],
    description: "Estensione sopra la testa per i tricipiti.",
    howTo: [
      "Un peso impugnato a due mani, sopra la testa.",
      "Piega i gomiti dietro la nuca abbassando il peso.",
      "Distendi le braccia tornando in alto.",
      "Gomiti fermi, vicini alle orecchie.",
    ],
    tips: "Solo gli avambracci si muovono.",
  },

  // ─────────── ANELLO PILATES ───────────
  {
    id: "ring-chest-press",
    name: "Compressione petto con anello",
    equipment: "ring",
    groups: ["chest", "arms"],
    goals: ["tonificare", "parte-superiore"],
    description: "Compressione dell'anello davanti al petto.",
    howTo: [
      "In piedi o seduto, anello tra le mani all'altezza del petto.",
      "Spingi i palmi l'uno contro l'altro.",
      "Tieni la compressione 2 secondi.",
      "Rilascia controllando.",
    ],
    tips: "Spalle basse, pettorali contratti.",
  },
  {
    id: "ring-inner-thigh",
    name: "Adduttori con anello",
    equipment: "ring",
    groups: ["legs"],
    goals: ["tonificare", "gambe-glutei"],
    description: "Compressione dell'anello tra le ginocchia.",
    howTo: [
      "Disteso o seduto, anello tra le ginocchia.",
      "Stringi le ginocchia comprimendo l'anello.",
      "Tieni 2 secondi e rilascia.",
      "Movimento lento e controllato.",
    ],
    tips: "Concentrati sulla parte interna delle cosce.",
  },
  {
    id: "ring-glute-bridge",
    name: "Ponte glutei con anello",
    equipment: "ring",
    groups: ["glutes", "legs"],
    goals: ["tonificare", "forza", "gambe-glutei"],
    description: "Ponte glutei con compressione laterale dell'anello.",
    howTo: [
      "Disteso, ginocchia piegate, anello tra le ginocchia.",
      "Solleva il bacino in posizione di ponte.",
      "Spingi le ginocchia verso l'esterno contro l'anello.",
      "Scendi controllando senza perdere la pressione.",
    ],
    tips: "Stringi i glutei in cima.",
  },
  {
    id: "ring-overhead-press",
    name: "Compressione sopra la testa",
    equipment: "ring",
    groups: ["shoulders", "core"],
    goals: ["tonificare", "parte-superiore", "addominali"],
    description: "Compressione dell'anello sopra la testa.",
    howTo: [
      "In piedi, anello tra i palmi sopra la testa.",
      "Comprimi l'anello attivando spalle e core.",
      "Mantieni le costole basse.",
      "Tieni 2 secondi e rilascia.",
    ],
    tips: "Niente inarcamento della schiena.",
  },

  // ─────────── KETTLEBELL ───────────
  {
    id: "kb-swing",
    name: "Kettlebell swing",
    equipment: "kettlebell",
    groups: ["fullbody", "glutes", "back"],
    goals: ["dimagrire", "forza", "completo", "gambe-glutei"],
    description: "Slancio esplosivo del kettlebell con i fianchi.",
    howTo: [
      "Piedi più larghi delle spalle, kettlebell tra i piedi.",
      "Hip hinge: spingi i fianchi indietro e afferra il kettlebell.",
      "Spingi i fianchi avanti slanciando il kettlebell fino al petto.",
      "Lascia che il kettlebell ricada tra le gambe e ripeti.",
    ],
    tips: "Forza dai glutei, non dalle braccia. Schiena sempre neutra.",
  },
  {
    id: "goblet-squat",
    name: "Goblet squat",
    equipment: "kettlebell",
    groups: ["legs", "glutes", "core"],
    goals: ["forza", "tonificare", "gambe-glutei", "completo"],
    description: "Squat tenendo il kettlebell al petto.",
    howTo: [
      "Kettlebell al petto, gomiti sotto, due mani sui manici.",
      "Scendi in squat profondo mantenendo il petto in alto.",
      "Gomiti tra le ginocchia in basso.",
      "Risali spingendo dai talloni.",
    ],
    tips: "Aiuta a tenere il busto eretto. Ottimo per migliorare lo squat.",
  },
  {
    id: "kb-deadlift",
    name: "Stacco con kettlebell",
    equipment: "kettlebell",
    groups: ["back", "glutes", "legs"],
    goals: ["forza", "gambe-glutei", "completo"],
    description: "Stacco da terra con kettlebell tra i piedi.",
    howTo: [
      "Piedi larghezza spalle, kettlebell tra i piedi.",
      "Spingi i fianchi indietro, schiena neutra, afferra il kettlebell.",
      "Risali estendendo anche e ginocchia, contraendo i glutei.",
      "Scendi con lo stesso schema, non lasciar cadere.",
    ],
    tips: "Schiena neutra durante tutto il movimento.",
  },
  {
    id: "kb-row",
    name: "Rematore con kettlebell",
    equipment: "kettlebell",
    groups: ["back", "arms"],
    goals: ["forza", "tonificare", "parte-superiore"],
    description: "Rematore con un solo kettlebell.",
    howTo: [
      "Una mano e un ginocchio su una sedia, busto parallelo al pavimento.",
      "Kettlebell nell'altra mano, braccio teso.",
      "Tira il kettlebell verso il fianco stringendo la scapola.",
      "Scendi controllando.",
    ],
    tips: "Gomito vicino al busto, non aprire verso fuori.",
  },

  // ─────────── ELASTICI ───────────
  {
    id: "band-pull-apart",
    name: "Apertura elastico",
    equipment: "bands",
    groups: ["back", "shoulders"],
    goals: ["tonificare", "forza", "parte-superiore"],
    description: "Apertura dell'elastico davanti al petto.",
    howTo: [
      "In piedi, elastico teso tra le mani all'altezza del petto.",
      "Apri le braccia ai lati portando l'elastico al petto.",
      "Stringi le scapole alla fine del movimento.",
      "Torna lentamente.",
    ],
    tips: "Ottimo per la postura e i romboidi.",
  },
  {
    id: "band-squat",
    name: "Squat con elastico",
    equipment: "bands",
    groups: ["legs", "glutes"],
    goals: ["tonificare", "forza", "gambe-glutei"],
    description: "Squat con elastico sotto i piedi e sulle spalle.",
    howTo: [
      "Elastico sotto i piedi, mani che tengono l'altra estremità sulle spalle.",
      "Esegui lo squat scendendo con schiena dritta.",
      "Risali contro la resistenza dell'elastico.",
      "Mantieni la tensione costante.",
    ],
    tips: "La tensione cresce verso l'alto: ottimo per i glutei.",
  },
  {
    id: "band-row",
    name: "Rematore con elastico",
    equipment: "bands",
    groups: ["back", "arms"],
    goals: ["tonificare", "forza", "parte-superiore"],
    description: "Tirata orizzontale con elastico ancorato.",
    howTo: [
      "Elastico ancorato davanti a te all'altezza del petto.",
      "Afferra le estremità, braccia tese.",
      "Tira verso il busto stringendo le scapole.",
      "Torna lentamente.",
    ],
    tips: "Gomiti vicini al corpo, schiena neutra.",
  },
  {
    id: "band-glute-kickback",
    name: "Calcio glutei con elastico",
    equipment: "bands",
    groups: ["glutes"],
    goals: ["tonificare", "gambe-glutei"],
    description: "Estensione dell'anca contro la resistenza dell'elastico.",
    howTo: [
      "In quadrupedia, elastico attorno al piede e alle mani.",
      "Estendi la gamba indietro contro la resistenza.",
      "Stringi forte il gluteo in cima.",
      "Torna senza far calare la tensione.",
    ],
    tips: "Niente inarcamento della schiena, movimento isolato dell'anca.",
  },
  {
    id: "band-lateral-walk",
    name: "Passo laterale con elastico",
    equipment: "bands",
    groups: ["glutes", "legs"],
    goals: ["tonificare", "gambe-glutei"],
    description: "Camminata laterale in mini-squat con elastico alle ginocchia.",
    howTo: [
      "Elastico sopra le ginocchia, piedi larghezza spalle.",
      "Scendi in mini-squat e fai un passo laterale.",
      "Avvicina l'altro piede senza far perdere tensione all'elastico.",
      "Cambia direzione a metà tempo.",
    ],
    tips: "Mantieni la tensione costante: i piedi non si uniscono mai.",
  },
];

interface PickOptions {
  available: Equipment[];
  count: number;
  seed: number;
  goal?: Goal;
  warmup?: boolean;
}

function mulberry32(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function pickExercises(opts: PickOptions): Exercise[] {
  const { available, count, seed, goal, warmup } = opts;

  let pool = EXERCISES.filter((e) => Boolean(e.warmup) === Boolean(warmup));
  pool = pool.filter((e) => available.includes(e.equipment));

  if (goal && !warmup) {
    const matched = pool.filter((e) => e.goals.includes(goal));
    if (matched.length >= Math.max(3, Math.min(count, 5))) {
      pool = matched;
    } else {
      const others = pool.filter((e) => !e.goals.includes(goal));
      pool = [...matched, ...others];
    }
  }

  if (pool.length === 0) return [];

  const rand = mulberry32(seed);
  const shuffled = [...pool]
    .map((ex) => ({ ex, k: rand() }))
    .sort((a, b) => a.k - b.k)
    .map((x) => x.ex);

  // Try to balance primary muscle groups: avoid two consecutive same primary group
  const result: Exercise[] = [];
  const remaining = [...shuffled];
  while (result.length < count && remaining.length > 0) {
    const lastGroup = result[result.length - 1]?.groups[0];
    const idx = remaining.findIndex((e) => e.groups[0] !== lastGroup);
    const pickIdx = idx >= 0 ? idx : 0;
    result.push(remaining.splice(pickIdx, 1)[0]);
  }

  while (result.length < count && shuffled.length > 0) {
    result.push(shuffled[result.length % shuffled.length]);
  }

  return result.slice(0, count);
}
