import React, { useEffect } from "react";
// REDIRECT
import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actionsIndex";

import imageMain from "../../assets/images/mainimg.jpg";
import logo from "../../assets/images/logo_main.png";
import classes from "./home.module.css";

import AptDestaques from "../../components/aptDestaques";
import GoogleMap from "../../components/googleMap";
import MessageRectangle from "../../components/messageRectangle";
import Procurar from "../../components/procurar";

function Home(props) {
  let history = useHistory();

  useEffect(() => {
    // SCROLL TO TOP ON PAGE LOAD:
    window.scrollTo(0, 0);
    props.onHideSideDrawer();
  }, []);

  useEffect(() => {
    if (!props.userIsLogged) {
      history.push("/");
    }
  }, [props.userIsLogged]);

  const backHomeImgStyle = { backgroundImage: `url(${imageMain})` };

  return (
    <>
      {/* <img src={imageMain} /> */}
      {/* ANCHOR self-closing DIV: */}
      <div id="start" style={{ position: "absolute", top: "0px" }} />
      {/* HOME IMAGE */}
      <section className={classes.HomeImageContainer} style={backHomeImgStyle}>
        <div className={classes.LogoBox}>
          <img className={classes.LogoImage} src={logo} />
          <h2>Empreendimentos</h2>
        </div>
      </section>
      <hr />
      <Procurar />
      <hr />
      <MessageRectangle
        background="blue"
        text="O objetivo da TGB é maximizar o potencial de locação, com base numa parceria de longo prazo com os locatários."
      />
      <hr />
      {/* DESTAQUES - 4 apartamentos */}
      <br />
      <AptDestaques title="DESTAQUES IMOBILIÁRIOS" number={4} />
      <GoogleMap location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.0894558323575!2d-43.22526414894182!3d-22.98373774632701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd5ad8741b3e5%3A0x2ac334e19bbe47da!2sAv.%20Bartolomeu%20Mitre%2C%20336%20-%20Leblon%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022431-002%2C%20Brasil!5e0!3m2!1spt-BR!2sat!4v1594677017003!5m2!1spt-BR!2sat" />
    </>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
