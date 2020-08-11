import React, { useState, useEffect } from "react";

import classes from "./style.module.css";
import classesBtn from "../UI/buttons/butons.module.css";

import Resultados from "../resultados";
import ErrorMessage from "../ErrorMessage";

import apartamentos from "../../databaseLocal/apartamentos";
import imagesArray from "../../databaseLocal/images/_images";

function Procurar(e) {
  const [submitBtn, setSubmitBtn] = useState("");
  const [limparBtn, setLimparBtn] = useState("");
  const [mostrarTodosBtn, setMostrarTodosBtn] = useState("");
  const [endereco, setEndereco] = useState("");
  const [bairro, setBairro] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [valorMinimo, setValorMinimo] = useState("");
  const [showResults, setShowResults] = useState(null);
  const [mensagemDeErro, setMensagemDeErro] = useState(null);
  const [empresasAll, setEmpresasAll] = useState([]);
  const [bairrosAll, setBairrosAll] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMensagemDeErro(null);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [mensagemDeErro]);

  useEffect(() => {
    let empresasAux = [];
    let bairrosAux = [];
    apartamentos.forEach((apt, index) => {
      empresasAux.push(apt.empresa);
      bairrosAux.push(apt.bairro);
    });

    setEmpresasAll(
      empresasAux.filter((item, index) => empresasAux.indexOf(item) === index)
    );
    setBairrosAll(
      bairrosAux.filter((item, index) => bairrosAux.indexOf(item) === index)
    );

    setMostrarTodosBtn(
      <button onClick={mostrarTodos} className={classesBtn.BtnYellow}>
        MOSTRAR TODOS
      </button>
    );
  }, []);

  useEffect(() => {
    if (
      endereco === "" &&
      bairro === "" &&
      empresa === "" &&
      valorMinimo === ""
    ) {
      setSubmitBtn(
        <input
          // className={classes.BtnSubmit}
          disabled
          type="submit"
          value="PROCURAR"
        />
      );
      setLimparBtn(
        <button disabled className={classesBtn.BtnDisabled}>
          LIMPAR
        </button>
      );
    } else {
      setSubmitBtn(
        <input className={classesBtn.BtnGreen} type="submit" value="PROCURAR" />
      );
      setLimparBtn(
        <button onClick={limparBusca} className={classesBtn.BtnRed}>
          LIMPAR
        </button>
      );
    }
  }, [endereco, bairro, empresa, valorMinimo]);

  function procurarHandler(e) {
    e.preventDefault();
    let auxArray = [];
    let imaAuxArray = [];
    let resultFound = false;

    apartamentos.map((apt, index) => {
      if (
        (apt.endereco === endereco || endereco.length < 1) &&
        (apt.bairro === bairro || bairro.length < 1) &&
        (apt.valorComprado > valorMinimo || valorMinimo.length < 1) &&
        (apt.empresa === empresa || empresa.length < 1)
      ) {
        auxArray.push(apt);
        imaAuxArray.push(imagesArray[index]);
        resultFound = true;
      }
    });

    if (resultFound) {
      setShowResults(
        <Resultados
          aptSelecionados={auxArray}
          imagesApt={imaAuxArray}
          title="Resultado da Procura:"
        />
      );
      // RESET MOSTRAR TODOS BUTTON:
      setMostrarTodosBtn(
        <button onClick={mostrarTodos} className={classesBtn.BtnYellow}>
          MOSTRAR TODOS
        </button>
      );
      setMensagemDeErro(null);
      resultFound = false;
    } else {
      setShowResults(null);
      setMensagemDeErro(
        <ErrorMessage ErrorMessage="Nenhum resultado encontrado!" />
      );
    }
  }
  function mostrarTodos(e) {
    e.preventDefault();
    setMostrarTodosBtn(
      <button onClick={mostrarTodos} className={classesBtn.BtnDisabled}>
        MOSTRAR TODOS
      </button>
    );
    setShowResults(
      <Resultados
        aptSelecionados={apartamentos}
        imagesApt={imagesArray}
        title="Resultado da Procura:"
      />
    );
    setLimparBtn(
      <button onClick={limparBusca} className={classesBtn.BtnRed}>
        LIMPAR
      </button>
    );
    setMensagemDeErro(null);
  }

  function limparBusca(e) {
    e.preventDefault();
    setMostrarTodosBtn(
      <button onClick={mostrarTodos} className={classesBtn.BtnYellow}>
        MOSTRAR TODOS
      </button>
    );
    setLimparBtn(
      <button disabled className={classesBtn.BtnDisabled}>
        LIMPAR
      </button>
    );
    setMensagemDeErro(null);
    setShowResults(null);
    setEndereco("");
    setBairro("");
    setEmpresa("");
    setValorMinimo("");
    document.getElementById("selectEndereco").selectedIndex = "0";
    document.getElementById("selectEmpresa").selectedIndex = "0";
    document.getElementById("selectBairro").value = "";
    document.getElementById("selectValor").value = "";
  }

  return (
    <>
      <div className={classes.procurarContainer}>
        <h1 className={classes.Title}>Procurar Imóveis</h1>
        <hr />
        <br className={classes.DontShowMobile} />
        <form className={classes.FormStyle} onSubmit={procurarHandler}>
          <div className={classes.gridProcurar}>
            {/* GRID LEFT: */}
            <div>
              <h1 className={classes.subTitle}>Endereço</h1>
              {/* Next <div> is just to align the heights: */}
              <div>
                <select
                  id="selectEndereco"
                  className={classes.SelectStyle}
                  name="selectEndereco"
                  onChange={(e) => setEndereco(e.target.value)}
                >
                  <option value="" disabled selected hidden>
                    Selecionar Endereço
                  </option>
                  {apartamentos.map((apt, index) => (
                    <option key={index} value={apt.endereco}>
                      {apt.endereco}
                    </option>
                  ))}
                </select>
              </div>
              <br className={classes.DontShowMobile} />
              <h1 className={classes.subTitle}>Empresa</h1>
              {/* Next <div> is just to align the heights: */}
              <div>
                <select
                  id="selectEmpresa"
                  className={classes.SelectStyle}
                  name="selectEmpresa"
                  onChange={(e) => setEmpresa(e.target.value)}
                >
                  <option value="" disabled selected hidden>
                    Selecionar Empresa
                  </option>
                  {empresasAll.map((empresa, index) => (
                    <option key={index} value={empresa}>
                      {empresa}
                    </option>
                  ))}
                </select>
              </div>
              {/* <div>
              <input
                type="number"
                placeholder="Número"
                onChange={(e) => setIdImovel(e.target.value)}
              />
            </div> */}
              {/* PROCURAR BUTTON DESKTOP (left): */}
              <div
                className={[
                  classes.gridProcurarSub,
                  classes.DontShowMobile,
                ].join(" ")}
              >
                <div>{submitBtn}</div>
                <div>{limparBtn}</div>
              </div>
            </div>

            {/* GRID RIGHT: */}
            <div>
              <h1 className={classes.subTitle}>Bairro</h1>
              <div>
                <select
                  id="selectBairro"
                  className={classes.SelectStyle}
                  name="selectBairro"
                  onChange={(e) => setBairro(e.target.value)}
                >
                  <option value="" disabled selected hidden>
                    Selecionar Bairro
                  </option>
                  {bairrosAll.map((bairro, index) => (
                    <option key={index} value={bairro}>
                      {bairro}
                    </option>
                  ))}
                </select>
              </div>
              {/* <div>
                <input
                  id="selectCidade"
                  type="text"
                  placeholder="Cidade"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                />
              </div> */}
              <br className={classes.DontShowMobile} />
              <h1 className={classes.subTitle}>Valor Mínimo</h1>
              <div>
                <select
                  id="selectValor"
                  className={classes.SelectStyle}
                  name="selectValor"
                  onChange={(e) => setValorMinimo(e.target.value)}
                >
                  <option value="" disabled selected hidden>
                    Valor Mímino
                  </option>
                  <option value={500000}>R$ 500.000</option>
                  <option value={1000000}>R$ 1.000.000</option>
                  <option value={2000000}>R$ 2.000.000</option>
                  <option value={5000000}>R$ 5.000.000</option>
                  <option value={10000000}>R$ 10.000.000</option>
                </select>
              </div>
              {/* <div className={classes.gridProcurarSub}>
              <div>
                <input
                  type="number"
                  placeholder="Min"
                  onChange={(e) => setQuartosMin(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Max"
                  onChange={(e) => setQuartosMax(e.target.value)}
                />
              </div>
            </div> */}
              {/* PROCURAR BUTTON MOBILE (bottom): */}
              <div
                className={[classes.gridProcurarSub, classes.MobileOnly].join(
                  " "
                )}
              >
                <div>{submitBtn}</div>
                <div>{limparBtn}</div>
              </div>
              {/* MOSTRAR TODOS BUTTON DESKTOP: */}
              <div>{mostrarTodosBtn}</div>
            </div>
          </div>
        </form>
        {mensagemDeErro}
      </div>
      {showResults}
    </>
  );
}
export default Procurar;
