import React from "react";
import "./css/App.css";
const App = () => {
  const [bin, setBin] = React.useState("");
  const [dec, setDec] = React.useState(null);

  
  function getNumber({target}) {
    const regex = /^[0-1]+$/;
    if (regex.test(bin)) {
      let total = bin.length;
      let soma = 0;
      for (let i = 0; i < bin.length; i++) {
        total--;
        soma = soma + bin[total] * Math.pow(2, i);
      }
      target.value = soma
      setDec(soma);
    }
  }

  return (
    <div className="container">
      <h1>Binário para decimal</h1>
      <p>entre com um binario e obtenha um decimal</p>
      {dec && <p>{dec}</p>}
      <input
        type="text"
        value={bin}
        onChange={({ target }) => setBin(target.value)}
      />
      <button onClick={getNumber} >Converter</button>
      
    </div>
  );
};

export default App;
