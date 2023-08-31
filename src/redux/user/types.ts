import * as actions from "./actions";

import { ActionType } from "typesafe-actions";

export interface User {
  _id?: string;
  firebaseUid?: string;
  email: string;
  password: string;
  name: string;
  favoriteCharacters?: string[];
}

export interface State {
  user: User;
  isLoading: boolean;
  error: boolean;
}

export interface InputData {
  email: string;
  password: string;
  name: string;
}

export type ActionsType = ActionType<typeof actions>;
