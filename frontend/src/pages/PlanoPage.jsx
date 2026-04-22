import './PlanoPage.css'

function PlanoPage() {
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
          />

          <input
            type="number"
            className="plano-input"
            placeholder="Quantidade de dias para estudar"
            min="1"
          />

          <textarea
            className="plano-textarea"
            placeholder="Descreva seu objetivo de estudo..."
          ></textarea>

          <button className="plano-button">Criar plano de estudo</button>
        </div>
      </div>
    </div>
  )
}

export default PlanoPage