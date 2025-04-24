import { useSelector } from "react-redux";
import { Navigate } from "react-router";

import { selectIsLoggedIn } from "../redux/auth/selectors";

const RestrictedRoute = ({
  component: Component,
  redirectTo = "/recomended",
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
