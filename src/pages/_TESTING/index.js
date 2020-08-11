// Autocomplete
// https://www.youtube.com/watch?v=vXO5JMiKtM8
// https://github.com/Bigless27/react-autocompelte
import React, { useEffect, useState, useRef } from "react";

import classes from "./style.module.css";

import apartamentos from "../../databaseLocal/apartamentos";

function TestingCode() {
  const [displayEnderecos, setDisplayEnderecos] = useState(false);
  const [searchEndereco, setSearchEndereco] = useState("");
  const [displayInscricoes, setDisplayInscricoes] = useState(false);
  const [searchInscricao, setSearchInscricao] = useState("");
  const [options, setOptions] = useState([]);

  const wrapperRef = useRef(null);

  useEffect(() => {
    const arrayAux = [];

    for (var i = 0; i < apartamentos.length; i++) {
      let apt = apartamentos[i];
      arrayAux.push({ endereco: apt.endereco, inscricao: apt.inscricao });
      console.log("Endereço: " + apt.endereco + apt.inscricao);
    }

    setOptions(arrayAux);
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplayEnderecos(false);
      setDisplayInscricoes(false);
    }
  };

  const updateInputEndereco = (val) => {
    setSearchEndereco(val);
    setDisplayEnderecos(false);
  };
  const updateInputInscricao = (val) => {
    setSearchInscricao(val);
    setDisplayInscricoes(false);
  };

  return (
    <div ref={wrapperRef} className={classes.Container}>
      <br />
      <br /> <br />
      <h1>TESTING CODE</h1>
      <br /> <br />
      <br /> <br />
      <select className={classes.FormStyleInput} name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <br />
      <input
        className={classes.FormStyleInput}
        id="auto"
        onClick={() => setDisplayEnderecos(!displayEnderecos)}
        // onClick={() => setDisplay(!display)}
        placeholder="Endereço"
        value={searchEndereco}
        onChange={(event) => setSearchEndereco(event.target.value)}
      />
      {displayEnderecos && (
        <div className={classes.autoContainer}>
          {options
            .filter(
              ({ endereco }) =>
                endereco.indexOf(searchEndereco.toLowerCase()) > -1
            )
            .map((value, i) => {
              return (
                <div
                  className={classes.option}
                  onClick={() => updateInputEndereco(value.endereco)}
                  key={i}
                  tabIndex="0"
                >
                  <span>{value.endereco}</span>
                </div>
              );
            })}
        </div>
      )}
      {/* SECOND INPUT: */}
      <input
        className={classes.FormStyleInput}
        id="autoInscricoes"
        onClick={() => setDisplayInscricoes(!displayInscricoes)}
        placeholder="Inscrição"
        value={searchInscricao}
        onChange={(event) => setSearchInscricao(event.target.value)}
      />
      {displayInscricoes && (
        <div className={classes.autoContainer}>
          {options
            // .filter(
            //   ({ inscricao }) =>
            //     inscricao.indexOf(searchInscricao.toLowerCase()) > -1
            // )
            .map((value, i) => {
              return (
                <div
                  className={classes.option}
                  onClick={() => updateInputInscricao(value.inscricao)}
                  key={i}
                  tabIndex="0"
                >
                  <span>{value.inscricao}</span>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
export default TestingCode;
