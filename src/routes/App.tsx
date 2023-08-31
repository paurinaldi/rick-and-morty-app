import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { tokenListener } from "../firebase";
import { useAppSelector, RootState } from "../redux/store";

const App = () => {
  const { authUser: token } = useAppSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const Login = React.lazy(() => import("../components/Login"));
  const Register = React.lazy(() => import("../components/Register"));
  const PrivateRoute = React.lazy(() => import("./PrivateRoute"));
  const Home = React.lazy(() => import("../components/Home"));
  const Favourites = React.lazy(() => import("../components/Favourites"));

  useEffect(() => {
    tokenListener();
  }, []);

  useEffect(() => {
    if (token.token) {
      pathname === "/" ? navigate("/home") : navigate(pathname);
    }
  }, [navigate, pathname, token]);

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/favourites"
          element={
            <PrivateRoute>
              <Favourites />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </React.Suspense>
  );
};
export default App;
