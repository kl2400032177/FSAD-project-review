import { useState } from "react";
import { ChevLI, ChevRI } from "../icons";
import { MONTHS } from "../data";

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export default function SIPCalendar({ selected, onSelect }) {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear]   = useState(today.getFullYear());

  const firstDay    = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  function prevMonth() {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
  }
  function nextMonth() {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
  }

  return (
    <div style={{ background:"#fff",border:"1.5px solid #e5e7eb",borderRadius:12,padding:"13px 15px",userSelect:"none" }}>
      {/* Header */}
      <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:9 }}>
        <button onClick={prevMonth} style={{ background:"none",border:"none",cursor:"pointer",color:"#6b7280",display:"flex" }}>
          <ChevLI />
        </button>
        <span style={{ fontWeight:700,fontSize:12,color:"#1a1a2e" }}>{MONTHS[month]} {year}</span>
        <button onClick={nextMonth} style={{ background:"none",border:"none",cursor:"pointer",color:"#6b7280",display:"flex" }}>
          <ChevRI />
        </button>
      </div>

      {/* Day headers */}
      <div style={{ display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:2,marginBottom:4 }}>
        {DAYS.map(d => (
          <div key={d} style={{ textAlign:"center",fontSize:9,color:"#9ca3af",fontWeight:600 }}>{d}</div>
        ))}
      </div>

      {/* Date cells */}
      <div style={{ display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:2 }}>
        {cells.map((d, i) => {
          if (!d) return <div key={i} />;
          const isPast = new Date(year, month, d) < new Date(today.getFullYear(), today.getMonth(), today.getDate());
          const isSel  = selected === d;
          return (
            <button key={i} disabled={isPast} onClick={() => onSelect(d)}
              style={{
                width:"100%", aspectRatio:"1", borderRadius:5, border:"none",
                cursor: isPast ? "not-allowed" : "pointer",
                background: isSel ? "#6c63ff" : "transparent",
                color: isSel ? "#fff" : isPast ? "#d1d5db" : "#1a1a2e",
                fontWeight: isSel ? 700 : 400, fontSize: 11,
              }}>
              {d}
            </button>
          );
        })}
      </div>
    </div>
  );
}