import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Home.jsx'; 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { UrlContext } from './context/UrlContext.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

const baseUrl = `http://${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}/`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UrlContext.Provider value={baseUrl}>
      <RouterProvider router={router} />
    </UrlContext.Provider>
  </React.StrictMode>,
)
