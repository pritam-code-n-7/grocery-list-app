import PageNotFound from "@/components/grocery/PageNotFound";
import MainLayout from "@/layouts/MainLayout";
import { PrivateRoute, PublicRoute } from "@/lib/helpers";
import { HomePage } from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        element: <PublicRoute />,
        children: [
          {
            path: "/signup",
            element: <SignupPage />,
          },
          {
            path: "/login",
            element: <LoginPage />,
          },
        ],
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
        ],
      },
    ],
  },
]);
