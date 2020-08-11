import React, { useState, useEffect } from "react";
// npm i react-redux
import { connect } from "react-redux";

// npm i react-router-dom
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./global.css";
// react-animate-on-scroll
import "./utilities/animate.min.css";

import TestingCode from "./pages/_TESTING";

import Navigation from "./components/Navigation";
import Footer from "./components/footer";
import Home from "./pages/home";
import Login from "./pages/login";
import InformacaoApart from "./pages/InformacaoApart";
import Procurar from "./pages/procurar";

function App(props) {
  /******** LOG OUT HANLDLING ********/
  const [navigationShow, setNavigationShow] = useState(null);
  const [footerShow, setFooterShow] = useState(null);

  useEffect(() => {
    if (props.userIsLogged) {
      setNavigationShow(<Navigation />);
      setFooterShow(<Footer />);
    } else {
      setNavigationShow(null);
      setFooterShow(<Footer />);
    }
  }, [props.userIsLogged]);
  /******** LOG OUT HANLDLING - END ********/

  return (
    <BrowserRouter>
      {navigationShow}
      <Switch>
        <Route path="/procurar" component={Procurar} />
        <Route path="/test" component={TestingCode} />
        <Route path="/informacao" component={InformacaoApart} />
        <Route path="/home" component={Home} />
        <Route path="/" component={Login} />
      </Switch>
      {footerShow}
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    userIsLogged: state.login.isLogged,
  };
};

export default connect(mapStateToProps)(App);
