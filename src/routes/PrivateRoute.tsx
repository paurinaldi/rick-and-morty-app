import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const PrivateRoute = ({ redirectPath = "/", children }: any): JSX.Element => {
  const { authUser: token } = useSelector((state: RootState) => state.auth);

  if (!token.token) {
    return <Navigate to={redirectPath} />;
  }
  return children ? children : <Outlet />;
};

export default PrivateRoute;
