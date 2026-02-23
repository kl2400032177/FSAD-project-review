import { FUNDS } from "../data";
import FundCard from "../components/FundCard";

export default function WatchlistPage({ watchlist, toggleWatch, onFundClick }) {
  const funds = FUNDS.filter(f => watchlist.includes(f.id));

  return (
    <div style={{ padding:"26px 4%", maxWidth:1400, margin:"0 auto" }}>
      <h1 style={{ fontSize:24, fontWeight:800, color:"#0f0f1a", marginBottom:4 }}>Watchlist</h1>
      <p style={{ fontSize:13, color:"#9ca3af", marginBottom:22 }}>Funds you're tracking</p>

      {funds.length === 0 ? (
        <div style={{ marginTop:80, textAlign:"center" }}>
          <p style={{ fontSize:50 }}>⭐</p>
          <p style={{ fontSize:18, fontWeight:600, color:"#1a1a2e", marginTop:16 }}>No funds in watchlist</p>
          <p style={{ fontSize:14, color:"#9ca3af", marginTop:8 }}>Click the ☆ on any fund card to add it here</p>
        </div>
      ) : (
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))", gap:18 }}>
          {funds.map(fund => (
            <FundCard
              key={fund.id}
              fund={fund}
              onSelect={onFundClick}
              watchlist={watchlist}
              toggleWatch={toggleWatch}
            />
          ))}
        </div>
      )}
    </div>
  );
}