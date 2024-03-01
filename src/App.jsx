import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/components/theme-provider";
import RootLayout from "@/layouts/RootLayout";
import { HomePage, SigninPage, SignupPage } from "@/pages";
import AuthLayout from "./layouts/AuthLayout";
import { AuthContextProvider } from "./store/auth-provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
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
