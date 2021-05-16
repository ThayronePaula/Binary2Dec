import React from "react";
import "./css/App.css";
const App = () => {
  const [bin, setBin] = React.useState("");
  const [dec, setDec] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const regex = /^[0-1]+$/;

    if (!bin || bin === "") {
      setDec(null);
      return;
    }

    if (!regex.test(bin)) {
      setError("Esperando um número binário válido...");
      setDec(null);
    } else {
      setError(null);
    }

    if (regex.test(bin)) {
      let total = bin.length;
      let soma = 0;
      for (let i = 0; i < bin.length; i++) {
        total--;
        soma = soma + bin[total] * Math.pow(2, i);
      }
      setDec(soma);
    }
  }, [bin]);

  return (
    <div className="container">
      <div className="content">
        <h1>Binário para decimal</h1>
        {bin && !error ? (
          <p style={{ color: "#00ff00" }}>Aqui está seu número em decimal</p>
        ) : (
          <p>Digite um número Binário!</p>
        )}
        {bin && <h2>{dec}</h2>}
        <input
          minLength="1"
          maxLength="20"
          type="text"
          value={bin}
          onChange={({ target }) => setBin(target.value)}
        />
        {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
      </div>
    </div>
  );
};

export default App;
