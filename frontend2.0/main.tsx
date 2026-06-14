import React from "react";
import ReactDOM from "react-dom/client";

import { HashRouter } from "react-router-dom";

import { App } from "./src/app/App";

import { DialogProvider } from "./src/context/DialogProvider";

import styles from "./src/styles/global.scss";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <HashRouter>
      <DialogProvider>
        <App />
      </DialogProvider>
    </HashRouter>
  </React.StrictMode>
);