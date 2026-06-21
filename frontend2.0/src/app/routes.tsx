import React from 'react';
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { ScriptsPage } from "../pages/ScriptActionsPage/ScriptsPage";
import { CommandMainPage } from "../pages/CommandMainPage/CommandMainPage";
import { CommandSubPage } from "../pages/CommandSubPage/CommandSubPage";
import { CommandDirectPage } from "../pages/CommandDirectPage/CommandDirectPage";
import { CommandDirectTemplatePage } from "../pages/CommandDirectTemplatePage/CommandDirectTemplatePage";
import { CommandSettingsPage } from "../pages/CommandSettingsPage/CommandSettingsPage";
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
        element={
          <Navigate
            to="/commands/main"
            replace
          />
        }
      />

      <Route
        path="/commands/main"
        element={<CommandMainPage />}
      />

      <Route
        path="/commands/sub"
        element={<CommandSubPage />}
      />

      <Route
        path="/commands/direct"
        element={
          <Navigate
            to="/commands/direct/main"
            replace
          />
        }
      />

      <Route
        path="/commands/direct/main"
        element={<CommandDirectPage />}
      />

      <Route
        path="/commands/direct/template"
        element={<CommandDirectTemplatePage />}
      />

      <Route
        path="/commands/settings"
        element={<CommandSettingsPage />}
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
