import Calculadora from "./Components/Calculadora";

function App() {
  const propiedades = {
    operacion: "+",
    numero1: 1,
    numero2: 2,
  };
  return (
    <div>
      <Calculadora calculo={propiedades} />
    </div>
  );
}

export default App;
