import React, { useEffect } from "react";
// REDIRECT
import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actionsIndex";

import classes from "./style.module.css";

import AptDestaques from "../../components/aptDestaques";
import ApartInfo from "../../components/ApartInfo";
import Procurar from "../../components/procurar";

function InformacaoApart(props) {
  let history = useHistory();

  useEffect(() => {
    props.onHideSideDrawer();
  }, []);

  useEffect(() => {
    if (!props.userIsLogged) {
      history.push("/");
    }
    if (!props.endereco) {
      history.push("/");
    }
  }, [props.userIsLogged, props.endereco]);

  return (
    <>
      {/* ANCHOR self-closing DIV: */}
      <div id="start" style={{ position: "absolute", top: "0px" }} />
      <ApartInfo />
      {/* DESTAQUES - 4 apartamentos */}
      <div className={classes.SectionGrey}>
        <hr />
        <Procurar />
      </div>
      <hr />
      <br />
      <AptDestaques title="DESTAQUES IMOBILIÁRIOS" number={4} />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    userIsLogged: state.login.isLogged,
    endereco: state.apartamentos.endereco,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHideSideDrawer: () => dispatch(actionTypes.hideSideDrawer()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InformacaoApart);
