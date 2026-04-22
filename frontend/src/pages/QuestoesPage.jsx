import "./QuestoesPage.css";

function QuestoesPage() {
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
        />

        <textarea
          className="questoes-textarea"
          placeholder="Cole aqui o conteúdo para gerar as questões..."
        ></textarea>

        <button className="questoes-button">Gerar questões</button>
      </div>
    </div>
  );
}

export default QuestoesPage;
