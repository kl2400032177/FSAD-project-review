import { ALLOC_COLORS } from "../data";

export default function DonutChart({ data }) {
  let angle = -90;
  const r = 55, cx = 75, cy = 75;

  const slices = data.map((d, i) => {
    const pct = d.v / 100;
    const a1 = angle;
    const a2 = angle + 360 * pct;
    angle = a2;
    const r1 = (a1 * Math.PI) / 180;
    const r2 = (a2 * Math.PI) / 180;
    const large = pct > 0.5 ? 1 : 0;
    return {
      d: `M${cx},${cy} L${cx + r * Math.cos(r1)},${cy + r * Math.sin(r1)} A${r},${r} 0 ${large},1 ${cx + r * Math.cos(r2)},${cy + r * Math.sin(r2)} Z`,
      c: ALLOC_COLORS[i],
    };
  });

  return (
    <svg viewBox="0 0 150 150" style={{ width: 150, height: 150 }}>
      {slices.map((s, i) => <path key={i} d={s.d} fill={s.c} />)}
      <circle cx={cx} cy={cy} r={r * 0.52} fill="white" />
    </svg>
  );
}