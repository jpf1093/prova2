import IconeStatus from './IconeStatus'
import IconeExtra from './IconeExtra'

function CartaoStatus({ titulo, textoStatus, status, tempo, mostrarIcone }) {
  return (
    <div className="cartao">
      <div className="esquerda">
        <IconeStatus status={status} />

        <h2>{titulo}</h2>

        <span className="status">
          {textoStatus}
          {mostrarIcone && <IconeExtra />}
        </span>
      </div>

      <div className="direita">
        <span>{tempo}</span>
      </div>
    </div>
  )
}

export default CartaoStatus