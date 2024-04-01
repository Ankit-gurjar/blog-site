import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import "react-toastify/dist/ReactToastify.css";
import { CookiesProvider } from "react-cookie";
import { HashRouter } from "react-router-dom";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      {/* <CookiesProvider defaultSetOptions={{ path: "/" }}> */}
      <App />
      {/* </CookiesProvider> */}
    </HashRouter>
  </React.StrictMode>
);
