import CartaoStatus from './components/CartaoStatus'
import './App.css'

function App() {

  const itens = [
    {
      titulo: "Open Telemetry",
      textoStatus: "Sucesso",
      status: "sucesso",
      tempo: "20s"
    },
    {
      titulo: "Testes",
      textoStatus: "Não Executado",
      status: "neutro",
      tempo: "1s",
      iconeExtra: true
    },
    {
      titulo: "Build",
      textoStatus: "Falha",
      status: "erro",
      tempo: "5min"
    }
  ]

  return (
    <div className="container">
      {itens.map((item, index) => (
        <CartaoStatus
          key={index}
          titulo={item.titulo}
          textoStatus={item.textoStatus}
          status={item.status}
          tempo={item.tempo}
          mostrarIcone={item.iconeExtra}
        />
      ))}
    </div>
  )
}

export default App