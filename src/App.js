﻿import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
/* DISCENTES
   ULISSES ASSUNÇÃO
   PATRESE MONTEIRO
   NAYAN SOUZA*/
function App() {
  const [values, setValues] = React.useState({
    value: "",
    automato: null,
    error: false,
    oldAut: null,
    valid: false
  });
  const Q1 = value => {
    let automato = null;
    let valid = false;
    if (value === "V") {
      automato = "Q1";
    } else if (value === "A") {
      automato = "Q2";
    } else if (value === "R") {
      automato = "Q3";
    } else if (value === "_") {
      automato = "Q2";
    } else {
    }
    return { automato, valid };
  };
  const Q2 = value => {
    let automato = null;
    let valid = false;
    if (value === "A" || value === "B") {
      automato = "Q2";
    } else if (value === "0" || value === "1") {
      valid = true;
      automato = "Q3";
    } else {
    }
    return { automato, valid };
  };
  const handleValue = event => {
    const { value } = event.target;
    let autToCompare = values.automato;
    let valueToUse = value;
    if (value.length < values.value.length) {
      autToCompare = values.oldAut;
      valueToUse = values.value.slice(0, values.value.length - 1);
    }
    const trueValue = valueToUse.slice(
      valueToUse.length - 1,
      valueToUse.length
    );

    let automato = null;

    let valid = false;
    if (autToCompare === null || autToCompare === "Q1") {
      const retorno = Q1(trueValue);
      automato = retorno.automato;
      valid = retorno.valid;
    } else if (autToCompare === "Q2") {
      const retorno = Q2(trueValue);
      automato = retorno.automato;
      valid = retorno.valid;
    } else if (autToCompare === "Q3") {
      console.log("erro Q3");
      automato = "Q3";
    }

    setValues({ ...values, value, automato, valid, oldAut: values.automato });
  };
  return (
    <div className="App">
      <header className="App-header">
        <TextField
          id="outlined-name"
          label="String"
          value={values.value}
          onChange={event => handleValue(event)}
          margin="normal"
          variant="outlined"
        />
        <Button
          variant="contained"
          onClick={() =>
            setValues({
              ...values,
              value: "",
              automato: null,
              valid: values.valid
            })
          }
        >
          LIMPAR
        </Button>
        A string é: {values.valid ? "Válida" : "Inválida"}
      </header>
    </div>
  );
}

export default App;
