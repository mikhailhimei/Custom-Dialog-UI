import React from 'react';
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { ScriptsPage } from "../pages/ScriptActionPage/ScriptsPage";

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
        path="/locations"
        element={<div>Locations</div>}
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