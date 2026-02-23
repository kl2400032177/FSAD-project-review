import { useState, useRef } from "react";

/* ═══════════════════════ ICONS ═══════════════════════ */
const BellIcon     = () => (<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>);
const GearIcon     = () => (<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>);
const CameraIcon   = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>);
const EditIcon     = () => (<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>);
const BackIcon     = () => (<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>);
const CloseIcon    = () => (<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>);
const ChevR        = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c4c8d4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>);
const PlusIcon     = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>);
const CheckIcon    = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>);

/* Section icons */
const StockIcon    = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>);
const FOIcon       = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>);
const OrderIcon    = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>);
const AccountIcon  = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>);
const BankIcon     = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="10" width="18" height="11" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>);
const SupportIcon  = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>);
const ReportIcon   = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>);
const ReferIcon    = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>);

/* ═══════════════════════ TOGGLE ════════════════════════ */
function Toggle({ on, set }) {
  return (
    <div onClick={() => set(!on)} style={{ width:44,height:24,borderRadius:12,background:on?"#6c63ff":"#e5e7eb",cursor:"pointer",position:"relative",transition:"background .2s",flexShrink:0 }}>
      <div style={{ position:"absolute",top:3,left:on?22:3,width:18,height:18,borderRadius:"50%",background:"#fff",transition:"left .2s",boxShadow:"0 1px 4px rgba(0,0,0,.2)" }}/>
    </div>
  );
}

/* ═══════════════════════ NOTIFICATION PANEL ═══════════ */
const NOTIFS = [
  { id:1, title:"SIP Executed ✅",  msg:"₹2,500 SIP in Bluechip Large Cap Fund processed.",  time:"2 min ago",  unread:true,  dot:"#6c63ff" },
  { id:2, title:"Market Update 📈", msg:"Nifty 50 up +1.2%. Your portfolio gained ₹3,240.",   time:"1 hr ago",   unread:true,  dot:"#16a34a" },
  { id:3, title:"Fund Alert 🔔",    msg:"Axis Small Cap Fund NFO opens today.",                time:"3 hrs ago",  unread:false, dot:"#f59e0b" },
  { id:4, title:"Order Filled",     msg:"Purchase of Growth Mid Cap Fund units completed.",    time:"Yesterday",  unread:false, dot:"#6c63ff" },
  { id:5, title:"Dividend Credit",  msg:"₹840 dividend credited from Nifty 50 Index Fund.",   time:"2 days ago", unread:false, dot:"#16a34a" },
];

function NotifPanel({ onClose }) {
  return (
    <div style={{ position:"fixed",top:0,right:0,width:360,height:"100vh",background:"#fff",boxShadow:"-6px 0 30px rgba(0,0,0,.13)",zIndex:1000,display:"flex",flexDirection:"column",animation:"slideIn .22s ease" }}>
      <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 20px 14px",borderBottom:"1px solid #f3f4f6" }}>
        <div>
          <h2 style={{ fontWeight:800,fontSize:17,color:"#0f0f1a" }}>Notifications</h2>
          <p style={{ fontSize:12,color:"#9ca3af",marginTop:2 }}>2 unread</p>
        </div>
        <button onClick={onClose} style={{ background:"#f3f4f6",border:"none",cursor:"pointer",color:"#6b7280",display:"flex",padding:8,borderRadius:9 }}><CloseIcon/></button>
      </div>
      <div style={{ flex:1,overflowY:"auto" }}>
        {NOTIFS.map(n => (
          <div key={n.id} style={{ padding:"15px 20px",borderBottom:"1px solid #f9fafb",background:n.unread?"#fbfbff":"#fff",display:"flex",gap:12,cursor:"pointer",transition:"background .15s" }}
            onMouseEnter={e=>e.currentTarget.style.background="#f5f6ff"}
            onMouseLeave={e=>e.currentTarget.style.background=n.unread?"#fbfbff":"#fff"}>
            <div style={{ width:9,height:9,borderRadius:"50%",background:n.unread?n.dot:"transparent",marginTop:5,flexShrink:0,transition:"background .2s" }}/>
            <div>
              <p style={{ fontWeight:600,fontSize:14,color:"#0f0f1a",marginBottom:4 }}>{n.title}</p>
              <p style={{ fontSize:13,color:"#6b7280",lineHeight:1.5,marginBottom:4 }}>{n.msg}</p>
              <p style={{ fontSize:11,color:"#9ca3af" }}>{n.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding:16,borderTop:"1px solid #f3f4f6" }}>
        <button style={{ width:"100%",padding:"11px",background:"#f3f4f6",border:"none",borderRadius:10,fontWeight:600,fontSize:14,cursor:"pointer",color:"#6c63ff",fontFamily:"'Segoe UI',sans-serif" }}>
          Mark all as read
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════ SETTINGS PANEL ═══════════════ */
function SettingsPanel({ onClose }) {
  const [dark,  setDark]  = useState(false);
  const [notif, setNotif] = useState(true);
  const [sip,   setSip]   = useState(true);
  const [price, setPrice] = useState(false);
  const [bio,   setBio]   = useState(false);
  const [twoFA, setTwoFA] = useState(true);

  const rows = [
    { section:"Appearance" },
    { label:"Dark Mode",           type:"toggle", val:dark,  set:setDark  },
    { section:"Notifications" },
    { label:"Push Notifications",  type:"toggle", val:notif, set:setNotif },
    { label:"SIP Reminders",       type:"toggle", val:sip,   set:setSip   },
    { label:"Price Alerts",        type:"toggle", val:price, set:setPrice },
    { section:"Security" },
    { label:"Biometric Login",     type:"toggle", val:bio,   set:setBio   },
    { label:"Two-Factor Auth",     type:"toggle", val:twoFA, set:setTwoFA },
    { label:"Change PIN",          type:"link" },
    { label:"Change Password",     type:"link" },
    { section:"Legal" },
    { label:"Privacy Policy",      type:"link" },
    { label:"Terms of Service",    type:"link" },
    { label:"App Version 2.4.1",   type:"info" },
  ];

  return (
    <div style={{ position:"fixed",top:0,right:0,width:360,height:"100vh",background:"#fff",boxShadow:"-6px 0 30px rgba(0,0,0,.13)",zIndex:1000,display:"flex",flexDirection:"column",animation:"slideIn .22s ease" }}>
      <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 20px 14px",borderBottom:"1px solid #f3f4f6" }}>
        <h2 style={{ fontWeight:800,fontSize:17,color:"#0f0f1a" }}>Settings</h2>
        <button onClick={onClose} style={{ background:"#f3f4f6",border:"none",cursor:"pointer",color:"#6b7280",display:"flex",padding:8,borderRadius:9 }}><CloseIcon/></button>
      </div>
      <div style={{ flex:1,overflowY:"auto" }}>
        {rows.map((r,i) => {
          if (r.section) return (
            <p key={i} style={{ fontSize:11,fontWeight:700,color:"#9ca3af",padding:"16px 20px 6px",letterSpacing:"0.6px",textTransform:"uppercase" }}>{r.section}</p>
          );
          if (r.type==="toggle") return (
            <div key={i} style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 20px",borderBottom:"1px solid #f9fafb" }}>
              <span style={{ fontSize:14,color:"#1a1a2e" }}>{r.label}</span>
              <Toggle on={r.val} set={r.set}/>
            </div>
          );
          if (r.type==="link") return (
            <div key={i} style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 20px",borderBottom:"1px solid #f9fafb",cursor:"pointer" }}
              onMouseEnter={e=>e.currentTarget.style.background="#fafbff"}
              onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
              <span style={{ fontSize:14,color:"#1a1a2e" }}>{r.label}</span>
              <ChevR/>
            </div>
          );
          return (
            <div key={i} style={{ padding:"14px 20px",borderBottom:"1px solid #f9fafb" }}>
              <span style={{ fontSize:13,color:"#9ca3af" }}>{r.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ═══════════════════════ ADD MONEY MODAL ══════════════ */
function AddMoneyModal({ onClose }) {
  const [amt,  setAmt]  = useState("");
  const [done, setDone] = useState(false);
  const presets = [500, 1000, 2500, 5000];
  const n = parseInt(amt) || 0;

  if (done) return (
    <div style={{ position:"fixed",inset:0,background:"rgba(0,0,0,.45)",zIndex:2000,display:"flex",alignItems:"center",justifyContent:"center" }}>
      <div style={{ background:"#fff",borderRadius:18,padding:"36px 32px",width:360,textAlign:"center",boxShadow:"0 20px 60px rgba(0,0,0,.2)" }}>
        <div style={{ width:60,height:60,borderRadius:"50%",background:"#dcfce7",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",fontSize:28 }}>✅</div>
        <h2 style={{ fontWeight:800,fontSize:20,color:"#0f0f1a",marginBottom:8 }}>Money Added!</h2>
        <p style={{ fontSize:14,color:"#6b7280",marginBottom:24 }}>₹{n.toLocaleString()} added to your wallet successfully.</p>
        <button onClick={onClose} style={{ width:"100%",padding:"13px",background:"linear-gradient(135deg,#6c63ff,#4f46e5)",border:"none",borderRadius:11,color:"#fff",fontWeight:700,fontSize:15,cursor:"pointer",fontFamily:"'Segoe UI',sans-serif" }}>Done</button>
      </div>
    </div>
  );

  return (
    <div style={{ position:"fixed",inset:0,background:"rgba(0,0,0,.45)",zIndex:2000,display:"flex",alignItems:"center",justifyContent:"center" }}>
      <div style={{ background:"#fff",borderRadius:18,padding:"28px 28px",width:380,boxShadow:"0 20px 60px rgba(0,0,0,.2)" }}>
        <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6 }}>
          <h2 style={{ fontWeight:800,fontSize:18,color:"#0f0f1a" }}>Add Money</h2>
          <button onClick={onClose} style={{ background:"#f3f4f6",border:"none",cursor:"pointer",color:"#6b7280",display:"flex",padding:7,borderRadius:9 }}><CloseIcon/></button>
        </div>
        <p style={{ fontSize:13,color:"#9ca3af",marginBottom:20 }}>Funds will be added to your trading wallet instantly</p>

        {/* Amount input */}
        <div style={{ position:"relative",marginBottom:6 }}>
          <span style={{ position:"absolute",left:13,top:"50%",transform:"translateY(-50%)",fontSize:18,fontWeight:700,color:"#6b7280" }}>₹</span>
          <input type="number" value={amt} onChange={e=>setAmt(e.target.value)} placeholder="Enter amount"
            style={{ width:"100%",padding:"13px 14px 13px 32px",fontSize:18,fontWeight:700,background:"#f3f4f6",border:"1.5px solid #e5e7eb",borderRadius:12,outline:"none",fontFamily:"'Segoe UI',sans-serif",boxSizing:"border-box" }}/>
        </div>
        <p style={{ fontSize:12,color:"#9ca3af",marginBottom:16 }}>Minimum: ₹100</p>

        {/* Quick presets */}
        <div style={{ display:"flex",gap:9,marginBottom:24 }}>
          {presets.map(p => (
            <button key={p} onClick={()=>setAmt(String(p))}
              style={{ flex:1,padding:"9px 0",borderRadius:10,border:"1.5px solid "+(amt==String(p)?"#6c63ff":"#e5e7eb"),background:amt==String(p)?"#eef0f9":"#fff",fontWeight:600,fontSize:13,cursor:"pointer",fontFamily:"'Segoe UI',sans-serif",color:amt==String(p)?"#6c63ff":"#1a1a2e",transition:"all .15s" }}>
              ₹{p.toLocaleString()}
            </button>
          ))}
        </div>

        {/* UPI / Bank badge */}
        <div style={{ display:"flex",gap:10,marginBottom:20 }}>
          {["UPI","Net Banking","Debit Card"].map(m => (
            <span key={m} style={{ fontSize:12,background:"#f3f4f6",color:"#6b7280",padding:"5px 11px",borderRadius:20,fontWeight:500 }}>{m}</span>
          ))}
        </div>

        <button onClick={()=>{ if(n>=100) setDone(true); }}
          style={{ width:"100%",padding:"14px",background:n>=100?"linear-gradient(135deg,#6c63ff,#4f46e5)":"#e5e7eb",border:"none",borderRadius:12,color:n>=100?"#fff":"#9ca3af",fontWeight:700,fontSize:15,cursor:n>=100?"pointer":"not-allowed",fontFamily:"'Segoe UI',sans-serif",transition:"all .2s" }}>
          Add ₹{n>0?n.toLocaleString():"—"} to Wallet
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════ PROFILE PAGE ═════════════════ */
export default function ProfilePage({ onBack, userName = " " }) {
  const [photo,   setPhoto]  = useState(null);
  const [name,    setName]   = useState(userName);
  const [nameVal, setNameV]  = useState(userName);
  const [editing, setEditing]= useState(false);
  const [showN,   setShowN]  = useState(false);
  const [showS,   setShowS]  = useState(false);
  const [showAdd, setShowAdd]= useState(false);
  const [addFor,  setAddFor] = useState("");
  const fileRef = useRef();

  function handlePhoto(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => setPhoto(ev.target.result);
    reader.readAsDataURL(file);
  }

  const balanceCards = [
    { label:"Stocks",       value:"₹6,25,000", change:"+₹12,400",  up:true,  icon:<StockIcon/>, color:"#6c63ff" },
    { label:"F&O",          value:"₹1,20,000", change:"-₹3,200",   up:false, icon:<FOIcon/>,    color:"#f59e0b" },
    { label:"Mutual Funds", value:"₹3,80,000", change:"+₹8,750",   up:true,  icon:<ReportIcon/>,color:"#16a34a" },
  ];

  const sections = [
    {
      heading: "Portfolio & Trading",
      items: [
        { icon:<StockIcon/>,   label:"Stocks",             sub:"View holdings & live prices",          color:"#6c63ff", badge:null        },
        { icon:<FOIcon/>,      label:"F&O Balance",        sub:"Futures & Options positions",          color:"#f59e0b", badge:null        },
      ],
    },
    {
      heading: "Account",
      items: [
        { icon:<OrderIcon/>,   label:"Orders",             sub:"All buy & sell order history",         color:"#8b5cf6", badge:"3 Pending" },
        { icon:<AccountIcon/>, label:"Account Details",    sub:"Personal info, KYC & PAN",             color:"#0ea5e9", badge:null        },
        { icon:<BankIcon/>,    label:"Bank & Autopay",     sub:"Manage linked banks & SIP mandates",   color:"#06b6d4", badge:null        },
      ],
    },
    {
      heading: "Help & Rewards",
      items: [
        { icon:<SupportIcon/>, label:"Customer Support",   sub:"24x7 chat, call & email support",      color:"#16a34a", badge:"24x7 🟢"   },
        { icon:<ReportIcon/>,  label:"Reports",            sub:"P&L, tax, transaction statements",     color:"#f59e0b", badge:null        },
        { icon:<ReferIcon/>,   label:"Refer & Invite",     sub:"Invite friends · Earn ₹500 per referral", color:"#ec4899", badge:"🎁 Earn" },
      ],
    },
  ];

  return (
    <div style={{ minHeight:"100vh",background:"#f1f3f8",fontFamily:"'Segoe UI',sans-serif",position:"relative" }}>
      <style>{`
        @keyframes slideIn { from{transform:translateX(100%);opacity:0} to{transform:translateX(0);opacity:1} }
        @keyframes fadeUp  { from{transform:translateY(16px);opacity:0} to{transform:translateY(0);opacity:1} }
      `}</style>

      {/* ── HEADER GRADIENT ── */}
      <div style={{ background:"linear-gradient(145deg,#5b6cf6 0%,#6c63ff 50%,#8b5cf6 100%)",paddingBottom:80,position:"relative" }}>

        {/* Top bar: Back · Title · Notif + Settings */}
        <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 20px 0" }}>
          <button onClick={onBack}
            style={{ display:"flex",alignItems:"center",gap:6,background:"rgba(255,255,255,.18)",border:"none",cursor:"pointer",color:"#fff",padding:"8px 14px",borderRadius:10,fontFamily:"'Segoe UI',sans-serif",fontWeight:600,fontSize:13 }}>
            <BackIcon/> Back
          </button>

          <span style={{ fontSize:16,fontWeight:700,color:"#fff",letterSpacing:0.3 }}>My Profile</span>

          {/* 🔔 + ⚙ */}
          <div style={{ display:"flex",gap:10 }}>
            <button onClick={()=>{setShowN(!showN);setShowS(false);}}
              style={{ position:"relative",width:40,height:40,borderRadius:11,background:"rgba(255,255,255,.2)",border:"none",cursor:"pointer",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center" }}>
              <BellIcon/>
              <span style={{ position:"absolute",top:7,right:7,width:8,height:8,borderRadius:"50%",background:"#f87171",border:"2px solid transparent" }}/>
            </button>
            <button onClick={()=>{setShowS(!showS);setShowN(false);}}
              style={{ width:40,height:40,borderRadius:11,background:"rgba(255,255,255,.2)",border:"none",cursor:"pointer",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center" }}>
              <GearIcon/>
            </button>
          </div>
        </div>

        {/* ── PROFILE PHOTO + NAME — centered ── */}
        <div style={{ display:"flex",flexDirection:"column",alignItems:"center",marginTop:24,animation:"fadeUp .3s ease" }}>
          {/* Avatar circle */}
          <div style={{ position:"relative",marginBottom:14 }}>
            <div style={{ width:100,height:100,borderRadius:"50%",border:"3.5px solid rgba(255,255,255,.65)",overflow:"hidden",background:"rgba(255,255,255,.22)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 24px rgba(0,0,0,.18)" }}>
              {photo
                ? <img src={photo} alt="profile" style={{ width:"100%",height:"100%",objectFit:"cover" }}/>
                : <span style={{ fontSize:38,fontWeight:900,color:"#fff",lineHeight:1 }}>{name.charAt(0).toUpperCase()}</span>
              }
            </div>
            {/* Camera button */}
            <button onClick={()=>fileRef.current.click()}
              style={{ position:"absolute",bottom:2,right:2,width:30,height:30,borderRadius:"50%",background:"#fff",border:"2.5px solid #6c63ff",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"#6c63ff",boxShadow:"0 2px 8px rgba(0,0,0,.15)" }}>
              <CameraIcon/>
            </button>
            <input ref={fileRef} type="file" accept="image/*" onChange={handlePhoto} style={{ display:"none" }}/>
          </div>

          {/* Editable name */}
          {editing ? (
            <div style={{ display:"flex",alignItems:"center",gap:8 }}>
              <input value={nameVal} onChange={e=>setNameV(e.target.value)}
                style={{ fontSize:19,fontWeight:700,color:"#0f0f1a",padding:"7px 13px",borderRadius:9,border:"none",outline:"none",fontFamily:"'Segoe UI',sans-serif",textAlign:"center",minWidth:180 }}/>
              <button onClick={()=>{setName(nameVal);setEditing(false);}}
                style={{ background:"rgba(255,255,255,.9)",border:"none",borderRadius:8,padding:"7px 16px",fontWeight:700,fontSize:13,cursor:"pointer",color:"#6c63ff",fontFamily:"'Segoe UI',sans-serif" }}>Save</button>
              <button onClick={()=>setEditing(false)}
                style={{ background:"rgba(255,255,255,.2)",border:"none",borderRadius:8,padding:"7px 10px",cursor:"pointer",color:"#fff",display:"flex" }}><CloseIcon/></button>
            </div>
          ) : (
            <div style={{ display:"flex",alignItems:"center",gap:8 }}>
              <h1 style={{ fontSize:22,fontWeight:800,color:"#fff",margin:0,letterSpacing:0.3 }}>{name}</h1>
              <button onClick={()=>{setNameV(name);setEditing(true);}}
                style={{ background:"rgba(255,255,255,.22)",border:"none",cursor:"pointer",color:"#fff",display:"flex",padding:7,borderRadius:8 }}>
                <EditIcon/>
              </button>
            </div>
          )}

          <div style={{ display:"flex",alignItems:"center",gap:6,marginTop:6 }}>
            <span style={{ fontSize:13,color:"rgba(255,255,255,.78)" }}>Investor</span>
            <span style={{ fontSize:12,background:"rgba(255,255,255,.22)",color:"#fff",padding:"2px 10px",borderRadius:20,fontWeight:600,display:"flex",alignItems:"center",gap:4 }}>
              <CheckIcon/> KYC Verified
            </span>
          </div>
        </div>
      </div>

      {/* ── BALANCE CARDS (overlapping header) ── */}
      <div style={{ padding:"0 16px",marginTop:-52,position:"relative",zIndex:10 }}>
        <div style={{ background:"#fff",borderRadius:18,padding:"20px",boxShadow:"0 6px 28px rgba(0,0,0,.1)",marginBottom:16 }}>
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16 }}>
            <h3 style={{ fontWeight:700,fontSize:15,color:"#0f0f1a" }}>Portfolio Balance</h3>
            <button onClick={()=>setShowAdd(true)}
              style={{ display:"flex",alignItems:"center",gap:6,background:"linear-gradient(135deg,#6c63ff,#4f46e5)",border:"none",borderRadius:10,padding:"8px 16px",color:"#fff",fontWeight:700,fontSize:13,cursor:"pointer",fontFamily:"'Segoe UI',sans-serif",boxShadow:"0 3px 10px rgba(108,99,255,.3)" }}>
              <PlusIcon/> Add Money
            </button>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12 }}>
            {balanceCards.map(b => (
              <div key={b.label} style={{ background:b.color+"0e",border:"1.5px solid "+b.color+"28",borderRadius:13,padding:"14px 12px",cursor:"pointer",transition:"transform .2s" }}
                onMouseEnter={e=>e.currentTarget.style.transform="translateY(-2px)"}
                onMouseLeave={e=>e.currentTarget.style.transform="translateY(0)"}>
                <div style={{ color:b.color,marginBottom:8 }}>{b.icon}</div>
                <p style={{ fontSize:10,color:"#9ca3af",marginBottom:4,fontWeight:500 }}>{b.label}</p>
                <p style={{ fontWeight:800,fontSize:14,color:"#0f0f1a",marginBottom:3 }}>{b.value}</p>
                <p style={{ fontSize:11,fontWeight:600,color:b.up?"#16a34a":"#ef4444" }}>
                  {b.up?"↗":"↘"} {b.change} today
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MENU SECTIONS ── */}
      <div style={{ padding:"0 16px",display:"flex",flexDirection:"column",gap:14,paddingBottom:36 }}>
        {sections.map(sec => (
          <div key={sec.heading} style={{ background:"#fff",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,.06)" }}>
            <p style={{ fontSize:11,fontWeight:700,color:"#9ca3af",padding:"14px 18px 6px",letterSpacing:"0.6px",textTransform:"uppercase" }}>
              {sec.heading}
            </p>
            {sec.items.map((item,i) => (
              <div key={item.label}
                style={{ display:"flex",alignItems:"center",padding:"14px 18px",borderTop:i>0?"1px solid #f5f6fa":"none",cursor:"pointer",transition:"background .15s" }}
                onMouseEnter={e=>e.currentTarget.style.background="#fafbff"}
                onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                {/* Icon pill */}
                <div style={{ width:44,height:44,borderRadius:13,background:item.color+"15",display:"flex",alignItems:"center",justifyContent:"center",color:item.color,marginRight:14,flexShrink:0 }}>
                  {item.icon}
                </div>
                {/* Text */}
                <div style={{ flex:1 }}>
                  <p style={{ fontWeight:700,fontSize:14,color:"#0f0f1a",marginBottom:2 }}>{item.label}</p>
                  <p style={{ fontSize:12,color:"#9ca3af" }}>{item.sub}</p>
                </div>
                {/* Badge + chevron */}
                <div style={{ display:"flex",alignItems:"center",gap:8 }}>
                  {item.badge && (
                    <span style={{ background:item.color+"15",color:item.color,fontWeight:700,fontSize:11,padding:"3px 10px",borderRadius:20,whiteSpace:"nowrap" }}>
                      {item.badge}
                    </span>
                  )}
                  <ChevR/>
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* ── SIGN OUT ── */}
        <button style={{ width:"100%",padding:"15px",background:"#fff",border:"1.5px solid #fee2e2",borderRadius:14,color:"#ef4444",fontWeight:700,fontSize:15,cursor:"pointer",fontFamily:"'Segoe UI',sans-serif",transition:"background .15s",boxShadow:"0 2px 8px rgba(0,0,0,.05)" }}
          onMouseEnter={e=>e.currentTarget.style.background="#fff5f5"}
          onMouseLeave={e=>e.currentTarget.style.background="#fff"}>
          Sign Out
        </button>
      </div>

      {/* ── OVERLAY for panels ── */}
      {(showN||showS) && (
        <div onClick={()=>{setShowN(false);setShowS(false);}} style={{ position:"fixed",inset:0,background:"rgba(0,0,0,.35)",zIndex:999 }}/>
      )}
      {showN && <NotifPanel   onClose={()=>setShowN(false)}/>}
      {showS && <SettingsPanel onClose={()=>setShowS(false)}/>}
      {showAdd && <AddMoneyModal onClose={()=>setShowAdd(false)}/>}
    </div>
  );
}