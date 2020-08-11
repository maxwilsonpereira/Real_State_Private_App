import React, { useState, useEffect } from "react";
// REDIRECT
import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actionsIndex";

import imageMain from "../../assets/images/logind.jpg";
import logo from "../../assets/images/logo_main.png";

import classes from "./login.module.css";
import classesButons from "../../components/UI/buttons/butons.module.css";

function Home(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  useEffect(() => {
    // SCROLL TO TOP ON PAGE LOAD:
    window.scrollTo(0, 0);
    props.onHideSideDrawer();
  }, []);

  useEffect(() => {
    if (props.userIsLogged) {
      history.push("/home");
    }
  }, [props.userIsLogged]);

  const backHomeImgStyle = { backgroundImage: `url(${imageMain})` };

  function login(e) {
    e.preventDefault();
    props.onLogin(email, password);
  }

  return (
    <div>
      {/* <img src={imageMain} /> */}
      {/* ANCHOR self-closing DIV: */}
      <div id="start" style={{ position: "absolute", top: "0px" }} />
      {/* HOME IMAGE */}
      <section className={classes.HomeImageContainer} style={backHomeImgStyle}>
        <div className={classes.LogoBox}>
          <img className={classes.LogoImage} src={logo} />
          <h2>Empreendimentos</h2>
        </div>
        <br /> <br />
        <form className={classes.FormStyle} onSubmit={login}>
          <input
            type="email"
            required
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            className={classesButons.BtnYellow}
            type="submit"
            value="LOGIN"
          />
        </form>
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userIsLogged: state.login.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHideSideDrawer: () => dispatch(actionTypes.hideSideDrawer()),
    onLogin: (email, password) => dispatch(actionTypes.login(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
