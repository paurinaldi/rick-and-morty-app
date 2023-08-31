import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import authReducer from "./auth/reducer";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

const store = configureStore();

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
