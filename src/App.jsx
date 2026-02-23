import { useState } from "react";
import HomePage      from "./pages/HomePage";
import SignInPage    from "./pages/SignInPage";
import SignUpPage    from "./pages/SignUpPage";
import DashboardPage from "./pages/DashboardPage";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Segoe UI', sans-serif; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes prog {
          from { width: 0; }
          to   { width: 100%; }
        }
      `}</style>

      {page === "home"      && <HomePage      goto={setPage} />}
      {page === "signin"    && <SignInPage     goto={setPage} />}
      {page === "signup"    && <SignUpPage     goto={setPage} />}
      {page === "dashboard" && <DashboardPage  onSignOut={() => setPage("home")} />}
    </>
  );
}