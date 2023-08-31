import { registerError, registerPending, registerSuccess } from "./actions";
import axios from "axios";
import { AppDispatch } from "../types";
import { InputData } from "./types";

const url = process.env.REACT_APP_API_URL;

export const registerUser = (inputData: InputData) => {
  return async (dispatch: AppDispatch<null>) => {
    try {
      dispatch(registerPending());
      const response = await axios.post(`${url}user`, inputData);
      return dispatch(registerSuccess(response.data.data));
    } catch (error: any) {
      return dispatch(registerError(error));
    }
  };
};
