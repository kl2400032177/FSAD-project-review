import { TrendUp } from "../icons";

export default function AuthLeft({ title, sub }) {
  return (
    <div style={{
      width: "50%", minHeight: "100vh",
      background: "linear-gradient(155deg,#5b7cf6 0%,#6c63ff 45%,#8b5cf6 100%)",
      display: "flex", flexDirection: "column", justifyContent: "center",
      padding: "60px 52px", position: "relative", overflow: "hidden", flexShrink: 0,
    }}>
      {/* Decorative circles */}
      <div style={{ position:"absolute",top:-80,right:-80,width:280,height:280,borderRadius:"50%",background:"rgba(255,255,255,.06)" }}/>
      <div style={{ position:"absolute",bottom:-60,left:-60,width:220,height:220,borderRadius:"50%",background:"rgba(255,255,255,.04)" }}/>

      {/* Logo icon */}
      <div style={{ width:54,height:54,borderRadius:13,background:"rgba(255,255,255,.18)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",marginBottom:48,position:"relative",zIndex:1 }}>
        <TrendUp size={23} />
      </div>

      <h2 style={{ fontSize:"clamp(24px,2.6vw,38px)",fontWeight:800,color:"#fff",lineHeight:1.3,marginBottom:16,letterSpacing:"-0.5px",whiteSpace:"pre-line",position:"relative",zIndex:1 }}>
        {title}
      </h2>
      <p style={{ fontSize:15,color:"rgba(255,255,255,.75)",lineHeight:1.7,maxWidth:360,position:"relative",zIndex:1 }}>
        {sub}
      </p>
    </div>
  );
}