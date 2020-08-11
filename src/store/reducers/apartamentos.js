import * as actionTypes from "../actions/actionsTypes";
import { act } from "react-dom/test-utils";

// isLogged is a GLOBAL STATE:
const initialState = {
  // apartamentos: [
  //   {
  images: [],
  id: null,
  empresa: "",
  contato: "",
  telefone: "",
  endereco: "",
  cidade: "",
  bairro: "",
  inscricao: null,
  valorComprado: null,
  valorAtual: null,
  valorVenal: null,
  valorIptu: null,
  aluguel: null,
  luva: null,
  areaTerreno: null,
  areaEdificada: null,
  socios: "",
  participacao: null,
  titulo: "",
  descricao: "",
  locationMap: "",
  //   },
  // ],
  errorMessage: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_INFO_AP:
      return {
        ...state,
        images: action.imagesArray,
        id: action.id,
        empresa: action.empresa,
        contato: action.contato,
        telefone: action.telefone,
        endereco: action.endereco,
        cidade: action.cidade,
        bairro: action.bairro,
        inscricao: action.inscricao,
        valorComprado: action.valorComprado,
        valorAtual: action.valorAtual,
        valorVenal: action.valorVenal,
        valorIptu: action.valorIptu,
        aluguel: action.aluguel,
        luva: action.luva,
        areaTerreno: action.areaTerreno,
        areaEdificada: action.areaEdificada,
        socios: action.socios,
        participacao: action.participacao,
        titulo: action.titulo,
        descricao: action.descricao,
        locationMap: action.locationMap,
      };
    default:
      return state;
  }
};

export default reducer;
