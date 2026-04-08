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

export default function SignUpPage({ goto }) {
  const [role,  setRole]  = useState("Investor");
  const [name,  setName]  = useState("");
  const [nt,    setNt]    = useState(false);
  const [email, setEmail] = useState("");
  const [et,    setEt]    = useState(false);
  const [pwd,   setPwd]   = useState("");
  const [pt,    setPt]    = useState(false);
  const [showP, setShowP] = useState(false);
  const [sub,   setSub]   = useState(false);
  const [error, setError] = useState("");         // ← NEW
  const [loading, setLoading] = useState(false);  // ← NEW

  const ev     = validateEmail(email);
  const nameOk = name.trim().length >= 2;
  const pwdOk  = pwd.length >= 6;
  const showN  = nt || sub;
  const showE  = et || sub;
  const showP2 = pt || sub;

  async function handleSubmit() {              // ← NOW ASYNC
    setSub(true); setNt(true); setEt(true); setPt(true);
    if (!ev.ok || !nameOk || !pwdOk) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: name,
          email,
          password: pwd,
          role: role.toUpperCase()
        })
      });

      const data = await response.json();

      if (response.ok) {
        goto("signin"); // go to login after successful registration
      } else {
        setError(data.message || "Registration failed. Try again!");
      }
    } catch (err) {
      setError("Cannot connect to server. Make sure backend is running!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ display:"flex",width:"100vw",minHeight:"100vh",fontFamily:"'Segoe UI',sans-serif" }}>
      <AuthLeft
        title={"Start your investment\njourney today"}
        sub="Join thousands of investors making data-driven decisions with MFInsight."
      />

      <div style={{ flex:1,background:"#f5f6fa",display:"flex",alignItems:"center",justifyContent:"center",padding:"40px 5%" }}>
        <div style={{ width:"100%",maxWidth:440 }}>
          <h1 style={{ fontSize:30,fontWeight:800,color:"#0f0f1a",marginBottom:5,letterSpacing:"-0.5px" }}>Create account</h1>
          <p style={{ fontSize:14,color:"#9ca3af",marginBottom:32 }}>Choose your role and get started</p>

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

          {/* Full Name */}
          <div style={{ marginBottom:20 }}>
            <label style={labelSt}>Full Name</label>
            <input
              type="text" placeholder="John Doe" value={name}
              onChange={e => setName(e.target.value)} onBlur={() => setNt(true)}
              style={inpSt(showN, showN ? nameOk : null)}
            />
            <ValidationMsg
              msg={!nameOk ? "Please enter your full name (at least 2 characters)." : "Name looks good!"}
              ok={nameOk} show={showN}
            />
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
                onChange={e => setPwd(e.target.value)} onBlur={() => setPt(true)}
                style={{ ...inpSt(showP2, showP2 ? pwdOk : null), paddingRight:44 }}
              />
              <button onClick={() => setShowP(!showP)}
                style={{ position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"#9ca3af",display:"flex" }}>
                {showP ? <EyeOff /> : <EyeOn />}
              </button>
            </div>
            <ValidationMsg
              msg={!pwdOk ? "Password must be at least 6 characters." : "Strong password ✓"}
              ok={pwdOk} show={showP2}
            />
          </div>

          {/* Error Message */}
          {error && (
            <p style={{ color:"#ef4444",fontSize:13,marginBottom:12,textAlign:"center",background:"#fef2f2",padding:"8px 12px",borderRadius:8 }}>
              ⚠️ {error}
            </p>
          )}

          {/* Submit */}
          <button onClick={handleSubmit} disabled={loading}
            style={{ width:"100%",padding:"14px",background: loading ? "#a5b4fc" : "linear-gradient(135deg,#6c63ff,#4f46e5)",border:"none",borderRadius:12,color:"#fff",fontWeight:700,fontSize:15,cursor: loading ? "not-allowed" : "pointer",fontFamily:"'Segoe UI',sans-serif",boxShadow:"0 4px 14px rgba(108,99,255,.3)",marginBottom:20 }}>
            {loading ? "Creating account..." : "Create Account"}
          </button>

          <p style={{ textAlign:"center",fontSize:13,color:"#9ca3af" }}>
            Already have an account?{" "}
            <button onClick={() => goto("signin")}
              style={{ background:"none",border:"none",cursor:"pointer",color:"#6c63ff",fontWeight:700,fontSize:13,fontFamily:"'Segoe UI',sans-serif" }}>
              Sign In
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