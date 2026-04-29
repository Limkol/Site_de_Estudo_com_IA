import { StrictMode } from "react";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import ResumoPage from "./pages/ResumoPage.jsx";
import PlanoPage from "./pages/PlanoPage.jsx";
import QuestoesPage from "./pages/QuestoesPage.jsx";
import HistoricoPage from "./pages/HistoricoPage.jsx";

function AppRoutes() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  useEffect(() => {
    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "escuro") {
      setTemaEscuro(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tema", temaEscuro ? "escuro" : "claro");

    if (temaEscuro) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [temaEscuro]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <App temaEscuro={temaEscuro} setTemaEscuro={setTemaEscuro} />
          }
        />
        <Route path="/resumo" element={<ResumoPage />} />
        <Route path="/plano-estudo" element={<PlanoPage />} />
        <Route path="/questoes" element={<QuestoesPage />} />
        <Route path="/historico" element={<HistoricoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
);
