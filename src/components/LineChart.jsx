import { MONTHS } from "../data";

export default function LineChart({ data, h = 190 }) {
  const W = 560;
  const mn = Math.min(...data);
  const mx = Math.max(...data);

  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * (W - 40) + 20;
    const y = h - 26 - ((v - mn) / (mx - mn || 1)) * (h - 46);
    return `${x},${y}`;
  });

  const lineD = "M" + pts.join(" L");
  const areaD = `M20,${h - 26} L` + pts.join(" L") + ` L${W - 20},${h - 26} Z`;

  return (
    <svg viewBox={`0 0 ${W} ${h}`} style={{ width: "100%", height: h }} preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6c63ff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#6c63ff" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {/* Grid lines */}
      {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
        <line key={i}
          x1="20" y1={h - 26 - (t * (h - 46))}
          x2={W - 20} y2={h - 26 - (t * (h - 46))}
          stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4,4"
        />
      ))}

      {/* Area fill */}
      <path d={areaD} fill="url(#chartGrad)" />

      {/* Line */}
      <path d={lineD} fill="none" stroke="#6c63ff" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />

      {/* X-axis labels */}
      {MONTHS.map((m, i) => (
        <text key={m}
          x={(i / 11) * (W - 40) + 20} y={h - 6}
          textAnchor="middle" fontSize="10" fill="#9ca3af"
        >{m}</text>
      ))}
    </svg>
  );
}