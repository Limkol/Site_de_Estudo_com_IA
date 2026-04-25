import { useState } from "react";
import "./QuestoesPage.css";

function QuestoesPage() {
  const [texto, setTexto] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [questoesGeradas, setQuestoesGeradas] = useState([]);
  const [erro, setErro] = useState("");

  async function handleGerarQuestoes() {
    setErro("");
    setQuestoesGeradas([]);

    try {
      const resposta = await fetch("http://localhost:3000/api/questoes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ texto, quantidade }),
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        setErro(dados.error || "Erro ao gerar questões.");
        return;
      }

      setQuestoesGeradas(dados.questoes);
    } catch {
      setErro("Não foi possível conectar ao backend.");
    }
  }

  return (
    <div className="questoes-container">
      <div className="questoes-content">
        <h1 className="questoes-title">Gerar Questões de Estudo</h1>

        <p className="questoes-description">
          Cole abaixo o conteúdo que será usado para gerar questões de estudo.
        </p>

        <input
          type="number"
          className="questoes-input"
          placeholder="Quantidade de questões (1 a 5)"
          min="1"
          max="5"
          value={quantidade}
          onChange={(event) => setQuantidade(event.target.value)}
        />

        <textarea
          className="questoes-textarea"
          placeholder="Cole aqui o conteúdo para gerar as questões..."
          value={texto}
          onChange={(event) => setTexto(event.target.value)}
        ></textarea>

        <button className="questoes-button" onClick={handleGerarQuestoes}>
          Gerar questões
        </button>

        {erro && <p className="questoes-erro">{erro}</p>}

        {questoesGeradas.length > 0 && (
          <div className="questoes-resultado">
            <h2>Questões geradas</h2>

            <ol>
              {questoesGeradas.map((questao, index) => (
                <li key={index}>{questao}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestoesPage;
