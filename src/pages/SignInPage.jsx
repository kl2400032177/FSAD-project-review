import { useState } from "react";
import AuthLeft from "../components/AuthLeft";
import ValidationMsg from "../components/ValidationMsg";
import { EyeOn, EyeOff } from "../icons";
import { validateEmail } from "../validation";

const labelSt = { display:"block",fontSize:14,fontWeight:600,color:"#1a1a2e",marginBottom:8 };
function inpSt(touched, valid) {
  let border = "1.5px solid #e5e7eb";
  if (touched && valid === true)  border = "1.5px solid #22c55e";
  if (touched && valid === false) border = "1.5px solid #ef4444";
  return { width:"100%",padding:"12px 15px",fontSize:14,background:"#f1f3f6",border,borderRadius:10,outline:"none",color:"#1a1a2e",fontFamily:"'Segoe UI',sans-serif",transition:"border-color .2s" };
}

export default function SignInPage({ goto }) {
  const [role,  setRole]  = useState("Investor");
  const [email, setEmail] = useState("");
  const [et,    setEt]    = useState(false);   // email touched
  const [pwd,   setPwd]   = useState("");
  const [showP, setShowP] = useState(false);
  const [sub,   setSub]   = useState(false);

  const ev    = validateEmail(email);
  const showE = et || sub;

  function handleSubmit() {
    setSub(true); setEt(true);
    if (!ev.ok || !pwd) return;
    goto("dashboard");
  }

  return (
    <div style={{ display:"flex",width:"100vw",minHeight:"100vh",fontFamily:"'Segoe UI',sans-serif" }}>
      <AuthLeft
        title={"Understand investment\nbehavior like never before"}
        sub="Analyze mutual fund performance, compare funds, and make smarter investment decisions."
      />

      {/* Right panel */}
      <div style={{ flex:1,background:"#f5f6fa",display:"flex",alignItems:"center",justifyContent:"center",padding:"40px 5%" }}>
        <div style={{ width:"100%",maxWidth:440 }}>
          <h1 style={{ fontSize:30,fontWeight:800,color:"#0f0f1a",marginBottom:5,letterSpacing:"-0.5px" }}>Welcome back</h1>
          <p style={{ fontSize:14,color:"#9ca3af",marginBottom:32 }}>Sign in to your account</p>

          {/* Role */}
          <div style={{ marginBottom:20 }}>
            <label style={labelSt}>Role</label>
            <select value={role} onChange={e => setRole(e.target.value)} style={inpSt(false, null)}>
              <option>Investor</option>
              <option>Advisor</option>
              <option>Analyst</option>
              <option>Admin</option>
            </select>
          </div>

          {/* Email */}
          <div style={{ marginBottom:20 }}>
            <label style={labelSt}>Email</label>
            <input
              type="text" placeholder="you@example.com" value={email}
              onChange={e => setEmail(e.target.value)} onBlur={() => setEt(true)}
              style={inpSt(showE, showE ? ev.ok : null)}
            />
            <ValidationMsg msg={ev.msg} ok={ev.ok} show={showE} />
          </div>

          {/* Password */}
          <div style={{ marginBottom:28 }}>
            <label style={labelSt}>Password</label>
            <div style={{ position:"relative" }}>
              <input
                type={showP ? "text" : "password"} placeholder="••••••••" value={pwd}
                onChange={e => setPwd(e.target.value)}
                style={{ ...inpSt(false, null), paddingRight:44 }}
              />
              <button onClick={() => setShowP(!showP)}
                style={{ position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"#9ca3af",display:"flex" }}>
                {showP ? <EyeOff /> : <EyeOn />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button onClick={handleSubmit}
            style={{ width:"100%",padding:"14px",background:"linear-gradient(135deg,#6c63ff,#4f46e5)",border:"none",borderRadius:12,color:"#fff",fontWeight:700,fontSize:15,cursor:"pointer",fontFamily:"'Segoe UI',sans-serif",boxShadow:"0 4px 14px rgba(108,99,255,.3)",marginBottom:20 }}>
            Sign In
          </button>

          <p style={{ textAlign:"center",fontSize:13,color:"#9ca3af" }}>
            Don't have an account?{" "}
            <button onClick={() => goto("signup")}
              style={{ background:"none",border:"none",cursor:"pointer",color:"#6c63ff",fontWeight:700,fontSize:13,fontFamily:"'Segoe UI',sans-serif" }}>
              Sign Up
            </button>
          </p>
          <p style={{ textAlign:"center",marginTop:12 }}>
            <button onClick={() => goto("home")}
              style={{ background:"none",border:"none",cursor:"pointer",color:"#9ca3af",fontSize:12,fontFamily:"'Segoe UI',sans-serif" }}>
              ← Back to Home
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}