import { Reducer } from "redux";

import { Actions } from "./constants";
import { ActionsType, State } from "./types";

const initialState: State = {
  user: {
    _id: undefined,
    email: "",
    password: "",
    name: "",
    favoriteCharacters: undefined,
    firebaseUid: "",
  },
  isLoading: true,
  error: false,
};

const userReducer: Reducer<State, ActionsType> = (
  state = { ...initialState },
  action
): State => {
  switch (action.type) {
    case Actions.REGISTER_USER_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case Actions.REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
      };
    case Actions.REGISTER_USER_ERROR:
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
