import Titulo from "./components/Titulo/Titulo";

function App() {
  return (
    <div className="App">
      {/* Al componente child "Titulo" le enviamos 2 props: nombre y valorInicial */}
      <Titulo nombre="Franco" valorInicial={2}/>
    </div>
  );
}

export default App;
