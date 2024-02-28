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
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-3">
          <input
            type="number"
            className="form-control"
            value={num1}
            onChange={(e) => setNum1(parseFloat(e.target.value))}
          />
        </div>
        <div className="col-sm-3">
          <input
            type="number"
            className="form-control"
            value={num2}
            onChange={(e) => setNum2(parseFloat(e.target.value))}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-3">
          <button className="btn btn-primary mx-2" onClick={operacionSuma}>
            +
          </button>
          <button className="btn btn-primary mx-2" onClick={operacionResta}>
            -
          </button>
          <button
            className="btn btn-primary mx-2"
            onClick={operacionMultiplicar}
          >
            *
          </button>
          <button className="btn btn-primary mx-2" onClick={operacionDividir}>
            /
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-3">
          <p className="text-primary">Resultado: {resultado}</p>
        </div>
      </div>
    </div>
  );
}

export default Calculadora;
