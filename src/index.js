import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecoveryPage from "./Pages/RecoveryPage";
import CloudPage from "./Pages/CloudPage";
import ContactPage from "./Pages/ContactPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recoverypage" element={<RecoveryPage />} />
      <Route path="/cloudpage" element={<CloudPage />} />
      <Route path="/contactpage" element={<ContactPage />} />
    </Routes>
  </BrowserRouter>
);
