import "./Calculadora.css";

function Calculadora(props) {
  console.log(props);
  const numero1 = parseFloat(props.calculo.numero1);
  const numero2 = parseFloat(props.calculo.numero2);
  const signo = props.calculo.operacion;
  let resultado;

  // Realiza la operación correspondiente
  switch (signo) {
    case "+":
      resultado = numero1 + numero2;
      break;
    case "-":
      resultado = numero1 - numero2;
      break;
    case "*":
      resultado = numero1 * numero2;
      break;
    case "/":
      resultado = numero1 / numero2;
      break;
    default:
      resultado = "Operación no válida";
  }

  return (
    <div>
      <p>Resultado: {resultado}</p>
    </div>
  );
}

export default Calculadora;
