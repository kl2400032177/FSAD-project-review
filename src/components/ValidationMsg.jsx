import { AlertI, CheckI } from "../icons";

export default function ValidationMsg({ msg, ok, show }) {
  if (!show || !msg) return null;
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 7,
      marginTop: 7, padding: "8px 12px",
      background: ok ? "#f0fdf4" : "#fef2f2",
      border: `1.5px solid ${ok ? "#86efac" : "#fca5a5"}`,
      borderRadius: 8, fontSize: 12, fontWeight: 500,
      color: ok ? "#15803d" : "#dc2626",
      animation: "fadeIn .18s ease",
    }}>
      <span style={{ flexShrink: 0 }}>{ok ? <CheckI /> : <AlertI />}</span>
      {msg}
    </div>
  );
}