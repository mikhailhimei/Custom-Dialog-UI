import React from "react";
import ReactDOM from "react-dom/client";

import ScenarioPage from "./page/ScenarioPage";
import { DialogProvider } from "./src/context/DialogProvider";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <DialogProvider>
      <ScenarioPage />
    </DialogProvider>
  </React.StrictMode>
);