import { useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import ExplorePage    from "./ExplorePage";
import PortfolioPage  from "./PortfolioPage";
import WatchlistPage  from "./WatchlistPage";
import FundDetailPage from "./FundDetailPage";
import PaymentPage    from "./PaymentPage";
import SuccessPage    from "./SuccessPage";
import ProfilePage    from "./Profilepage";

export default function DashboardPage({ onSignOut }) {
  const [tab,      setTab]      = useState("Explore");
  const [watchlist,setWatchlist]= useState([1]);
  const [invested, setInvested] = useState([]);
  const [view,     setView]     = useState("list");      // list | detail | pay | success | profile
  const [selFund,  setSelFund]  = useState(null);
  const [selMode,  setSelMode]  = useState(null);
  const [lastSucc, setLastSucc] = useState(null);

  const toggleWatch = id =>
    setWatchlist(w => w.includes(id) ? w.filter(x => x !== id) : [...w, id]);

  const openFund = fund => { setSelFund(fund); setView("detail"); };
  const openPay  = (fund, mode) => { setSelFund(fund); setSelMode(mode); setView("pay"); };
  const reset    = () => { setView("list"); setSelFund(null); setSelMode(null); };

  function handleSuccess(entry, data) {
    setInvested(prev => [...prev, entry]);
    setLastSucc(data);
    setView("success");
  }

  function afterSuccess(targetTab) {
    setTab(targetTab);
    reset();
  }

  return (
    <div style={{ minHeight:"100vh", background:"#f3f4f6", fontFamily:"'Segoe UI',sans-serif" }}>

      {/* Hide navbar when profile is open */}
      {view !== "profile" && (
        <DashboardNavbar
          tab={tab}
          setTab={t => { setTab(t); reset(); }}
          onSignOut={onSignOut}
          onProfile={() => setView("profile")}
        />
      )}

      {view === "profile"  && <ProfilePage onBack={reset} />}
      {view === "detail"   && <FundDetailPage fund={selFund} onBack={reset} onInvest={openPay} />}
      {view === "pay"      && <PaymentPage fund={selFund} mode={selMode} onBack={() => setView("detail")} onSuccess={handleSuccess} />}
      {view === "success"  && lastSucc && <SuccessPage data={lastSucc} onDone={afterSuccess} />}

      {view === "list" && tab === "Explore"   && <ExplorePage   onFundClick={openFund} watchlist={watchlist} toggleWatch={toggleWatch} />}
      {view === "list" && tab === "Portfolio" && <PortfolioPage invested={invested} onFundClick={openFund} />}
      {view === "list" && tab === "Watchlist" && <WatchlistPage watchlist={watchlist} toggleWatch={toggleWatch} onFundClick={openFund} />}
    </div>
  );
}