import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./pages/registration/LoginPage";
import Dashboard from "./pages/screens/Dashboard";
import NotFoundPage from "./pages/registration/NotFoundPage";


function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFoundPage />} />

    </Routes>
  );
}

export default Router;