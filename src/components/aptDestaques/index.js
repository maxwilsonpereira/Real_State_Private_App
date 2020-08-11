import React from "react";
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

function AptDestaques(props) {
  let history = useHistory();

  function showApInfoPrepare(e, id) {
    e.preventDefault();
    props.onShowInfoAp(id);
    history.push("/informacao");
  }

  return (
    <>
      <div className={classes.AppContainer}>
        <h1 className={classes.Title}>{props.title}</h1>
        <br />
        {/* APARTAMENTOS - DESTAQUES: */}
        <div className={classes.GridApartamentoLeft}>
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOnce={true}
            duration={1}
          >
            <div>
              <img className={classes.ApartamentoImg} src={imagesArray[0][0]} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={3}>
            <div>
              <br className={classes.mobileOnly} />
              <h1>{apartamentos[0].endereco}</h1>
              <br />
              <br className={classes.NotMobile} />
              <hr className={classes.lineGold} />
              <br />
              <br className={classes.NotMobile} />
              <h2>
                <span className={classes.FontColor}>Empresa:</span>{" "}
                {apartamentos[0].empresa}
              </h2>
              <h2>
                <span className={classes.FontColor}>Valor Comprado: </span>
                {apartamentos[0].valorComprado.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h2>
              <br />
              <div className={classes.centeredAligned}>
                <button
                  // to="/informacao?id=1#start"
                  className={classesButons.BtnGold}
                  // activeClassName={classes[props.classProps]}
                  onClick={(e) => showApInfoPrepare(e, 0)}
                >
                  Saber Mais
                </button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <br />
      <section className={classes.sectionGrey}>
        <br />
        <div className={classes.AppContainer}>
          <div className={classes.GridApartamentoRight}>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={3}>
              <div>
                <br className={classes.mobileOnly} />
                <h1>{apartamentos[1].endereco}</h1>
                <br />
                <br className={classes.NotMobile} />
                <hr className={classes.lineGold} />
                <br />
                <br className={classes.NotMobile} />
                <h2>
                  <span className={classes.FontColor}>Empresa:</span>{" "}
                  {apartamentos[1].empresa}
                </h2>
                <h2>
                  <span className={classes.FontColor}>Valor Comprado: </span>
                  {apartamentos[1].valorComprado.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </h2>
                <br />
                <div className={classes.centeredAligned}>
                  <button
                    // to="/informacao?id=1#start"
                    className={classesButons.BtnGold}
                    // activeClassName={classes[props.classProps]}
                    onClick={(e) => showApInfoPrepare(e, 1)}
                  >
                    Saber Mais
                  </button>
                  <br className={classes.mobileOnly} />
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeInRight"
              animateOnce={true}
              duration={1}
            >
              <div>
                <img
                  className={classes.ApartamentoImg}
                  src={imagesArray[1][0]}
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <br />
      </section>
      <div className={classes.AppContainer}>
        <br />
        <div className={classes.GridApartamentoLeft}>
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOnce={true}
            duration={1}
          >
            <div>
              <img className={classes.ApartamentoImg} src={imagesArray[2][0]} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={3}>
            <div>
              <br className={classes.mobileOnly} />
              <h1>{apartamentos[2].endereco}</h1>
              <br />
              <br className={classes.NotMobile} />
              <hr className={classes.lineGold} />
              <br />
              <br className={classes.NotMobile} />
              <h2>
                <span className={classes.FontColor}>Empresa:</span>{" "}
                {apartamentos[2].empresa}
              </h2>
              <h2>
                <span className={classes.FontColor}>Valor Comprado: </span>
                {apartamentos[2].valorComprado.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h2>
              <br />
              <div className={classes.centeredAligned}>
                <button
                  // to="/informacao?id=1#start"
                  className={classesButons.BtnGold}
                  // activeClassName={classes[props.classProps]}
                  onClick={(e) => showApInfoPrepare(e, 2)}
                >
                  Saber Mais
                </button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <br />
      <section className={classes.sectionGrey}>
        <br />
        <div className={classes.AppContainer}>
          <div className={classes.GridApartamentoRight}>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={3}>
              <div>
                <br className={classes.mobileOnly} />
                <h1>{apartamentos[3].endereco}</h1>
                <br />
                <br className={classes.NotMobile} />
                <hr className={classes.lineGold} />
                <br />
                <br className={classes.NotMobile} />
                <h2>
                  <span className={classes.FontColor}>Empresa:</span>{" "}
                  {apartamentos[3].empresa}
                </h2>
                <h2>
                  <span className={classes.FontColor}>Valor Comprado: </span>
                  {apartamentos[3].valorComprado.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </h2>
                <br />
                <div className={classes.centeredAligned}>
                  <button
                    // to="/informacao?id=1#start"
                    className={classesButons.BtnGold}
                    // activeClassName={classes[props.classProps]}
                    onClick={(e) => showApInfoPrepare(e, 3)}
                  >
                    Saber Mais
                  </button>
                  <br className={classes.mobileOnly} />
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeInRight"
              animateOnce={true}
              duration={1}
            >
              <div>
                <img
                  className={classes.ApartamentoImg}
                  src={imagesArray[3][0]}
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <br />
      </section>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onShowInfoAp: (id) => dispatch(actionTypes.showInfoAp(id)),
  };
};

export default connect(null, mapDispatchToProps)(AptDestaques);
