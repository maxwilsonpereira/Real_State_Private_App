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
            <div className={classes.contatoInfos}>
              <h3>
                Contato:{" "}
                <span className={classes.fontDark}>{props.contato}</span>
                <br />
                Telefone:{" "}
                <span className={classes.fontDark}>{props.telefone}</span>
              </h3>
            </div>
            <br />
            <div className={classes.GridInformacoes}>
              <div>
                <hr className={classes.HorizontalLine} />
                <h3>Empresa</h3>
                <h4>{empresa ? empresa : "-"}</h4>
                <hr className={classes.HorizontalLine} />
                <h3>Endereço</h3>
                <h4>{endereco ? endereco : "-"}</h4>
                <hr className={classes.HorizontalLine} />
                <h3>Inscrição</h3>
                <h4>{inscricao ? inscricao : "-"}</h4>
                <hr className={classes.HorizontalLine} />
                <h3>Valor Comprado</h3>
                <h4>{valorComprado ? valorComprado : "-"}</h4>
                <hr className={classes.HorizontalLine} />
                <h3>Valor Atual</h3>
                <h4>{valorAtual ? valorAtual : "-"}</h4>
                <hr className={classes.HorizontalLine} />
                <h3>Valor Venal</h3>
                <h4>{valorVenal ? valorVenal : "-"}</h4>
                <hr className={classes.HorizontalLine} />
                <h3>Valor IPTU</h3>
                <h4>{valorIptu ? valorIptu : "-"}</h4>
                <hr className={classes.HorizontalLine} />
              </div>
              <div>
                <hr className={classes.HorizontalLine} />
                <h3>Aluguel</h3>
                <h4>{aluguel ? aluguel : "-"}</h4>
                <hr className={classes.HorizontalLine} />
                <h3>Luva</h3>
                <h4>{luva ? luva : "-"}</h4>
                <hr className={classes.HorizontalLine} />
                <h3>Área Terreno</h3>
                <h4>
                  {areaTerreno ? (
                    <>
                      {areaTerreno}m<sup>2</sup>
                    </>
                  ) : (
                    "-"
                  )}
                </h4>
                <hr className={classes.HorizontalLine} />
                <h3>Área Edificada</h3>
                <h4>
                  {areaEdificada ? (
                    <>
                      {areaEdificada}m<sup>2</sup>
                    </>
                  ) : (
                    "-"
                  )}
                </h4>
                <hr className={classes.HorizontalLine} />
                <h3>Sócios</h3>
                <h4>{socios ? socios : "-"}</h4>
                <hr className={classes.HorizontalLine} />
                <h3>Participação</h3>
                <h4>{participacao ? participacao : "-"}</h4>
                <hr className={classes.HorizontalLine} />
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
      <GoogleMap location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.169111185095!2d-43.21295368450924!3d-22.9808080462952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd508814dfbd5%3A0x4fbcfb60935c76fe!2sAv.%20Epit%C3%A1cio%20Pessoa%2C%20864%20-%20Ipanema%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022410-090%2C%20Brasil!5e0!3m2!1spt-BR!2sat!4v1594814474637!5m2!1spt-BR!2sat" />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    images: state.apartamentos.images,
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
  };
};

export default connect(mapStateToProps)(ApartInfo);
