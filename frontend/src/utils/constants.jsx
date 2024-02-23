import Login from "../Login.jsx";
import Home from "../Home.jsx";
import Admin from "../Admin.jsx";
import { createBrowserRouter } from "react-router-dom"

export const path = {
    "home": "/",
    "login": "/login",
    "admin": "/admin"
}

export const router = createBrowserRouter([
    {
        path: path.home,
        element: <Home />,
    },
    {
        path: path.login,
        element: <Login />,
    },
    {
        path: path.admin,
        element: <Admin />,
    },
]);
  
export const baseUrl = import.meta.env.PROD ? `http://${import.meta.env.VITE_API_URL}`:`http://${import.meta.env.VITE_API_URL}:${
    import.meta.env.VITE_API_PORT
}`;