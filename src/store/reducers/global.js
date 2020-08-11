import * as actionTypes from "../actions/actionsTypes";

// isLogged is a GLOBAL STATE:
const initialState = {
  toggleSideDrawer: false,
  errorMessage: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_SIDEDRAWER:
      return {
        ...state,
        toggleSideDrawer: !state.toggleSideDrawer,
      };

    case actionTypes.HIDE_SIDEDRAWER:
      return {
        ...state,
        toggleSideDrawer: false,
      };

    case actionTypes.SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.errMessage,
      };
    default:
      return state;
  }
};

export default reducer;
