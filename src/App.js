import Calculadora from "./Components/Calculadora";

function App() {
  const propiedades = {
    operacion: "-",
    numero1: 3,
    numero2: 4,
  };
  return (
    <div>
      <Calculadora calculo={propiedades} />
    </div>
  );
}

export default App;
