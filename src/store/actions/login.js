import * as actionTypes from "./actionsTypes";

export const login = (email, password) => {
  let error = false;
  return (dispatch) => {
    // fetch().then().catch();
    // INSIDE THEN():
    if (false) {
      // EMAIL NÃO CADASTRADO
      dispatch(loginExec(false, password, error));
    } else if (false) {
      // SENHA INVÁLIDA
      dispatch(loginExec(email, false, error));
    } else {
      dispatch(loginExec(email, password, error));
    }
  };
};

export const loginExec = (email, password, error) => {
  if (!email) {
    return {
      type: actionTypes.LOGIN,
      validLogin: false,
      errMessage: "Email não cadastrado!",
    };
  } else if (!password) {
    return {
      type: actionTypes.LOGIN,
      validLogin: false,
      errMessage: "Senha incorreta!",
    };
  } else if (error) {
    return {
      type: actionTypes.LOGIN,
      validLogin: false,
      errMessage: "Erro de conexão. Favor entrar em contato.",
    };
  } else {
    return {
      type: actionTypes.LOGIN,
      validLogin: true,
      email: email,
    };
  }
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};
