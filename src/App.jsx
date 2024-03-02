import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/components/theme/theme-provider";
import RootLayout from "@/layouts/RootLayout";
import { HomePage, SigninPage, SignupPage } from "@/pages";
import AuthLayout from "./layouts/AuthLayout";
import { AuthContextProvider } from "./store/auth-provider";
import GroupPage from "./pages/GroupPage";
import CreateGroupPage from "./pages/CreateGroupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "groups",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <GroupPage />,
          },
          {
            path: "create",
            element: <CreateGroupPage />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SigninPage />,
      },
      {
        path: "sign-up",
        element: <SignupPage />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
