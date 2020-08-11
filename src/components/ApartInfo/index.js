import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

// IMAGE GALLERY:
// npm i react-image-gallery
// https://www.npmjs.com/package/react-image-gallery
import ImageGallery from "react-image-gallery";
// CSS come on the instalation. I copied from:
// node_modules/react-image-gallery/styles/css/image-gallery-no-icon.css
// I made some alterations, like border-radios and box-shadow.
import "./imgGallery.css";

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

import auxImg from "../../assets/images/mainimg.jpg";

import GoogleMap from "../../components/googleMap";

function ApartInfo(props) {
  const [images, setImages] = useState([]);
  const [backImgStyle, setBackImgStyle] = useState(null);
  const [empresa, setEmpresa] = useState("");
  const [endereco, setEndereco] = useState("");
  const [inscricao, setInscricao] = useState(null);
  const [valorComprado, setValorComprado] = useState(null);
  const [valorAtual, setValorAtual] = useState(null);
  const [valorVenal, setValorVenal] = useState(null);
  const [valorIptu, setValorIptu] = useState(null);
  const [aluguel, setAluguel] = useState(null);
  const [luva, setLuva] = useState(null);
  const [areaTerreno, setAreaTerreno] = useState(null);
  const [areaEdificada, setAreaEdificada] = useState(null);
  const [socios, setSocios] = useState("");
  const [participacao, setParticipacao] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    // SCROLL TO TOP ON PAGE LOAD:
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // SCROLL TO TOP ON PAGE LOAD:
    window.scrollTo(0, 0);
    if (!props.images) {
      setBackImgStyle({ backgroundImage: `url(${auxImg})` });
    } else {
      setBackImgStyle({ backgroundImage: `url(${props.images[0]})` });
      setImages([
        {
          original: props.images[0],
          thumbnail: props.images[0],
        },
        {
          original: props.images[1],
          thumbnail: props.images[1],
        },
        {
          original: props.images[2],
          thumbnail: props.images[2],
        },
        {
          original: props.images[3],
          thumbnail: props.images[3],
        },
      ]);
    }

    setEmpresa(props.empresa);
    setEndereco(props.endereco);
    setInscricao(props.inscricao);
    if (props.valorComprado > 1) {
      setValorComprado(
        props.valorComprado.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })
      );
    }
    if (props.valorAtual > 1) {
      setValorAtual(
        props.valorAtual.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })
      );
    }
    if (props.valorVenal > 1) {
      setValorVenal(
        props.valorVenal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })
      );
    }
    if (props.valorIptu > 1) {
      setValorIptu(
        props.valorIptu.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })
      );
    }
    if (props.aluguel > 1) {
      setAluguel(
        props.aluguel.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })
      );
    }
    if (props.luva > 1) {
      setLuva(
        props.luva.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })
      );
    }
    setAreaTerreno(props.areaTerreno);
    setAreaEdificada(props.areaEdificada);
    setSocios(props.socios);
    setParticipacao(props.participacao);
    setTitulo(props.titulo);
    setDescricao(props.descricao);
  }, [
    props.images,
    props.empresa,
    props.endereco,
    props.inscricao,
    props.valorComprado,
    props.valorAtual,
    props.valorVenal,
    props.valorIptu,
    props.aluguel,
    props.luva,
    props.areaTerreno,
    props.areaEdificada,
    props.socios,
    props.participacao,
    props.titulo,
    props.descricao,
  ]);

  return (
    <>
      {/* MAIN IMAGE */}
      <section className={classes.ImageContainer} style={backImgStyle}>
        <h2>{endereco}</h2>
      </section>
      <div className={classes.Container}>
        <h1 className={classes.FadeIn}>{titulo}</h1>
        <br />
        <div className={classes.FadeInScroll}>
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOnce={true}
            duration={0.8}
          >
            {/* <h2>{descricao}</h2> */}
            {/* <hr className={classes.HorizontalLine} /> */}
            <div className={classes.GridContatoBox}>
              <div>
                <h3>
                  Contato:{" "}
                  <span className={classes.fontDark}>{props.contato}</span>
                </h3>
              </div>
              <div>
                <h3>
                  Telefone:{" "}
                  <span className={classes.fontDark}>{props.telefone}</span>
                </h3>
              </div>
            </div>
            {/* <hr className={classes.HorizontalLine} /> */}
            <br />
            <div className={classes.GridInformacoes}>
              <div>
                {/* <hr className={classes.HorizontalLine} /> */}
                <h3>
                  Empresa:{" "}
                  <span className={classes.fontDark}>
                    {empresa ? empresa : "-"}
                  </span>
                </h3>
                <hr className={classes.HorizontalLine} />
                <h3>
                  Endereço:{" "}
                  <span className={classes.fontDark}>
                    {endereco ? endereco : "-"}
                  </span>
                </h3>
                <hr className={classes.HorizontalLine} />
                <h3>
                  Valor Comprado:{" "}
                  <span className={classes.fontDark}>
                    {valorComprado ? valorComprado : "-"}
                  </span>
                  <hr className={classes.HorizontalLine} />
                </h3>
                <h3>
                  Valor Atual:{" "}
                  <span className={classes.fontDark}>
                    {valorAtual ? valorAtual : "-"}
                  </span>
                  <hr className={classes.HorizontalLine} />
                </h3>
                <h3>
                  Valor Venal:{" "}
                  <span className={classes.fontDark}>
                    {valorVenal ? valorVenal : "-"}
                  </span>
                  <hr className={classes.HorizontalLine} />
                </h3>
                <h3>
                  Valor IPTU:{" "}
                  <span className={classes.fontDark}>
                    {valorIptu ? valorIptu : "-"}
                  </span>
                  <hr className={classes.HorizontalLine} />
                </h3>
              </div>
              {/* GRID RIGHT: */}
              <div>
                {/* <hr className={classes.HorizontalLine} /> */}
                <h3>
                  Inscrição:{" "}
                  <span className={classes.fontDark}>
                    {inscricao ? inscricao : "-"}
                  </span>
                </h3>
                <hr className={classes.HorizontalLine} />
                <h3>
                  Aluguel:{" "}
                  <span className={classes.fontDark}>
                    {aluguel ? aluguel : "-"}
                  </span>
                  <hr className={classes.HorizontalLine} />
                </h3>
                <h3>
                  Luva:{" "}
                  <span className={classes.fontDark}>{luva ? luva : "-"}</span>
                  <hr className={classes.HorizontalLine} />
                </h3>
                <h3>
                  Área Terreno:{" "}
                  <span className={classes.fontDark}>
                    {areaTerreno ? (
                      <>
                        {areaTerreno}m<sup>2</sup>
                      </>
                    ) : (
                      "-"
                    )}
                  </span>
                  <hr className={classes.HorizontalLine} />
                </h3>
                <h3>
                  Área Edificada:{" "}
                  <span className={classes.fontDark}>
                    {areaEdificada ? (
                      <>
                        {areaEdificada}m<sup>2</sup>
                      </>
                    ) : (
                      "-"
                    )}
                  </span>
                  <hr className={classes.HorizontalLine} />
                </h3>
                <h3>
                  Sócios:{" "}
                  <span className={classes.fontDark}>
                    {socios ? socios : "-"}
                  </span>
                  <hr className={classes.HorizontalLine} />
                </h3>
                <h3>
                  Participação:{" "}
                  <span className={classes.fontDark}>
                    {participacao ? participacao : "-"}
                  </span>
                  <hr className={classes.HorizontalLine} />
                </h3>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        <br />
      </div>
      {/* // IMAGE GALLERY: */}
      <div className={classes.SectionGrey}>
        <div className={classes.Container}>
          <h1>Galeria de Imagens</h1>
          <ImageGallery showPlayButton={false} items={images} />
        </div>
      </div>
      {/* // LOCALIZAÇÃO: */}
      <div className={classes.SectionGrey}>
        <div className={classes.ContainerLocalizacao}>
          <h1>Localização</h1>
        </div>
      </div>
      <GoogleMap location={props.locationMap} />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    images: state.apartamentos.images,
    aptId: state.apartamentos.id,
    empresa: state.apartamentos.empresa,
    contato: state.apartamentos.contato,
    telefone: state.apartamentos.telefone,
    endereco: state.apartamentos.endereco,
    inscricao: state.apartamentos.inscricao,
    valorComprado: state.apartamentos.valorComprado,
    valorAtual: state.apartamentos.valorAtual,
    valorVenal: state.apartamentos.valorVenal,
    valorIptu: state.apartamentos.valorIptu,
    aluguel: state.apartamentos.aluguel,
    luva: state.apartamentos.luva,
    areaTerreno: state.apartamentos.areaTerreno,
    areaEdificada: state.apartamentos.areaEdificada,
    socios: state.apartamentos.socios,
    participacao: state.apartamentos.participacao,
    titulo: state.apartamentos.titulo,
    descricao: state.apartamentos.descricao,
    locationMap: state.apartamentos.locationMap,
  };
};

export default connect(mapStateToProps)(ApartInfo);
