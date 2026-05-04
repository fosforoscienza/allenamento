import * as React from "react";

interface Props {
  id: string;
  className?: string;
}

const STROKE = "#7dd3fc"; // sky-300
const ACCENT = "#fbbf24"; // amber-400
const SKIN = "#fde68a"; // amber-200
const FLOOR_COLOR = "#1e293b"; // slate-800
const HINT = "#a78bfa"; // violet-400

const baseProps = {
  viewBox: "0 0 200 200",
  fill: "none",
  stroke: STROKE,
  strokeWidth: 4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const Floor = () => (
  <line x1="10" y1="180" x2="190" y2="180" stroke={FLOOR_COLOR} strokeWidth="2" />
);

const Arrow = ({ d }: { d: string }) => (
  <path
    d={d}
    stroke={HINT}
    strokeWidth="3"
    fill="none"
    strokeDasharray="5 4"
    markerEnd="url(#arrowhead)"
  />
);

function Figure({ id }: { id: string }) {
  switch (id) {
    // ───── WARM-UP ─────
    case "wu-march":
      return (
        <>
          <Floor />
          <circle cx="100" cy="40" r="13" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="53" x2="100" y2="115" />
          <line x1="100" y1="68" x2="80" y2="40" />
          <line x1="100" y1="68" x2="120" y2="95" />
          <line x1="100" y1="115" x2="75" y2="100" />
          <line x1="75" y1="100" x2="65" y2="120" />
          <line x1="100" y1="115" x2="125" y2="155" />
          <line x1="125" y1="155" x2="125" y2="170" />
          <Arrow d="M65 100 Q70 70 75 100" />
        </>
      );
    case "wu-arm-circles":
      return (
        <>
          <Floor />
          <circle cx="100" cy="50" r="13" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="63" x2="100" y2="125" />
          <line x1="100" y1="75" x2="55" y2="75" />
          <line x1="100" y1="75" x2="145" y2="75" />
          <Arrow d="M50 80 Q40 60 60 50" />
          <Arrow d="M150 70 Q160 90 140 100" />
          <line x1="100" y1="125" x2="80" y2="170" />
          <line x1="100" y1="125" x2="120" y2="170" />
        </>
      );
    case "wu-hip-circles":
      return (
        <>
          <Floor />
          <circle cx="100" cy="45" r="13" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="58" x2="100" y2="120" />
          <line x1="100" y1="70" x2="80" y2="100" />
          <line x1="100" y1="70" x2="120" y2="100" />
          <ellipse cx="100" cy="115" rx="18" ry="6" stroke={HINT} strokeDasharray="4 3" strokeWidth="3" fill="none" />
          <line x1="100" y1="120" x2="80" y2="170" />
          <line x1="100" y1="120" x2="120" y2="170" />
        </>
      );
    case "wu-torso-twist":
      return (
        <>
          <Floor />
          <circle cx="100" cy="45" r="13" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="58" x2="100" y2="120" />
          <line x1="100" y1="70" x2="55" y2="80" />
          <line x1="100" y1="70" x2="145" y2="60" />
          <Arrow d="M60 80 Q100 100 145 60" />
          <line x1="100" y1="120" x2="80" y2="170" />
          <line x1="100" y1="120" x2="120" y2="170" />
        </>
      );
    case "wu-leg-swings":
      return (
        <>
          <Floor />
          <circle cx="100" cy="45" r="13" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="58" x2="100" y2="120" />
          <line x1="100" y1="70" x2="80" y2="100" />
          <line x1="100" y1="70" x2="60" y2="60" />
          <line x1="100" y1="120" x2="100" y2="170" />
          <line x1="100" y1="120" x2="150" y2="100" />
          <Arrow d="M150 100 Q145 130 140 160" />
        </>
      );
    case "wu-knee-hugs":
      return (
        <>
          <Floor />
          <circle cx="100" cy="40" r="13" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="53" x2="100" y2="115" />
          <line x1="100" y1="65" x2="85" y2="95" />
          <line x1="100" y1="65" x2="115" y2="95" />
          <circle cx="100" cy="100" r="14" fill="none" stroke={HINT} strokeWidth="3" strokeDasharray="4 3" />
          <line x1="100" y1="115" x2="100" y2="170" />
          <line x1="100" y1="115" x2="125" y2="155" />
          <line x1="125" y1="155" x2="125" y2="170" />
        </>
      );
    case "wu-mobility-squat":
      return (
        <>
          <Floor />
          <circle cx="100" cy="55" r="13" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="68" x2="100" y2="115" />
          <line x1="100" y1="80" x2="60" y2="65" />
          <line x1="100" y1="80" x2="140" y2="65" />
          <line x1="100" y1="115" x2="75" y2="140" />
          <line x1="100" y1="115" x2="125" y2="140" />
          <line x1="75" y1="140" x2="75" y2="170" />
          <line x1="125" y1="140" x2="125" y2="170" />
          <Arrow d="M150 100 Q150 130 150 165" />
        </>
      );
    case "wu-shoulder-rolls":
      return (
        <>
          <Floor />
          <circle cx="100" cy="50" r="13" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="63" x2="100" y2="125" />
          <line x1="100" y1="75" x2="80" y2="120" />
          <line x1="100" y1="75" x2="120" y2="120" />
          <ellipse cx="80" cy="75" rx="10" ry="6" stroke={HINT} strokeWidth="3" fill="none" strokeDasharray="3 3" />
          <ellipse cx="120" cy="75" rx="10" ry="6" stroke={HINT} strokeWidth="3" fill="none" strokeDasharray="3 3" />
          <line x1="100" y1="125" x2="80" y2="170" />
          <line x1="100" y1="125" x2="120" y2="170" />
        </>
      );
    case "wu-cat-cow":
      return (
        <>
          <Floor />
          <circle cx="50" cy="120" r="12" fill={SKIN} stroke={STROKE} />
          <path d="M62 122 Q100 105 140 125" />
          <line x1="62" y1="125" x2="55" y2="170" />
          <line x1="55" y1="170" x2="68" y2="170" strokeWidth="6" />
          <line x1="140" y1="125" x2="160" y2="170" />
          <line x1="160" y1="170" x2="172" y2="170" strokeWidth="6" />
          <Arrow d="M100 95 Q105 110 100 130" />
        </>
      );
    case "wu-jumping-jacks":
      return (
        <>
          <Floor />
          <circle cx="100" cy="40" r="13" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="53" x2="100" y2="115" />
          <line x1="100" y1="65" x2="60" y2="40" />
          <line x1="100" y1="65" x2="140" y2="40" />
          <line x1="100" y1="115" x2="70" y2="170" />
          <line x1="100" y1="115" x2="130" y2="170" />
        </>
      );

    // ───── BODYWEIGHT ─────
    case "squat":
    case "wu-mobility-squat-alt":
      return (
        <>
          <Floor />
          <circle cx="100" cy="50" r="14" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="64" x2="100" y2="110" />
          <line x1="100" y1="75" x2="75" y2="95" />
          <line x1="100" y1="75" x2="125" y2="95" />
          <line x1="75" y1="95" x2="65" y2="115" />
          <line x1="125" y1="95" x2="135" y2="115" />
          <line x1="100" y1="110" x2="75" y2="135" />
          <line x1="100" y1="110" x2="125" y2="135" />
          <line x1="75" y1="135" x2="75" y2="170" />
          <line x1="125" y1="135" x2="125" y2="170" />
          <line x1="65" y1="170" x2="85" y2="170" strokeWidth="6" />
          <line x1="115" y1="170" x2="135" y2="170" strokeWidth="6" />
        </>
      );
    case "jump-squat":
      return (
        <>
          <Floor />
          <circle cx="100" cy="35" r="14" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="49" x2="100" y2="105" />
          <line x1="100" y1="60" x2="65" y2="30" />
          <line x1="100" y1="60" x2="135" y2="30" />
          <line x1="100" y1="105" x2="80" y2="140" />
          <line x1="100" y1="105" x2="120" y2="140" />
          <line x1="80" y1="140" x2="85" y2="155" />
          <line x1="120" y1="140" x2="115" y2="155" />
          <Arrow d="M100 165 L100 130" />
        </>
      );
    case "lunge":
    case "reverse-lunge":
      return (
        <>
          <Floor />
          <circle cx="100" cy="40" r="13" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="53" x2="100" y2="100" />
          <line x1="100" y1="65" x2="80" y2="95" />
          <line x1="100" y1="65" x2="120" y2="95" />
          <line x1="100" y1="100" x2="60" y2="140" />
          <line x1="60" y1="140" x2="55" y2="170" />
          <line x1="100" y1="100" x2="140" y2="140" />
          <line x1="140" y1="140" x2="140" y2="170" />
        </>
      );
    case "wall-sit":
      return (
        <>
          <Floor />
          <line x1="40" y1="20" x2="40" y2="180" stroke={FLOOR_COLOR} strokeWidth="3" />
          <circle cx="60" cy="80" r="13" fill={SKIN} stroke={STROKE} />
          <line x1="60" y1="93" x2="60" y2="125" />
          <line x1="60" y1="100" x2="100" y2="100" />
          <line x1="60" y1="100" x2="80" y2="115" />
          <line x1="60" y1="125" x2="125" y2="125" />
          <line x1="125" y1="125" x2="125" y2="170" />
          <line x1="115" y1="170" x2="135" y2="170" strokeWidth="6" />
        </>
      );
    case "glute-bridge":
    case "ring-glute-bridge":
    case "single-leg-glute-bridge":
      return (
        <>
          <Floor />
          <circle cx="40" cy="155" r="12" fill={SKIN} stroke={STROKE} />
          <line x1="50" y1="155" x2="120" y2="120" />
          <line x1="120" y1="120" x2="160" y2="170" />
          <line x1="50" y1="160" x2="50" y2="170" />
          {id === "ring-glute-bridge" && (
            <ellipse
              cx="135"
              cy="140"
              rx="10"
              ry="14"
              stroke={ACCENT}
              strokeWidth="3"
            />
          )}
          {id === "single-leg-glute-bridge" && (
            <line x1="120" y1="120" x2="190" y2="80" />
          )}
        </>
      );
    case "pushup":
      return (
        <>
          <Floor />
          <circle cx="50" cy="110" r="12" fill={SKIN} stroke={STROKE} />
          <line x1="62" y1="112" x2="160" y2="130" />
          <line x1="62" y1="112" x2="55" y2="155" />
          <line x1="55" y1="155" x2="65" y2="170" />
          <line x1="100" y1="120" x2="100" y2="155" />
          <line x1="100" y1="155" x2="115" y2="170" />
          <line x1="160" y1="130" x2="180" y2="155" />
          <line x1="180" y1="155" x2="180" y2="170" />
        </>
      );
    case "incline-pushup":
      return (
        <>
          <Floor />
          <rect x="120" y="100" width="60" height="50" stroke={FLOOR_COLOR} strokeWidth="2" fill="none" />
          <circle cx="55" cy="160" r="12" fill={SKIN} stroke={STROKE} />
          <line x1="65" y1="155" x2="135" y2="115" />
          <line x1="65" y1="160" x2="55" y2="180" />
        </>
      );
    case "pike-pushup":
      return (
        <>
          <Floor />
          <circle cx="100" cy="50" r="13" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="63" x2="50" y2="170" />
          <line x1="100" y1="63" x2="150" y2="170" />
          <line x1="50" y1="170" x2="60" y2="170" strokeWidth="6" />
          <line x1="140" y1="170" x2="160" y2="170" strokeWidth="6" />
        </>
      );
    case "tricep-dip":
      return (
        <>
          <Floor />
          <rect x="60" y="100" width="40" height="60" stroke={FLOOR_COLOR} strokeWidth="2" fill="none" />
          <circle cx="100" cy="65" r="13" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="78" x2="100" y2="120" />
          <line x1="100" y1="85" x2="75" y2="105" />
          <line x1="75" y1="105" x2="85" y2="125" />
          <line x1="100" y1="120" x2="155" y2="160" />
          <line x1="155" y1="160" x2="170" y2="160" strokeWidth="6" />
        </>
      );
    case "plank":
      return (
        <>
          <Floor />
          <circle cx="55" cy="115" r="12" fill={SKIN} stroke={STROKE} />
          <line x1="67" y1="117" x2="170" y2="125" />
          <line x1="67" y1="117" x2="55" y2="155" />
          <line x1="55" y1="155" x2="75" y2="155" />
          <line x1="170" y1="125" x2="180" y2="170" />
          <line x1="170" y1="170" x2="190" y2="170" strokeWidth="6" />
        </>
      );
    case "side-plank":
      return (
        <>
          <Floor />
          <circle cx="50" cy="100" r="12" fill={SKIN} stroke={STROKE} />
          <line x1="60" y1="108" x2="170" y2="150" />
          <line x1="60" y1="110" x2="55" y2="150" />
          <line x1="55" y1="150" x2="80" y2="150" />
          <line x1="100" y1="115" x2="100" y2="80" />
          <line x1="170" y1="150" x2="180" y2="170" />
        </>
      );
    case "plank-shoulder-taps":
      return (
        <>
          <Floor />
          <circle cx="55" cy="105" r="12" fill={SKIN} stroke={STROKE} />
          <line x1="67" y1="110" x2="170" y2="125" />
          <line x1="67" y1="115" x2="55" y2="155" />
          <line x1="55" y1="155" x2="70" y2="170" />
          <line x1="170" y1="125" x2="180" y2="170" />
          <Arrow d="M90 130 Q70 140 60 110" />
        </>
      );
    case "mountain-climber":
      return (
        <>
          <Floor />
          <circle cx="55" cy="110" r="12" fill={SKIN} stroke={STROKE} />
          <line x1="67" y1="112" x2="160" y2="135" />
          <line x1="67" y1="115" x2="55" y2="155" />
          <line x1="55" y1="155" x2="70" y2="170" />
          <line x1="160" y1="135" x2="120" y2="120" />
          <line x1="120" y1="120" x2="130" y2="100" />
          <line x1="160" y1="135" x2="180" y2="160" />
          <line x1="180" y1="160" x2="180" y2="170" />
        </>
      );
    case "burpee":
      return (
        <>
          <Floor />
          <circle cx="60" cy="120" r="12" fill={SKIN} stroke={STROKE} />
          <line x1="72" y1="122" x2="160" y2="140" />
          <line x1="72" y1="125" x2="55" y2="160" />
          <line x1="55" y1="160" x2="75" y2="170" />
          <line x1="160" y1="140" x2="180" y2="170" />
          <Arrow d="M100 50 L100 100" />
          <path d="M85 60 L100 45 L115 60" stroke={HINT} strokeWidth="3" fill="none" />
        </>
      );
    case "high-knees":
      return (
        <>
          <Floor />
          <circle cx="100" cy="40" r="13" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="53" x2="100" y2="115" />
          <line x1="100" y1="68" x2="75" y2="85" />
          <line x1="100" y1="68" x2="125" y2="50" />
          <line x1="100" y1="115" x2="80" y2="100" />
          <line x1="80" y1="100" x2="65" y2="115" />
          <line x1="100" y1="115" x2="120" y2="155" />
          <line x1="120" y1="155" x2="120" y2="170" />
        </>
      );
    case "jumping-jacks":
      return (
        <>
          <Floor />
          <circle cx="100" cy="40" r="13" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="53" x2="100" y2="115" />
          <line x1="100" y1="65" x2="60" y2="35" />
          <line x1="100" y1="65" x2="140" y2="35" />
          <line x1="100" y1="115" x2="70" y2="170" />
          <line x1="100" y1="115" x2="130" y2="170" />
        </>
      );
    case "crunch":
      return (
        <>
          <Floor />
          <circle cx="60" cy="110" r="12" fill={SKIN} stroke={STROKE} />
          <line x1="70" y1="118" x2="120" y2="150" />
          <line x1="120" y1="150" x2="170" y2="120" />
          <line x1="170" y1="120" x2="170" y2="170" />
          <line x1="60" y1="118" x2="50" y2="135" />
          <line x1="50" y1="135" x2="80" y2="140" />
        </>
      );
    case "reverse-crunch":
      return (
        <>
          <Floor />
          <circle cx="40" cy="160" r="12" fill={SKIN} stroke={STROKE} />
          <line x1="50" y1="158" x2="130" y2="155" />
          <line x1="130" y1="155" x2="120" y2="100" />
          <line x1="120" y1="100" x2="160" y2="90" />
          <Arrow d="M165 95 Q170 70 145 60" />
        </>
      );
    case "bicycle-crunch":
      return (
        <>
          <Floor />
          <circle cx="60" cy="120" r="12" fill={SKIN} stroke={STROKE} />
          <line x1="68" y1="128" x2="100" y2="150" />
          <line x1="100" y1="150" x2="80" y2="100" />
          <line x1="100" y1="150" x2="160" y2="120" />
          <Arrow d="M150 110 Q120 105 90 110" />
        </>
      );
    case "russian-twist":
      return (
        <>
          <Floor />
          <circle cx="80" cy="90" r="13" fill={SKIN} stroke={STROKE} />
          <line x1="80" y1="103" x2="120" y2="160" />
          <line x1="120" y1="160" x2="160" y2="140" />
          <line x1="120" y1="160" x2="160" y2="170" />
          <line x1="85" y1="105" x2="115" y2="100" />
          <Arrow d="M55 90 Q80 70 110 95" />
        </>
      );
    case "v-up":
      return (
        <>
          <Floor />
          <circle cx="100" cy="100" r="12" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="112" x2="60" y2="160" />
          <line x1="100" y1="112" x2="140" y2="160" />
          <line x1="60" y1="160" x2="50" y2="100" />
          <line x1="140" y1="160" x2="150" y2="100" />
        </>
      );
    case "flutter-kicks":
      return (
        <>
          <Floor />
          <circle cx="40" cy="155" r="12" fill={SKIN} stroke={STROKE} />
          <line x1="50" y1="155" x2="120" y2="155" />
          <line x1="120" y1="155" x2="170" y2="135" />
          <line x1="120" y1="155" x2="170" y2="165" />
          <Arrow d="M170 135 Q175 125 175 145" />
        </>
      );
    case "dead-bug":
      return (
        <>
          <Floor />
          <circle cx="60" cy="155" r="12" fill={SKIN} stroke={STROKE} />
          <line x1="70" y1="157" x2="140" y2="155" />
          <line x1="80" y1="157" x2="50" y2="120" />
          <line x1="100" y1="155" x2="125" y2="115" />
          <line x1="125" y1="115" x2="135" y2="120" />
          <line x1="140" y1="155" x2="180" y2="155" />
        </>
      );
    case "bird-dog":
      return (
        <>
          <Floor />
          <circle cx="60" cy="120" r="12" fill={SKIN} stroke={STROKE} />
          <line x1="72" y1="122" x2="140" y2="125" />
          <line x1="72" y1="125" x2="60" y2="170" />
          <line x1="60" y1="170" x2="75" y2="170" strokeWidth="6" />
          <line x1="140" y1="125" x2="155" y2="170" />
          <line x1="50" y1="115" x2="20" y2="80" />
          <line x1="155" y1="135" x2="195" y2="100" />
        </>
      );
    case "superman":
      return (
        <>
          <Floor />
          <circle cx="55" cy="110" r="12" fill={SKIN} stroke={STROKE} />
          <line x1="67" y1="115" x2="160" y2="115" />
          <line x1="67" y1="115" x2="40" y2="90" />
          <line x1="40" y1="90" x2="20" y2="100" />
          <line x1="160" y1="115" x2="190" y2="95" />
          <line x1="190" y1="95" x2="195" y2="105" />
        </>
      );

    // ───── PESI / MANUBRI ─────
    case "bicep-curl":
      return (
        <>
          <Floor />
          <circle cx="100" cy="40" r="13" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="53" x2="100" y2="115" />
          <line x1="100" y1="65" x2="70" y2="85" />
          <line x1="70" y1="85" x2="80" y2="55" />
          <line x1="100" y1="65" x2="130" y2="85" />
          <line x1="130" y1="85" x2="120" y2="55" />
          <rect x="70" y="46" width="20" height="12" rx="3" fill={ACCENT} stroke={STROKE} />
          <rect x="110" y="46" width="20" height="12" rx="3" fill={ACCENT} stroke={STROKE} />
          <line x1="100" y1="115" x2="80" y2="170" />
          <line x1="100" y1="115" x2="120" y2="170" />
        </>
      );
    case "shoulder-press":
      return (
        <>
          <Floor />
          <circle cx="100" cy="55" r="13" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="68" x2="100" y2="125" />
          <line x1="100" y1="80" x2="70" y2="40" />
          <line x1="100" y1="80" x2="130" y2="40" />
          <rect x="55" y="25" width="22" height="14" rx="3" fill={ACCENT} stroke={STROKE} />
          <rect x="123" y="25" width="22" height="14" rx="3" fill={ACCENT} stroke={STROKE} />
          <line x1="100" y1="125" x2="80" y2="170" />
          <line x1="100" y1="125" x2="120" y2="170" />
        </>
      );
    case "lateral-raise":
      return (
        <>
          <Floor />
          <circle cx="100" cy="50" r="13" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="63" x2="100" y2="125" />
          <line x1="100" y1="75" x2="50" y2="75" />
          <line x1="100" y1="75" x2="150" y2="75" />
          <rect x="35" y="68" width="20" height="14" rx="3" fill={ACCENT} stroke={STROKE} />
          <rect x="145" y="68" width="20" height="14" rx="3" fill={ACCENT} stroke={STROKE} />
          <line x1="100" y1="125" x2="80" y2="170" />
          <line x1="100" y1="125" x2="120" y2="170" />
        </>
      );
    case "weighted-row":
    case "kb-row":
    case "band-row":
      return (
        <>
          <Floor />
          <circle cx="55" cy="80" r="13" fill={SKIN} stroke={STROKE} />
          <line x1="68" y1="85" x2="160" y2="100" />
          <line x1="100" y1="92" x2="105" y2="130" />
          <line x1="105" y1="130" x2="105" y2="170" />
          <line x1="160" y1="100" x2="170" y2="130" />
          <line x1="170" y1="130" x2="170" y2="170" />
          <line x1="100" y1="95" x2="110" y2="130" />
          {id === "weighted-row" && (
            <rect x="100" y="125" width="20" height="14" fill={ACCENT} stroke={STROKE} />
          )}
          {id === "kb-row" && (
            <>
              <circle cx="110" cy="135" r="10" fill={ACCENT} stroke={STROKE} />
              <path d="M104 125 L116 125" stroke={STROKE} strokeWidth="3" />
            </>
          )}
          {id === "band-row" && (
            <path
              d="M110 130 Q140 130 170 90"
              stroke={HINT}
              strokeDasharray="4 3"
              strokeWidth="3"
              fill="none"
            />
          )}
        </>
      );
    case "weighted-squat":
      return (
        <>
          <Floor />
          <circle cx="100" cy="50" r="14" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="64" x2="100" y2="110" />
          <line x1="100" y1="78" x2="60" y2="78" />
          <line x1="100" y1="78" x2="140" y2="78" />
          <rect x="48" y="68" width="14" height="20" fill={ACCENT} stroke={STROKE} />
          <rect x="138" y="68" width="14" height="20" fill={ACCENT} stroke={STROKE} />
          <line x1="100" y1="110" x2="75" y2="135" />
          <line x1="100" y1="110" x2="125" y2="135" />
          <line x1="75" y1="135" x2="75" y2="170" />
          <line x1="125" y1="135" x2="125" y2="170" />
        </>
      );
    case "tricep-extension":
      return (
        <>
          <Floor />
          <circle cx="100" cy="55" r="13" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="68" x2="100" y2="125" />
          <line x1="100" y1="80" x2="80" y2="50" />
          <line x1="100" y1="80" x2="120" y2="50" />
          <line x1="80" y1="50" x2="95" y2="30" />
          <line x1="120" y1="50" x2="105" y2="30" />
          <rect x="90" y="18" width="20" height="14" rx="3" fill={ACCENT} stroke={STROKE} />
          <line x1="100" y1="125" x2="80" y2="170" />
          <line x1="100" y1="125" x2="120" y2="170" />
        </>
      );

    // ───── ANELLO PILATES ─────
    case "ring-chest-press":
      return (
        <>
          <Floor />
          <circle cx="100" cy="50" r="13" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="63" x2="100" y2="125" />
          <line x1="100" y1="75" x2="80" y2="100" />
          <line x1="100" y1="75" x2="120" y2="100" />
          <ellipse cx="100" cy="105" rx="20" ry="10" stroke={ACCENT} strokeWidth="3" />
          <line x1="100" y1="125" x2="80" y2="170" />
          <line x1="100" y1="125" x2="120" y2="170" />
        </>
      );
    case "ring-inner-thigh":
      return (
        <>
          <Floor />
          <circle cx="100" cy="60" r="13" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="73" x2="100" y2="120" />
          <line x1="100" y1="120" x2="80" y2="170" />
          <line x1="100" y1="120" x2="120" y2="170" />
          <ellipse cx="100" cy="155" rx="14" ry="20" stroke={ACCENT} strokeWidth="3" />
        </>
      );
    case "ring-overhead-press":
      return (
        <>
          <Floor />
          <circle cx="100" cy="65" r="13" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="78" x2="100" y2="135" />
          <line x1="100" y1="88" x2="85" y2="40" />
          <line x1="100" y1="88" x2="115" y2="40" />
          <ellipse cx="100" cy="35" rx="22" ry="10" stroke={ACCENT} strokeWidth="3" />
          <line x1="100" y1="135" x2="80" y2="170" />
          <line x1="100" y1="135" x2="120" y2="170" />
        </>
      );

    // ───── KETTLEBELL ─────
    case "kb-swing":
      return (
        <>
          <Floor />
          <circle cx="80" cy="55" r="13" fill={SKIN} stroke={STROKE} />
          <line x1="92" y1="62" x2="130" y2="100" />
          <line x1="92" y1="62" x2="100" y2="100" />
          <line x1="100" y1="100" x2="80" y2="155" />
          <line x1="80" y1="155" x2="80" y2="170" />
          <line x1="100" y1="100" x2="120" y2="155" />
          <line x1="120" y1="155" x2="120" y2="170" />
          <line x1="100" y1="80" x2="155" y2="60" />
          <circle cx="160" cy="55" r="14" fill={ACCENT} stroke={STROKE} />
          <path d="M154 45 L166 45" stroke={STROKE} strokeWidth="3" />
        </>
      );
    case "goblet-squat":
      return (
        <>
          <Floor />
          <circle cx="100" cy="50" r="14" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="64" x2="100" y2="115" />
          <line x1="100" y1="80" x2="80" y2="100" />
          <line x1="100" y1="80" x2="120" y2="100" />
          <circle cx="100" cy="100" r="14" fill={ACCENT} stroke={STROKE} />
          <path d="M93 88 L107 88" stroke={STROKE} strokeWidth="3" />
          <line x1="100" y1="115" x2="75" y2="140" />
          <line x1="100" y1="115" x2="125" y2="140" />
          <line x1="75" y1="140" x2="75" y2="170" />
          <line x1="125" y1="140" x2="125" y2="170" />
        </>
      );
    case "kb-deadlift":
      return (
        <>
          <Floor />
          <circle cx="80" cy="60" r="13" fill={SKIN} stroke={STROKE} />
          <line x1="92" y1="68" x2="140" y2="105" />
          <line x1="92" y1="68" x2="115" y2="120" />
          <line x1="115" y1="120" x2="130" y2="160" />
          <line x1="130" y1="160" x2="135" y2="170" />
          <line x1="140" y1="105" x2="155" y2="160" />
          <line x1="155" y1="160" x2="155" y2="170" />
          <circle cx="125" cy="155" r="13" fill={ACCENT} stroke={STROKE} />
          <path d="M119 145 L131 145" stroke={STROKE} strokeWidth="3" />
        </>
      );

    // ───── ELASTICI ─────
    case "band-pull-apart":
      return (
        <>
          <Floor />
          <circle cx="100" cy="50" r="13" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="63" x2="100" y2="125" />
          <line x1="100" y1="75" x2="50" y2="75" />
          <line x1="100" y1="75" x2="150" y2="75" />
          <path
            d="M50 75 Q100 90 150 75"
            stroke={ACCENT}
            strokeDasharray="5 4"
            strokeWidth="3"
            fill="none"
          />
          <line x1="100" y1="125" x2="80" y2="170" />
          <line x1="100" y1="125" x2="120" y2="170" />
        </>
      );
    case "band-squat":
      return (
        <>
          <Floor />
          <circle cx="100" cy="50" r="14" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="64" x2="100" y2="110" />
          <line x1="100" y1="80" x2="80" y2="80" />
          <line x1="100" y1="80" x2="120" y2="80" />
          <line x1="100" y1="110" x2="75" y2="135" />
          <line x1="100" y1="110" x2="125" y2="135" />
          <line x1="75" y1="135" x2="75" y2="170" />
          <line x1="125" y1="135" x2="125" y2="170" />
          <path
            d="M85 80 Q70 130 75 170"
            stroke={ACCENT}
            strokeDasharray="5 4"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M115 80 Q130 130 125 170"
            stroke={ACCENT}
            strokeDasharray="5 4"
            strokeWidth="3"
            fill="none"
          />
        </>
      );
    case "band-glute-kickback":
      return (
        <>
          <Floor />
          <circle cx="55" cy="100" r="12" fill={SKIN} stroke={STROKE} />
          <line x1="67" y1="105" x2="130" y2="115" />
          <line x1="67" y1="108" x2="60" y2="150" />
          <line x1="60" y1="150" x2="80" y2="150" />
          <line x1="100" y1="115" x2="105" y2="150" />
          <line x1="105" y1="150" x2="125" y2="150" />
          <line x1="130" y1="115" x2="180" y2="80" />
          <path
            d="M105 150 Q150 130 180 80"
            stroke={ACCENT}
            strokeDasharray="5 4"
            strokeWidth="3"
            fill="none"
          />
        </>
      );
    case "band-lateral-walk":
      return (
        <>
          <Floor />
          <circle cx="100" cy="50" r="14" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="64" x2="100" y2="115" />
          <line x1="100" y1="115" x2="65" y2="170" />
          <line x1="100" y1="115" x2="135" y2="170" />
          <path
            d="M75 145 Q100 138 125 145"
            stroke={ACCENT}
            strokeDasharray="5 4"
            strokeWidth="3"
            fill="none"
          />
        </>
      );
    default:
      return (
        <>
          <Floor />
          <circle cx="100" cy="60" r="14" fill={SKIN} stroke={STROKE} />
          <line x1="100" y1="74" x2="100" y2="130" />
          <line x1="100" y1="90" x2="70" y2="115" />
          <line x1="100" y1="90" x2="130" y2="115" />
          <line x1="100" y1="130" x2="80" y2="170" />
          <line x1="100" y1="130" x2="120" y2="170" />
        </>
      );
  }
}

export default function ExerciseSvg({ id, className }: Props) {
  return (
    <svg {...baseProps} className={className} role="img" aria-label={id}>
      <defs>
        <marker
          id="arrowhead"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" fill={HINT} />
        </marker>
      </defs>
      <Figure id={id} />
    </svg>
  );
}
