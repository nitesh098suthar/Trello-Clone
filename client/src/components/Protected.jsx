import { Navigate } from "react-router-dom";
export const Protected = ({ isAuth, children }) => {
  if (!isAuth) {
    return <Navigate to="/" replace />;
  }
  return children;
};
