import React from 'react';
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { ScriptsPage } from "../pages/ScriptActionsPage/ScriptsPage";
import { CommandMainPage } from "../pages/CommandPage/CommandMainPage/CommandMainPage";
import { CommandSubPage } from "../pages/CommandPage/CommandSubPage/CommandSubPage";
import { CommandDirectPage } from "../pages/CommandPage/CommandDirectPage/CommandDirectPage";
import { CommandDirectTemplatePage } from "../pages/CommandPage/CommandDirectTemplatePage/CommandDirectTemplatePage";
import { CommandSettingsPage } from "../pages/CommandPage/CommandSettingsPage/CommandSettingsPage";
import { SettingsPage } from "../pages/SettingsPage/SettingsPage"
import { TimerPage } from "../pages/TimerAlarmPages/TimerPage";
import { AlarmPage } from "../pages/TimerAlarmPages/AlarmPage";

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
        path="/timer"
        element={<TimerPage />}
      />

      <Route
        path="/alarm"
        element={<AlarmPage />}
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
