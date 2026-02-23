import { TrendUp, BarChart, Shield, Users, ArrowR } from "../icons";

const FEATURES = [
  { icon: <TrendUp />, title: "Smart Analytics",     desc: "AI-powered fund analysis with real-time performance tracking." },
  { icon: <BarChart />, title: "Portfolio Insights",  desc: "Comprehensive portfolio management with risk assessment." },
  { icon: <Shield />,   title: "Secure Trading",      desc: "Role-based access with enterprise-grade security." },
  { icon: <Users />,    title: "Multi-Role Platform", desc: "Tailored dashboards for investors, advisors, and analysts." },
];

export default function HomePage({ goto }) {
  return (
    <div style={{ fontFamily:"'Segoe UI',sans-serif",minHeight:"100vh",display:"flex",flexDirection:"column",width:"100%" }}>

      {/* ── NAVBAR ── */}
      <nav style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 5%",height:68,background:"#eef0f5",borderBottom:"1px solid #e2e5ed",position:"sticky",top:0,zIndex:100 }}>
        <div style={{ display:"flex",alignItems:"center",gap:10 }}>
          <div style={{ width:40,height:40,borderRadius:10,background:"linear-gradient(135deg,#6c63ff,#4f46e5)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff" }}>
            <TrendUp />
          </div>
          <span style={{ fontWeight:700,fontSize:20,color:"#1a1a2e" }}>MFInsight</span>
        </div>
        <div style={{ display:"flex",alignItems:"center",gap:14 }}>
          <button onClick={() => goto("signin")}
            style={{ background:"none",border:"none",cursor:"pointer",fontSize:15,fontWeight:500,color:"#1a1a2e",fontFamily:"'Segoe UI',sans-serif" }}>
            Sign In
          </button>
          <button onClick={() => goto("signup")}
            style={{ background:"linear-gradient(135deg,#6c63ff,#4f46e5)",border:"none",borderRadius:10,padding:"10px 22px",color:"#fff",fontWeight:600,fontSize:15,cursor:"pointer",fontFamily:"'Segoe UI',sans-serif",boxShadow:"0 4px 14px rgba(108,99,255,.35)" }}>
            Get Started
          </button>
        </div>
      </nav>

      {/* ── HERO SECTION ── */}
      <section style={{ flex:1,background:"#eef0f5",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"80px 5% 100px" }}>
        <p style={{ fontSize:13,fontWeight:600,color:"#6c63ff",marginBottom:20 }}>
          Investment Perception &amp; Selection Behavior
        </p>
        <h1 style={{ fontSize:"clamp(36px,5vw,68px)",fontWeight:900,color:"#0f0f1a",lineHeight:1.1,marginBottom:4,letterSpacing:"-1.5px",maxWidth:820 }}>
          Analyze, Compare &amp; Invest in
        </h1>
        <h1 style={{ fontSize:"clamp(36px,5vw,68px)",fontWeight:900,background:"linear-gradient(135deg,#7c6ff7,#a78bfa)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",lineHeight:1.2,marginBottom:28,letterSpacing:"-1.5px" }}>
          Mutual Funds
        </h1>
        <p style={{ fontSize:17,color:"#6b7280",maxWidth:540,lineHeight:1.75,marginBottom:44 }}>
          A comprehensive platform for understanding investor behavior, analyzing fund performance,
          and making data-driven investment decisions.
        </p>
        <div style={{ display:"flex",gap:16,flexWrap:"wrap",justifyContent:"center" }}>
          <button onClick={() => goto("signup")}
            style={{ display:"flex",alignItems:"center",gap:10,background:"linear-gradient(135deg,#6c63ff,#4f46e5)",border:"none",borderRadius:14,padding:"16px 34px",color:"#fff",fontWeight:700,fontSize:16,cursor:"pointer",fontFamily:"'Segoe UI',sans-serif",boxShadow:"0 4px 14px rgba(108,99,255,.35)" }}>
            Start Investing <ArrowR />
          </button>
          <button onClick={() => goto("signin")}
            style={{ background:"#fff",border:"1.5px solid #e5e7eb",borderRadius:14,padding:"16px 34px",color:"#0f0f1a",fontWeight:700,fontSize:16,cursor:"pointer",fontFamily:"'Segoe UI',sans-serif" }}>
            Admin Login
          </button>
        </div>
      </section>

      {/* ── WHY MFINSIGHT SECTION ── */}
      <section style={{ background:"#fff",padding:"80px 5% 100px",textAlign:"center" }}>
        <h2 style={{ fontSize:"clamp(24px,3.5vw,40px)",fontWeight:800,color:"#0f0f1a",marginBottom:52,letterSpacing:"-0.5px" }}>
          Why <span style={{ color:"#6c63ff" }}>MFInsight</span>?
        </h2>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:22,maxWidth:1100,margin:"0 auto" }}>
          {FEATURES.map(f => (
            <div key={f.title}
              style={{ background:"#fff",border:"1.5px solid #e9ebf0",borderRadius:18,padding:"34px 26px",textAlign:"left",transition:"box-shadow .2s,transform .2s" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow="0 8px 30px rgba(108,99,255,.12)"; e.currentTarget.style.transform="translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow="none"; e.currentTarget.style.transform="translateY(0)"; }}
            >
              <div style={{ width:48,height:48,borderRadius:13,background:"#eef0f9",display:"flex",alignItems:"center",justifyContent:"center",color:"#6c63ff",marginBottom:22 }}>
                {f.icon}
              </div>
              <h3 style={{ fontWeight:700,fontSize:17,color:"#0f0f1a",marginBottom:9 }}>{f.title}</h3>
              <p style={{ fontSize:14,color:"#6b7280",lineHeight:1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background:"#eef0f5",textAlign:"center",padding:"22px",fontSize:13,color:"#9ca3af",borderTop:"1px solid #e2e5ed" }}>
        © 2026 MFInsight — Investment Perception &amp; Selection Behavior Towards Mutual Funds
      </footer>
    </div>
  );
}