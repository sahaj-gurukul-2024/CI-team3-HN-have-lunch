import {LoginPage, HomePage, AdminPage, NotFoundPage} from "../pages"
import { createBrowserRouter } from "react-router-dom";

export const path = {
  home: "/",
  login: "/login",
  admin: "/admin",
};

export const router = createBrowserRouter([
  {
    path: path.home,
    element: <HomePage />,
  },
  {
    path: path.login,
    element: <LoginPage />,
  },
  {
    path: path.admin,
    element: <AdminPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
]);
