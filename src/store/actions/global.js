import * as actionTypes from "./actionsTypes";

export const toggleSideDrawer = () => {
  return {
    type: actionTypes.TOGGLE_SIDEDRAWER,
  };
};

export const hideSideDrawer = () => {
  return {
    type: actionTypes.HIDE_SIDEDRAWER,
  };
};

export const setErrorMessage = (message) => {
  return (dispatch) => {
    dispatch(setErrorMessageExec(message));
    setTimeout(() => {
      dispatch(errorMessageEraser());
    }, 3000);
  };
};

export const setErrorMessageExec = (message) => {
  return {
    type: actionTypes.SET_ERROR_MESSAGE,
    message: message,
  };
};

export const errorMessageEraser = () => {
  return {
    type: actionTypes.SET_ERROR_MESSAGE,
    errMessage: null,
  };
};
