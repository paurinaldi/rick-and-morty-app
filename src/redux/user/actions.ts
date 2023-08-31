import { action } from "typesafe-actions";

import { Actions } from "./constants";
import { User } from "./types";

export const registerPending = () => action(Actions.REGISTER_USER_PENDING);
export const registerSuccess = (user: User) =>
  action(Actions.REGISTER_USER_SUCCESS, user);
export const registerError = (error: string) =>
  action(Actions.REGISTER_USER_ERROR, error);
