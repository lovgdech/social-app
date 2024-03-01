import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../store/auth-provider";
import Sidebar from "../components/root/Sidebar";
import Header from "../components/root/Header";

function RootLayout() {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to="/auth/sign-in" />;
  }

  return (
    <div className="w-screen flex flex-col bg-stone-100">
      <Sidebar />
      <div className="h-screen w-full overflow-hidden">
        <Header />
        <main className="h-full w-full flex flex-1 mt-5">
          <div className="w-20 h-full" />
          <div className="w-full h-full max-w-[1300px] mx-auto flex-1 overflow-hidden">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default RootLayout;
