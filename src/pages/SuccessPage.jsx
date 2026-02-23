export default function SuccessPage({ data, onDone }) {
  const { f, mode, amount, date } = data;

  return (
    <div style={{
      minHeight: "70vh", display:"flex", flexDirection:"column",
      alignItems:"center", justifyContent:"center",
      gap: 12, padding: 40, textAlign:"center",
    }}>
      <div style={{ fontSize: 58 }}>🎉</div>

      <h2 style={{ fontSize:22,fontWeight:800,color:"#0f0f1a" }}>
        {mode === "SIP" ? "SIP Started Successfully!" : "Investment Successful!"}
      </h2>

      <p style={{ fontSize:14,color:"#6b7280",maxWidth:380,lineHeight:1.7 }}>
        {mode === "SIP"
          ? `₹${amount.toLocaleString()} SIP in ${f.name} will be debited on the ${date}th of every month.`
          : `₹${amount.toLocaleString()} invested in ${f.name} successfully.`}
      </p>

      <div style={{ display:"flex",gap:10,marginTop:10 }}>
        <button onClick={() => onDone("Portfolio")}
          style={{ padding:"12px 26px",background:"linear-gradient(135deg,#6c63ff,#4f46e5)",border:"none",borderRadius:11,color:"#fff",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"'Segoe UI',sans-serif" }}>
          View Portfolio
        </button>
        <button onClick={() => onDone("Explore")}
          style={{ padding:"12px 26px",background:"#fff",border:"1.5px solid #e5e7eb",borderRadius:11,color:"#1a1a2e",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"'Segoe UI',sans-serif" }}>
          Explore More
        </button>
      </div>
    </div>
  );
}