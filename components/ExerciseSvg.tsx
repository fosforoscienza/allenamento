import * as React from "react";

interface Props {
  id: string;
  className?: string;
}

const STROKE = "#1d83f5";
const ACCENT = "#f97316";
const SKIN = "#fed7aa";

const baseProps = {
  viewBox: "0 0 200 200",
  fill: "none",
  stroke: STROKE,
  strokeWidth: 4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const Floor = () => (
  <line x1="10" y1="180" x2="190" y2="180" stroke="#cbd5e1" strokeWidth="2" />
);

function Figure({ id }: { id: string }) {
  switch (id) {
    case "squat":
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
          <path d="M55 25 L65 35 M65 25 L55 35" stroke={ACCENT} strokeWidth="3" />
          <path d="M135 25 L145 35 M145 25 L135 35" stroke={ACCENT} strokeWidth="3" />
        </>
      );
    case "lunge":
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
    case "glute-bridge":
    case "ring-glute-bridge":
      return (
        <>
          <Floor />
          <circle cx="40" cy="155" r="12" fill={SKIN} stroke={STROKE} />
          <line x1="50" y1="155" x2="120" y2="120" />
          <line x1="120" y1="120" x2="160" y2="170" />
          <line x1="50" y1="160" x2="50" y2="170" />
          {id === "ring-glute-bridge" && (
            <ellipse cx="135" cy="140" rx="10" ry="14" stroke={ACCENT} strokeWidth="3" />
          )}
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
          <path d="M100 50 L110 65 L120 50" stroke={ACCENT} strokeWidth="3" />
          <path d="M105 30 L115 30 M110 25 L110 70" stroke={ACCENT} strokeWidth="3" />
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
              stroke={ACCENT}
              strokeDasharray="4 3"
              strokeWidth="3"
              fill="none"
            />
          )}
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
      <Figure id={id} />
    </svg>
  );
}
