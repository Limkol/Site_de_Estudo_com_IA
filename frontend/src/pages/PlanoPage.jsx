import { useState } from "react";
import "./PlanoPage.css";

function PlanoPage() {
  const [tema, setTema] = useState("");
  const [dias, setDias] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [planoGerado, setPlanoGerado] = useState("");
  const [erro, setErro] = useState("");

  async function handleCriarPlano() {
    setErro("");
    setPlanoGerado("");

    try {
      const resposta = await fetch("http://localhost:3000/api/plano-estudo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tema, dias, objetivo }),
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        setErro(dados.error || "Erro ao criar plano de estudo.");
        return;
      }

      setPlanoGerado(dados.plano);
    } catch {
      setErro("Não foi possível conectar ao backend.");
    }
  }

  return (
    <div className="plano-container">
      <div className="plano-content">
        <h1 className="plano-title">Criar Plano de Estudo</h1>

        <p className="plano-description">
          Informe os dados abaixo para montar um plano de estudo.
        </p>

        <div className="plano-form">
          <input
            type="text"
            className="plano-input"
            placeholder="Digite a matéria ou tema"
            value={tema}
            onChange={(event) => setTema(event.target.value)}
          />

          <input
            type="number"
            className="plano-input"
            placeholder="Quantidade de dias para estudar"
            min="1"
            value={dias}
            onChange={(event) => setDias(event.target.value)}
          />

          <textarea
            className="plano-textarea"
            placeholder="Descreva seu objetivo de estudo..."
            value={objetivo}
            onChange={(event) => setObjetivo(event.target.value)}
          ></textarea>

          <button className="plano-button" onClick={handleCriarPlano}>
            Criar plano de estudo
          </button>

          {erro && <p className="plano-erro">{erro}</p>}

          {planoGerado && (
            <div className="plano-resultado">
              <h2>Plano gerado</h2>
              <p>{planoGerado}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PlanoPage;
