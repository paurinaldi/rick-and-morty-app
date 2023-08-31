import { auth } from "../../firebase";
import { loginError, loginPending, loginSuccess } from "./actions";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { InputData } from "./types";
import { AppDispatch } from "../types";

export const login = (inputData: InputData) => {
  return async (dispatch: AppDispatch<null>) => {
    try {
      dispatch(loginPending());
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        inputData.email,
        inputData.password
      );

      const { token } = await userCredentials.user.getIdTokenResult();

      dispatch(
        loginSuccess({
          token: token,
        })
      );
    } catch (error: any) {
      return dispatch(loginError(error));
    }
  };
};
