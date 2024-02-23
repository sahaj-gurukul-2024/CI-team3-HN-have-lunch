import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.css";

import { RouterProvider } from "react-router-dom";
import { UrlContext } from "./context/UrlContext.js";
import { baseUrl, router } from "./utils/constants.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UrlContext.Provider value={baseUrl}>
      <RouterProvider router={router} />
    </UrlContext.Provider>
  </React.StrictMode>
);
