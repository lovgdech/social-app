import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../store/auth-provider";

function AuthLayout() {
  const { isAuth } = useAuth();
  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
