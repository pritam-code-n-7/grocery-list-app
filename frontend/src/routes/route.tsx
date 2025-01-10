import PageNotFound from "@/components/grocery/PageNotFound";
import MainLayout from "@/layouts/MainLayout";
import { HomePage } from "@/pages/HomePage";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<PageNotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
