import { useState } from "react";
import "./ResumoPage.css";

function ResumoPage() {
  const [texto, setTexto] = useState("");
  const [resumoGerado, setResumoGerado] = useState("");
  const [erro, setErro] = useState("");

  async function handleGerarResumo() {
    setErro("");
    setResumoGerado("");

    try {
      const resposta = await fetch("http://localhost:3000/api/resumo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ texto }),
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        setErro(dados.error || "Erro ao gerar resumo.");
        return;
      }

      setResumoGerado(dados.resumo);
    } catch {
      setErro("Não foi possível conectar ao backend.");
    }
  }

  return (
    <div className="resumo-container">
      <div className="resumo-content">
        <h1 className="resumo-title">Gerar Resumo com IA</h1>

        <p className="resumo-description">
          Cole abaixo o conteúdo que você deseja resumir.
        </p>

        <textarea
          className="resumo-textarea"
          placeholder="Cole aqui o texto que será resumido..."
          value={texto}
          onChange={(event) => setTexto(event.target.value)}
        ></textarea>

        <button className="resumo-button" onClick={handleGerarResumo}>
          Gerar resumo
        </button>

        {erro && <p className="resumo-erro">{erro}</p>}

        {resumoGerado && (
          <div className="resumo-resultado">
            <h2>Resumo gerado</h2>
            <p>{resumoGerado}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResumoPage;
