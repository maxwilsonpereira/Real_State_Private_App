import * as actionTypes from "./actionsTypes";

import apartamentos from "../../databaseLocal/apartamentos";
import imagesArray from "../../databaseLocal/images/_images";

export const showInfoAp = (id) => {
  return {
    type: actionTypes.SHOW_INFO_AP,

    imagesArray: imagesArray[id],
    empresa: apartamentos[id].empresa,
    id: apartamentos[id].id,
    contato: apartamentos[id].contato,
    telefone: apartamentos[id].telefone,
    endereco: apartamentos[id].endereco,
    cidade: apartamentos[id].cidade,
    bairro: apartamentos[id].bairro,
    inscricao: apartamentos[id].inscricao,
    valorComprado: apartamentos[id].valorComprado,
    valorAtual: apartamentos[id].valorAtual,
    valorVenal: apartamentos[id].valorVenal,
    valorIptu: apartamentos[id].valorIptu,
    aluguel: apartamentos[id].aluguel,
    luva: apartamentos[id].luva,
    areaTerreno: apartamentos[id].areaTerreno,
    areaEdificada: apartamentos[id].areaEdificada,
    socios: apartamentos[id].socios,
    participacao: apartamentos[id].participacao,
    titulo: apartamentos[id].titulo,
    descricao: apartamentos[id].descricao,
    locationMap: apartamentos[id].locationMap,
  };
};

// empresa,
// endereco,
// cidade,
// inscricao,
// valorComprado,
// valorAtual,
// valorVenal,
// valorIptu,
// aluguel,
// luva,
// areaTerreno,
// areaEdificada,
// socios,
// participacao
