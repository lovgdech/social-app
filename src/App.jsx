import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import RootLayout from "@/layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";
import UserLayout from "./layouts/UserLayout";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { AuthContextProvider } from "./store/auth-provider";
import {
  HomePage,
  SigninPage,
  SignupPage,
  GroupPage,
  GroupCreatePage,
  MemberPage,
  ForumPage,
  BlogPage,
  GalleryPage,
  StorePage,
  ProfilePage,
  NotificationPage,
  UserChatPage,
  UserPhotoPage,
} from "@/pages";

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
            element: <GroupCreatePage />,
          },
        ],
      },
      {
        path: "members",
        element: <MemberPage />,
      },
      {
        path: "forums",
        element: <ForumPage />,
      },
      {
        path: "blogs",
        element: <BlogPage />,
      },
      {
        path: "photos",
        element: <GalleryPage />,
      },
      {
        path: "shops",
        element: <StorePage />,
      },
      {
        path: "user",
        element: <UserLayout />,
        children: [
          {
            path: "profile",
            element: <ProfilePage />,
          },
          {
            path: "notifications",
            element: <NotificationPage />,
          },
          {
            path: "photos",
            element: <UserPhotoPage />,
          },
          {
            path: "chats",
            element: <UserChatPage />,
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
