import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../store/auth-provider";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function RootLayout() {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to="/auth/sign-in" />;
  }

  return (
    <div className="w-screen flex flex-col bg-stone-100">
      <Sidebar />
      <div className="h-screen overflow-hidden overflow-y-scroll scroll-smooth">
        <Header />
        <main className="flex flex-1 mt-5">
          <div className="w-20 h-20" />
          <div className="flex-1">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default RootLayout;
