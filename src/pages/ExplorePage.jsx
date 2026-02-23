import { useState } from "react";
import { FUNDS } from "../data";
import FundCard from "../components/FundCard";
import { SearchI } from "../icons";

export default function ExplorePage({ onFundClick, watchlist, toggleWatch }) {
  const [query,  setQuery]  = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = FUNDS.filter(f =>
    (filter === "All" || f.risk === filter) &&
    f.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding:"26px 4%", maxWidth:1400, margin:"0 auto" }}>
      <h1 style={{ fontSize:24, fontWeight:800, color:"#0f0f1a", marginBottom:4 }}>
        Explore Mutual Funds
      </h1>
      <p style={{ fontSize:13, color:"#9ca3af", marginBottom:22 }}>
        Discover and compare funds across categories
      </p>

      {/* Search + Filter row */}
      <div style={{ display:"flex", gap:10, marginBottom:26, flexWrap:"wrap" }}>
        <div style={{ display:"flex", alignItems:"center", background:"#fff", border:"1.5px solid #e5e7eb", borderRadius:11, padding:"10px 14px", gap:8, flex:1, minWidth:220 }}>
          <SearchI />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search funds by name..."
            style={{ background:"none", border:"none", outline:"none", fontSize:14, width:"100%", fontFamily:"'Segoe UI',sans-serif", color:"#1a1a2e" }}
          />
        </div>
        {["All","Low","Medium","High"].map(r => (
          <button key={r} onClick={() => setFilter(r)}
            style={{
              padding:"10px 22px", borderRadius:11,
              border:"1.5px solid " + (filter===r ? "#6c63ff" : "#e5e7eb"),
              fontWeight:600, fontSize:14, cursor:"pointer",
              fontFamily:"'Segoe UI',sans-serif",
              background: filter===r ? "#6c63ff" : "#fff",
              color: filter===r ? "#fff" : "#1a1a2e",
              transition:"all .15s",
            }}>
            {r}
          </button>
        ))}
      </div>

      {/* Fund Cards Grid */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))", gap:18 }}>
        {filtered.map(fund => (
          <FundCard
            key={fund.id}
            fund={fund}
            onSelect={onFundClick}
            watchlist={watchlist}
            toggleWatch={toggleWatch}
          />
        ))}
      </div>
    </div>
  );
}