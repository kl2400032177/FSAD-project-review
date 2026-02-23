import { TrendUp, SearchI, BellI, UserI } from "../icons";

export default function DashboardNavbar({ tab, setTab, onSignOut, onProfile }) {
  return (
    <nav style={{
      background: "#fff", borderBottom: "1px solid #e5e7eb",
      display: "flex", alignItems: "center", padding: "0 28px",
      height: 60, gap: 4, position: "sticky", top: 0, zIndex: 100,
    }}>
      {/* Logo */}
      <div style={{ display:"flex",alignItems:"center",gap:8,marginRight:16 }}>
        <div style={{ width:36,height:36,borderRadius:9,background:"linear-gradient(135deg,#6c63ff,#4f46e5)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff" }}>
          <TrendUp size={17} />
        </div>
        <span style={{ fontWeight:800,fontSize:17,color:"#6c63ff" }}>MFInsight</span>
      </div>

      {/* Nav tabs */}
      {["Explore","Portfolio","Watchlist"].map(t => (
        <button key={t} onClick={() => setTab(t)}
          style={{ background:tab===t?"#eef0f9":"none",border:"none",cursor:"pointer",fontWeight:600,fontSize:13,color:tab===t?"#6c63ff":"#4b5563",padding:"7px 15px",borderRadius:9,fontFamily:"'Segoe UI',sans-serif",transition:"background .15s" }}>
          {t}
        </button>
      ))}

      <div style={{ flex: 1 }} />

      {/* Search bar */}
      <div style={{ display:"flex",alignItems:"center",background:"#f3f4f6",borderRadius:9,padding:"7px 12px",gap:6,width:175 }}>
        <SearchI /><span style={{ fontSize:12,color:"#9ca3af" }}>Search funds...</span>
      </div>

      {/* Bell */}
      <div style={{ position:"relative",cursor:"pointer",marginLeft:14 }}>
        <BellI />
        <div style={{ position:"absolute",top:-3,right:-3,width:7,height:7,borderRadius:"50%",background:"#ef4444" }}/>
      </div>

      {/* User avatar — click to sign out */}
      <div
        onClick={onProfile}
        title="My Profile"
        style={{ width:34,height:34,borderRadius:"50%",background:"linear-gradient(135deg,#6c63ff,#4f46e5)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",cursor:"pointer",marginLeft:12,boxShadow:"0 2px 8px rgba(108,99,255,.3)",transition:"transform .15s" }}
        onMouseEnter={e=>e.currentTarget.style.transform="scale(1.08)"}
        onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}
      >
        <UserI />
      </div>
    </nav>
  );
}