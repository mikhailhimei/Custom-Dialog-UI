import React from 'react';
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { ScriptsPage } from "../pages/ScriptActionPage/ScriptsPage";
import { CommandsPage } from "../pages/CommandPage/CommandPage"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate
            to="/scripts"
            replace
          />
        }
      />

      <Route
        path="/scripts"
        element={<ScriptsPage />}
      />

      <Route
        path="/commands"
        element={<CommandsPage />}
      />

       <Route
        path="*"
        element={
          <Navigate
            to="/scripts"
            replace
          />
        }
      />
    </Routes>
  );
};