import { FUNDS, ALLOC_COLORS } from "../data";
import DonutChart from "../components/DonutChart";

const ALLOC = [
  { l:"Large Cap", v:35, c:"#6c63ff" },
  { l:"Mid Cap",   v:25, c:"#8b5cf6" },
  { l:"Small Cap", v:15, c:"#22c55e" },
  { l:"Index",     v:15, c:"#f59e0b" },
  { l:"Hybrid",    v:10, c:"#ec4899" },
];

export default function PortfolioPage({ invested, onFundClick }) {
  // Empty state
  if (invested.length === 0) {
    return (
      <div style={{ padding:"26px 4%", maxWidth:1200, margin:"0 auto" }}>
        <h1 style={{ fontSize:23,fontWeight:800,color:"#0f0f1a",marginBottom:60 }}>My Portfolio</h1>
        <div style={{ textAlign:"center" }}>
          <p style={{ fontSize:46 }}>📊</p>
          <p style={{ fontSize:17,fontWeight:600,color:"#1a1a2e",marginTop:14 }}>No investments yet</p>
          <p style={{ fontSize:13,color:"#9ca3af",marginTop:6 }}>Go to Explore and invest in a fund to see it here</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding:"26px 4%", maxWidth:1200, margin:"0 auto" }}>
      <h1 style={{ fontSize:23,fontWeight:800,color:"#0f0f1a",marginBottom:20 }}>My Portfolio</h1>

      <div style={{ display:"grid",gridTemplateColumns:"1fr 290px",gap:18 }}>

        {/* Fund list */}
        <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
          {invested.map((inv, i) => {
            const f = FUNDS.find(x => x.id === inv.fid);
            return (
              <div key={i} onClick={() => onFundClick(f)}
                style={{ background:"#fff",border:"1.5px solid #e9ebf0",borderRadius:13,padding:"16px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",transition:"box-shadow .2s" }}
                onMouseEnter={e => e.currentTarget.style.boxShadow="0 4px 16px rgba(108,99,255,.1)"}
                onMouseLeave={e => e.currentTarget.style.boxShadow="none"}
              >
                <div>
                  <p style={{ fontWeight:700,fontSize:15,color:"#0f0f1a" }}>{f.name}</p>
                  <p style={{ fontSize:12,color:"#9ca3af",marginTop:2 }}>
                    {inv.mode === "SIP"
                      ? `SIP ₹${inv.amount}/month · ${inv.date}th of month`
                      : `${inv.units} units · NAV ₹${f.nav}`}
                  </p>
                </div>
                <div style={{ textAlign:"right" }}>
                  <p style={{ fontWeight:700,fontSize:15,color:"#0f0f1a" }}>₹{inv.value?.toLocaleString()}</p>
                  <p style={{ fontSize:12,color:"#16a34a",marginTop:2 }}>↗ +{f.r1y}%</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Allocation panel */}
        <div style={{ background:"#fff",border:"1.5px solid #e9ebf0",borderRadius:14,padding:20,height:"fit-content" }}>
          <h3 style={{ fontWeight:700,fontSize:14,color:"#0f0f1a",marginBottom:16 }}>Allocation</h3>
          <div style={{ display:"flex",justifyContent:"center",marginBottom:14 }}>
            <DonutChart data={ALLOC} />
          </div>
          {ALLOC.map(a => (
            <div key={a.l} style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8 }}>
              <div style={{ display:"flex",alignItems:"center",gap:7 }}>
                <div style={{ width:9,height:9,borderRadius:"50%",background:a.c }} />
                <span style={{ fontSize:13,color:"#374151" }}>{a.l}</span>
              </div>
              <span style={{ fontSize:13,fontWeight:600 }}>{a.v}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}