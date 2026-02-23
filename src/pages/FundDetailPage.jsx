import { ALLOC_COLORS } from "../data";
import LineChart from "../components/LineChart";
import DonutChart from "../components/DonutChart";
import { BackI } from "../icons";

export default function FundDetailPage({ fund: f, onBack, onInvest }) {
  return (
    <div style={{ padding:"22px 4%", maxWidth:1200, margin:"0 auto" }}>

      {/* Back button */}
      <button onClick={onBack}
        style={{ display:"flex",alignItems:"center",gap:7,background:"none",border:"none",cursor:"pointer",color:"#6c63ff",fontWeight:600,fontSize:13,marginBottom:18,fontFamily:"'Segoe UI',sans-serif" }}>
        <BackI /> Back to Explore
      </button>

      <div style={{ display:"grid",gridTemplateColumns:"1fr 270px",gap:16 }}>

        {/* ── LEFT COLUMN ── */}
        <div>
          {/* Fund info card */}
          <div style={{ background:"#fff",border:"1.5px solid #e9ebf0",borderRadius:14,padding:"20px 24px",marginBottom:14 }}>
            <span style={{ fontSize:11,color:"#6c63ff",fontWeight:600,background:"#eef0f9",padding:"3px 10px",borderRadius:20 }}>{f.cat}</span>
            <h2 style={{ fontSize:20,fontWeight:800,color:"#0f0f1a",margin:"8px 0 3px" }}>{f.name}</h2>
            <p style={{ fontSize:12,color:"#9ca3af",marginBottom:12 }}>{f.mgr}</p>
            <p style={{ fontSize:13,color:"#6b7280",lineHeight:1.7 }}>{f.desc}</p>
          </div>

          {/* Key stats */}
          <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10,marginBottom:14 }}>
            {[
              ["NAV",      `₹${f.nav}`],
              ["1Y Return",`+${f.r1y}%`],
              ["Expense",  `${f.exp}%`],
              ["Min SIP",  `₹${f.min}`],
            ].map(([k, v]) => (
              <div key={k} style={{ background:"#fff",border:"1.5px solid #e9ebf0",borderRadius:11,padding:"13px" }}>
                <p style={{ fontSize:10,color:"#9ca3af",marginBottom:4 }}>{k}</p>
                <p style={{ fontSize:15,fontWeight:700,color: k==="1Y Return"?"#16a34a":"#0f0f1a" }}>{v}</p>
              </div>
            ))}
          </div>

          {/* Performance chart */}
          <div style={{ background:"#fff",border:"1.5px solid #e9ebf0",borderRadius:14,padding:"20px 24px",marginBottom:14 }}>
            <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12 }}>
              <h3 style={{ fontWeight:700,fontSize:14,color:"#0f0f1a" }}>Fund Performance (1Y)</h3>
              <span style={{ fontSize:12,color:"#16a34a",fontWeight:600,background:"#dcfce7",padding:"3px 10px",borderRadius:20 }}>↗ +{f.r1y}%</span>
            </div>
            <LineChart data={f.graph} />
          </div>

          {/* Invest choice */}
          <div style={{ background:"#fff",border:"1.5px solid #e9ebf0",borderRadius:14,padding:"20px 24px" }}>
            <h3 style={{ fontWeight:700,fontSize:14,color:"#0f0f1a",marginBottom:13 }}>How would you like to invest?</h3>
            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12 }}>
              {[
                ["SIP",      "📅","#6c63ff","Invest a fixed amount every month automatically"],
                ["One-Time", "💰","#0f0f1a","Invest a lump sum amount once"],
              ].map(([mode, ico, col, desc]) => (
                <button key={mode} onClick={() => onInvest(f, mode)}
                  style={{ padding:"16px",borderRadius:13,border:"1.5px solid #e5e7eb",background:"#fff",cursor:"pointer",fontFamily:"'Segoe UI',sans-serif",textAlign:"left",transition:"all .15s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor="#6c63ff"; e.currentTarget.style.background="#f8f8ff"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor="#e5e7eb"; e.currentTarget.style.background="#fff"; }}
                >
                  <p style={{ fontWeight:700,fontSize:15,color:col,marginBottom:4 }}>{ico} {mode}</p>
                  <p style={{ fontSize:12,color:"#6b7280" }}>{desc}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN — Allocation ── */}
        <div style={{ background:"#fff",border:"1.5px solid #e9ebf0",borderRadius:14,padding:20,height:"fit-content" }}>
          <h3 style={{ fontWeight:700,fontSize:14,color:"#0f0f1a",marginBottom:16 }}>Allocation</h3>
          <div style={{ display:"flex",justifyContent:"center",marginBottom:14 }}>
            <DonutChart data={f.alloc} />
          </div>
          {f.alloc.map((a, i) => (
            <div key={a.l} style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:9 }}>
              <div style={{ display:"flex",alignItems:"center",gap:7 }}>
                <div style={{ width:9,height:9,borderRadius:"50%",background:ALLOC_COLORS[i] }} />
                <span style={{ fontSize:13,color:"#374151" }}>{a.l}</span>
              </div>
              <span style={{ fontWeight:600,fontSize:13 }}>{a.v}%</span>
            </div>
          ))}
          <div style={{ marginTop:16,borderTop:"1px solid #f3f4f6",paddingTop:14 }}>
            <div style={{ display:"flex",justifyContent:"space-between",marginBottom:8 }}>
              <span style={{ fontSize:12,color:"#9ca3af" }}>AUM</span>
              <span style={{ fontSize:12,fontWeight:600 }}>{f.aum}</span>
            </div>
            <div style={{ display:"flex",justifyContent:"space-between" }}>
              <span style={{ fontSize:12,color:"#9ca3af" }}>Risk</span>
              <span style={{ fontSize:12,fontWeight:600,color:f.rc,background:f.rb,padding:"2px 9px",borderRadius:20 }}>{f.risk}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}