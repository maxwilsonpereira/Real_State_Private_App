import React from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import classes from "./style.module.css";
import logo from "../../assets/images/logo_main.png";

export default function Footer() {
  return (
    <section className={classes.SectionColor}>
      <div className={classes.AppContainerFooter}>
        <div className={classes.GridFooter}>
          <div>
            <img className={classes.LogoFooter} src={logo} alt="" />
          </div>
          <div>
            <h1>Institucional</h1>
            <h3>
              <Link to="/sobre#start">Sobre</Link>
              <br />
              <Link to="/servicos#start">Serviços</Link>
            </h3>
          </div>
          <div>
            <h1>Relacionamento</h1>
            <h3>
              <Link to="/#duvidas">Dúvidas</Link>
              <br />
              <Link to="/contato#start">Contato</Link>
            </h3>
          </div>
        </div>
      </div>
      <div className={classes.FooterDown}>
        <p>Todos os direitos reservados. Copyright 2020 TGB.</p>
      </div>
    </section>
  );
}
