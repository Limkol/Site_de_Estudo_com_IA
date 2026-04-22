import "./ResumoPage.css";

function ResumoPage() {
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
        ></textarea>

        <button className="resumo-button">Gerar resumo</button>
      </div>
    </div>
  );
}

export default ResumoPage;
