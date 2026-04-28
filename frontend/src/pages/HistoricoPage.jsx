import { useEffect, useState } from "react";
import "./HistoricoPage.css";

function HistoricoPage() {
  const [historico, setHistorico] = useState([]);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregarHistorico() {
      try {
        const response = await fetch("http://localhost:3000/api/historico");

        if (!response.ok) {
          throw new Error("Erro ao buscar histórico");
        }

        const data = await response.json();
        setHistorico(data.historico);
      } catch (error) {
        setErro("Não foi possível carregar o histórico.");
      }
    }

    carregarHistorico();
  }, []);

  return (
    <div className="historico-container">
      <div className="historico-content">
        <h1 className="historico-title">Histórico</h1>

        <p className="historico-description">
          Veja aqui os conteúdos gerados anteriormente com IA.
        </p>

        {erro && <p className="historico-erro">{erro}</p>}

        {historico.length === 0 && !erro && (
          <p className="historico-vazio">Nenhum histórico encontrado.</p>
        )}

        {historico.length > 0 && (
          <div className="historico-lista">
            {historico.map((item) => (
              <div className="historico-item" key={item.id}>
                <h2>{item.tipo}</h2>
                <p className="historico-data">{item.criado_em}</p>

                <h3>Texto original</h3>
                <p>{item.texto_original}</p>

                <h3>Resposta da IA</h3>
                <p>{item.resposta_ia}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HistoricoPage;
