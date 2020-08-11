import React, { useEffect } from "react";
// REDIRECT
import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actionsIndex";

// import { NavHashLink } from "react-router-hash-link";\
// <NavHashLink
// to="/informacao?id=3#start"
// className={classesButons.BtnGold}
// >
// Saber Mais
// </NavHashLink>

// npm install --save react-animate-on-scroll
// https://www.npmjs.com/package/react-animate-on-scroll
import ScrollAnimation from "react-animate-on-scroll";
// IMPORTANT: ***************************
// ADD "animate.min.css" file to ./utilities/animate.min.css
// and import into App.js
// If dos not work:
// ADD TO index.HTML <head> ... </head>: <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
// YOU CAN USE THE ANIMATIONS FROM:
// https://animate.style/
// EXAMPLES: fadeIn / zoomIn /zoomInLeft / fadeOutDown / pulse
// EXAMPLES:
// https://dbramwell.github.io/react-animate-on-scroll/

import classes from "./style.module.css";
import classesButons from "../UI/buttons/butons.module.css";

import apartamentos from "../../databaseLocal/apartamentos";
import imagesArray from "../../databaseLocal/images/_images";

function Resultados(props) {
  useEffect(() => {}, []);

  let history = useHistory();

  function showApInfoPrepare(e, id) {
    e.preventDefault();
    props.onShowInfoAp(id);
    history.push("/informacao");
  }

  return (
    <>
      <hr />
      <section className={classes.sectionGrey}>
        <div className={classes.AppContainer}>
          <h1 className={classes.Title}>{props.title}</h1>

          {props.aptSelecionados.map((apt, index) => {
            if (apt.id === props.curAptId) {
              return;
            } else {
              return (
                <div key={apt.id}>
                  <hr />
                  <div className={classes.GridResultados}>
                    {/* GRID LEFT: */}
                    <div>
                      <br className={classes.mobileOnly} />
                      <h1>{apt.endereco}</h1>
                      {/* <br className={classes.NotMobile} /> */}
                      {/* <hr className={classes.lineGold} /> */}
                      <h2>
                        <span className={classes.FontColor}>
                          Área Terreno:{" "}
                        </span>
                        {apt.areaTerreno}m<sup>2</sup>
                        <br />
                        <span className={classes.FontColor}>
                          Valor Comprado:{" "}
                        </span>
                        {apt.valorComprado.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                        <br />
                        <span className={classes.FontColor}>Empresa: </span>
                        {apt.empresa}
                        <br />
                        <span className={classes.FontColor}>Inscrição: </span>
                        {apt.inscricao}
                        <br />
                      </h2>
                      <br />
                      <div className={classes.centeredAlignedMobile}>
                        <button
                          // to="/informacao?id=1#start"
                          className={classesButons.BtnGold}
                          // activeClassName={classes[props.classProps]}
                          onClick={(e) => showApInfoPrepare(e, apt.id - 1)}
                        >
                          Saber Mais
                        </button>
                        <br className={classes.mobileOnly} />
                        <br className={classes.mobileOnly} />
                      </div>
                    </div>
                    {/* GRID RIGHT: */}
                    <div>
                      <img
                        className={classes.ApartamentoImg}
                        src={props.imagesApt[index][0]}
                      />
                    </div>
                    <br className={classes.mobileOnly} />
                  </div>
                </div>
              );
            }
          })}
        </div>
      </section>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    curAptId: state.apartamentos.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onShowInfoAp: (id) => dispatch(actionTypes.showInfoAp(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Resultados);
