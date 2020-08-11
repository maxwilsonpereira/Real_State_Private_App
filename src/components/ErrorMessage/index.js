import React, { useEffect } from "react";

import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actionsIndex";

import classes from "./style.module.css";

function ErrorMessage(props) {
  useEffect(() => {
    props.onSetErrorMessage(props.mensagem);
  }, [props.ErrorMessage]);

  return (
    <div className={classes.messageBox}>
      <h1 className={classes.messageStyle}>{props.ErrorMessage}</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.global.errorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetErrorMessage: (errorMsg) =>
      dispatch(actionTypes.setErrorMessage(errorMsg)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessage);
