import { useState } from "react";
import SIPCalendar from "../components/SIPCalendar";
import { BackI, CalI } from "../icons";

export default function PaymentPage({ fund: f, mode, onBack, onSuccess }) {
  const [amount,  setAmount]  = useState("");
  const [sipDate, setSipDate] = useState(null);
  const [processing, setProc] = useState(false);

  const n     = parseInt(amount) || 0;
  const valid = n >= f.min && (mode === "One-Time" || sipDate !== null);

  function handleConfirm() {
    if (!valid) return;
    setProc(true);
    setTimeout(() => {
      const entry = mode === "SIP"
        ? { fid: f.id, mode, amount: n, date: sipDate, value: n * 12 }
        : { fid: f.id, mode, units: Math.floor(n / f.nav), value: n };
      onSuccess(entry, { f, mode, amount: n, date: sipDate });
    }, 1600);
  }

  if (processing) {
    return (
      <div style={{ minHeight:"60vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:14,padding:40 }}>
        <div style={{ width:54,height:54,borderRadius:"50%",background:"#dcfce7",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22 }}>✓</div>
        <h2 style={{ fontSize:18,fontWeight:800,color:"#0f0f1a" }}>Processing your {mode} investment…</h2>
        <div style={{ width:180,height:4,background:"#eef0f9",borderRadius:10,overflow:"hidden",marginTop:6 }}>
          <div style={{ height:"100%",background:"#6c63ff",borderRadius:10,animation:"prog 1.5s ease forwards" }}/>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding:"22px 4%", maxWidth:530, margin:"0 auto" }}>

      {/* Back button */}
      <button onClick={onBack}
        style={{ display:"flex",alignItems:"center",gap:7,background:"none",border:"none",cursor:"pointer",color:"#6c63ff",fontWeight:600,fontSize:13,marginBottom:18,fontFamily:"'Segoe UI',sans-serif" }}>
        <BackI /> Back to Fund
      </button>

      <div style={{ background:"#fff",border:"1.5px solid #e9ebf0",borderRadius:15,padding:"24px 28px" }}>

        {/* Fund header */}
        <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",paddingBottom:16,borderBottom:"1px solid #f3f4f6",marginBottom:20 }}>
          <div>
            <p style={{ fontSize:11,color:"#9ca3af",marginBottom:2 }}>{f.cat}</p>
            <h2 style={{ fontSize:16,fontWeight:800,color:"#0f0f1a",marginBottom:6 }}>{f.name}</h2>
            <span style={{ fontSize:11,fontWeight:600,color:"#6c63ff",background:"#eef0f9",padding:"3px 9px",borderRadius:20 }}>
              {mode === "SIP" ? "📅 Monthly SIP" : "💰 One-Time Investment"}
            </span>
          </div>
          <div style={{ textAlign:"right" }}>
            <p style={{ fontSize:10,color:"#9ca3af" }}>NAV</p>
            <p style={{ fontWeight:700,fontSize:14 }}>₹{f.nav}</p>
          </div>
        </div>

        {/* Amount input */}
        <p style={{ fontSize:13,fontWeight:600,color:"#1a1a2e",marginBottom:9 }}>
          {mode === "SIP" ? "Monthly SIP Amount" : "Investment Amount"}
        </p>
        <div style={{ position:"relative",marginBottom:5 }}>
          <span style={{ position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",fontSize:16,fontWeight:700,color:"#6b7280" }}>₹</span>
          <input
            type="number" value={amount} onChange={e => setAmount(e.target.value)}
            placeholder="Enter amount"
            style={{ width:"100%",padding:"12px 13px 12px 27px",fontSize:17,fontWeight:700,background:"#f3f4f6",border:"1.5px solid "+(amount && n < f.min ? "#ef4444" : "#e5e7eb"),borderRadius:11,outline:"none",fontFamily:"'Segoe UI',sans-serif",boxSizing:"border-box" }}
          />
        </div>
        {amount && n < f.min && (
          <p style={{ fontSize:11,color:"#ef4444",marginBottom:3 }}>Minimum is ₹{f.min}</p>
        )}
        <p style={{ fontSize:11,color:"#9ca3af",marginBottom:16 }}>Minimum investment: ₹{f.min}</p>

        {/* Quick presets */}
        <div style={{ display:"flex",gap:8,marginBottom:20,flexWrap:"wrap" }}>
          {[5000, 2500, 1000].map(p => (
            <button key={p} onClick={() => setAmount(String(p))}
              style={{ padding:"7px 15px",borderRadius:9,border:"1.5px solid "+(amount==String(p)?"#6c63ff":"#e5e7eb"),background:amount==String(p)?"#eef0f9":"#fff",fontWeight:600,fontSize:13,cursor:"pointer",fontFamily:"'Segoe UI',sans-serif",color:amount==String(p)?"#6c63ff":"#1a1a2e",transition:"all .15s" }}>
              ₹{p.toLocaleString()}
            </button>
          ))}
          <button onClick={() => setAmount(a => String((parseInt(a) || 0) + 100))}
            style={{ padding:"7px 15px",borderRadius:9,border:"1.5px solid #e5e7eb",background:"#fff",fontWeight:600,fontSize:13,cursor:"pointer",fontFamily:"'Segoe UI',sans-serif",color:"#6c63ff" }}>
            +₹100
          </button>
        </div>

        {/* SIP Calendar */}
        {mode === "SIP" && (
          <div style={{ marginBottom:20 }}>
            <div style={{ display:"flex",alignItems:"center",gap:6,marginBottom:10 }}>
              <CalI />
              <p style={{ fontSize:13,fontWeight:600,color:"#1a1a2e" }}>Select SIP Date</p>
              <span style={{ fontSize:11,color:"#9ca3af" }}>(monthly debit)</span>
            </div>
            <SIPCalendar selected={sipDate} onSelect={setSipDate} />
            {sipDate && (
              <p style={{ fontSize:12,color:"#6c63ff",fontWeight:500,marginTop:7 }}>
                ✓ SIP will be debited on the {sipDate}th of every month
              </p>
            )}
          </div>
        )}

        {/* Order Summary */}
        {n >= f.min && (
          <div style={{ background:"#f8f9ff",border:"1.5px solid #e0e3ff",borderRadius:11,padding:"12px 16px",marginBottom:18 }}>
            <p style={{ fontWeight:700,fontSize:12,color:"#1a1a2e",marginBottom:7 }}>Order Summary</p>
            {[
              ["Fund",   f.name],
              ["Type",   mode],
              ["Amount", `₹${n.toLocaleString()}${mode === "SIP" ? "/month" : ""}`],
              ...(mode === "SIP" && sipDate ? [["SIP Date", `${sipDate}th of every month`]] : []),
            ].map(([k, v]) => (
              <div key={k} style={{ display:"flex",justifyContent:"space-between",marginBottom:4 }}>
                <span style={{ fontSize:12,color:"#6b7280" }}>{k}</span>
                <span style={{ fontSize:12,fontWeight:600,color:k==="Amount"?"#6c63ff":"#0f0f1a",maxWidth:230,textAlign:"right" }}>{v}</span>
              </div>
            ))}
          </div>
        )}

        {/* Confirm button */}
        <button onClick={handleConfirm} disabled={!valid}
          style={{ width:"100%",padding:"14px",background:valid?"linear-gradient(135deg,#6c63ff,#4f46e5)":"#e5e7eb",border:"none",borderRadius:11,color:valid?"#fff":"#9ca3af",fontWeight:700,fontSize:15,cursor:valid?"pointer":"not-allowed",fontFamily:"'Segoe UI',sans-serif",transition:"all .2s" }}>
          {mode === "SIP"
            ? `Start SIP · ₹${n > 0 ? n.toLocaleString() : "—"}/month`
            : `Invest Now · ₹${n > 0 ? n.toLocaleString() : "—"}`}
        </button>
      </div>
    </div>
  );
}