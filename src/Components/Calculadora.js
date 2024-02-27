import "./Calculadora.css";

function Calculadora(props) {
  console.log(props);
  const numero1 = props.calculo.numero1;
  const numero2 = props.calculo.numero2;
  const resultado = numero1 + numero2;

  return (
    <div>
      <p>Resultado: {resultado}</p>
    </div>
  );
}

export default Calculadora;
