export const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
export const ALLOC_COLORS = ["#6c63ff","#8b5cf6","#22c55e","#f59e0b","#ec4899"];

export const FUNDS = [
  {
    id: 1, cat: "Large Cap", name: "Bluechip Large Cap Fund", mgr: "by Rajesh Sharma",
    nav: 58.32, r1y: 18.5, risk: "Low", rc: "#16a34a", rb: "#dcfce7",
    aum: "₹25.0K Cr", exp: 1.05, min: 500,
    desc: "A diversified large-cap fund investing in India's top 100 companies. Stable long-term growth with lower volatility.",
    graph: [100,102,101,104,106,105,108,110,109,112,115,118],
    alloc: [{ l:"Equity",v:95 },{ l:"Debt",v:3 },{ l:"Cash",v:2 }],
  },
  {
    id: 2, cat: "Mid Cap", name: "Growth Mid Cap Fund", mgr: "by Priya Nair",
    nav: 42.15, r1y: 24.3, risk: "Medium", rc: "#d97706", rb: "#fef3c7",
    aum: "₹12.0K Cr", exp: 1.45, min: 1000,
    desc: "High-growth mid-cap fund targeting emerging businesses. Suitable for moderate to high risk appetite.",
    graph: [100,103,102,106,109,108,113,117,115,120,126,124],
    alloc: [{ l:"Equity",v:97 },{ l:"Cash",v:3 }],
  },
  {
    id: 3, cat: "Small Cap", name: "Emerging Small Cap Fund", mgr: "by Ankit Verma",
    nav: 35.78, r1y: 32.1, risk: "High", rc: "#dc2626", rb: "#fee2e2",
    aum: "₹5.0K Cr", exp: 1.85, min: 500,
    desc: "Aggressive small-cap fund capturing high-growth opportunities. High potential returns with high volatility.",
    graph: [100,98,103,108,105,112,118,114,122,130,128,132],
    alloc: [{ l:"Equity",v:98 },{ l:"Cash",v:2 }],
  },
  {
    id: 4, cat: "Index Fund", name: "Nifty 50 Index Fund", mgr: "by Passive Management",
    nav: 185.42, r1y: 15.2, risk: "Low", rc: "#16a34a", rb: "#dcfce7",
    aum: "₹45.0K Cr", exp: 0.2, min: 100,
    desc: "Passive fund tracking Nifty 50. Low cost, tax-efficient exposure to India's top 50 companies.",
    graph: [100,101,103,102,105,107,106,109,111,110,113,115],
    alloc: [{ l:"Equity",v:99 },{ l:"Cash",v:1 }],
  },
  {
    id: 5, cat: "Hybrid", name: "Balanced Hybrid Fund", mgr: "by Deepa Kulkarni",
    nav: 72.65, r1y: 12.8, risk: "Low", rc: "#16a34a", rb: "#dcfce7",
    aum: "₹18.0K Cr", exp: 1.15, min: 500,
    desc: "Balanced equity-debt fund for stable returns with lower volatility. Ideal for conservative investors.",
    graph: [100,101,102,103,104,105,106,107,108,109,110,112],
    alloc: [{ l:"Equity",v:60 },{ l:"Debt",v:35 },{ l:"Cash",v:5 }],
  },
];