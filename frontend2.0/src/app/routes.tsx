import React from 'react';
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { ScriptsPage } from "../pages/ScriptActionsPage/ScriptsPage";
import { CommandsPage } from "../pages/CommandPage/CommandPage"
import { SettingsPage } from "../pages/SettingsPage/SettingsPage"

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
        path='/settings'
        element= {<SettingsPage />}
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