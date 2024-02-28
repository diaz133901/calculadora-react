import "./Calculadora.css";
import React, { useState } from "react";

function Calculadora() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const operacionSuma = () => {
    setResultado(num1 + num2);
  };

  const operacionResta = () => {
    setResultado(num1 - num2);
  };

  const operacionMultiplicar = () => {
    setResultado(num1 * num2);
  };

  const operacionDividir = () => {
    if (num2 !== 0) {
      setResultado(num1 / num2);
    } else {
      alert("No se puede dividir por cero.");
    }
  };

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(parseFloat(e.target.value))}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(parseFloat(e.target.value))}
      />
      <br />
      <button onClick={operacionSuma}>+</button>
      <button onClick={operacionResta}>-</button>
      <button onClick={operacionMultiplicar}>*</button>
      <button onClick={operacionDividir}>/</button>
      <br />
      <p>Resultado: {resultado}</p>
    </div>
  );
}

export default Calculadora;
