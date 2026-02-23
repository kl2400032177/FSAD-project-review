import { useState } from "react";
import { StarI, UpArrow } from "../icons";

export default function FundCard({ fund, onSelect, watchlist, toggleWatch }) {
  const [hov, setHov] = useState(false);
  const f = fund; // alias for brevity

  return (
    <div
      onClick={() => onSelect(f)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "#fff",
        border: "1.5px solid #e9ebf0",
        borderRadius: 16,
        padding: "22px",
        cursor: "pointer",
        boxShadow: hov ? "0 6px 24px rgba(108,99,255,.12)" : "none",
        transform: hov ? "translateY(-3px)" : "translateY(0)",
        transition: "all .2s",
      }}
    >
      {/* Header */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12 }}>
        <div>
          <span style={{ fontSize:11, color:"#6b7280", fontWeight:500 }}>{f.cat}</span>
          <h3 style={{ fontSize:15, fontWeight:700, color:"#0f0f1a", margin:"4px 0 2px" }}>{f.name}</h3>
          <p style={{ fontSize:12, color:"#9ca3af" }}>{f.mgr}</p>
        </div>
        <button
          onClick={e => { e.stopPropagation(); toggleWatch(f.id); }}
          style={{ background:"none", border:"none", cursor:"pointer", padding:4, flexShrink:0 }}
        >
          <StarI f={watchlist.includes(f.id)} />
        </button>
      </div>

      {/* Stats */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:10, marginBottom:12 }}>
        <div>
          <p style={{ fontSize:10, color:"#9ca3af", marginBottom:3 }}>NAV</p>
          <p style={{ fontWeight:700, fontSize:15, color:"#0f0f1a" }}>₹{f.nav}</p>
        </div>
        <div>
          <p style={{ fontSize:10, color:"#9ca3af", marginBottom:3 }}>1Y Return</p>
          <p style={{ fontWeight:700, fontSize:15, color:"#16a34a", display:"flex", alignItems:"center", gap:3 }}>
            <UpArrow />+{f.r1y}%
          </p>
        </div>
        <div>
          <p style={{ fontSize:10, color:"#9ca3af", marginBottom:3 }}>Risk</p>
          <span style={{ background:f.rb, color:f.rc, fontWeight:600, fontSize:11, padding:"3px 9px", borderRadius:20 }}>
            {f.risk}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop:"1px solid #f3f4f6", paddingTop:10, display:"flex", justifyContent:"space-between", fontSize:11, color:"#9ca3af" }}>
        <span>AUM: {f.aum}</span>
        <span>Expense: {f.exp}%</span>
        <span>Min: ₹{f.min}</span>
      </div>
    </div>
  );
}