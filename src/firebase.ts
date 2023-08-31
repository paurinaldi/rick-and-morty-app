import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth } from "firebase/auth";
import store from "./redux/store";
import {
  loginSuccess,
  setAuthError,
  setAuthentication,
} from "./redux/auth/actions";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export const tokenListener = () => {
  auth.onIdTokenChanged(async (user) => {
    try {
      if (user) {
        const { token } = await user.getIdTokenResult(true);
        store.dispatch(
          loginSuccess({
            token,
          })
        );
      } else {
        store.dispatch(
          setAuthentication({
            token: "",
          })
        );
      }
    } catch (error: any) {
      store.dispatch(setAuthError(error));
    }
  });
};

export default firebaseApp;
