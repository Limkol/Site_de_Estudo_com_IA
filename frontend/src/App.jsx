import { Link } from "react-router-dom";
import "./App.css";

function App({ temaEscuro, setTemaEscuro }) {
  return (
    <div className={`home-container ${temaEscuro ? "dark-mode" : ""}`}>
      <main className="home-content">
        <h1 className="project-title">Site de Estudos com IA</h1>

        <p className="project-description">
          Uma plataforma para auxiliar nos estudos com o apoio de Inteligência
          Artificial, permitindo gerar resumos, criar planos de estudo e montar
          questões de revisão de forma prática e rápida.
        </p>

        <div className="buttons-container">
          <Link to="/resumo" className="home-button-link">
            <button className="home-button">Gerar resumo</button>
          </Link>

          <Link to="/plano-estudo" className="home-button-link">
            <button className="home-button">Criar plano de estudo</button>
          </Link>

          <Link to="/questoes" className="home-button-link">
            <button className="home-button">Gerar questões</button>
          </Link>

          <Link to="/historico" className="home-button-link">
            <button className="home-button">Ver histórico</button>
          </Link>
        </div>

        <div className="theme-toggle-container">
          <button
            className="theme-toggle-button"
            onClick={() => setTemaEscuro(!temaEscuro)}
          >
            {temaEscuro ? "☀️ Modo claro" : "🌙 Modo escuro"}
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
