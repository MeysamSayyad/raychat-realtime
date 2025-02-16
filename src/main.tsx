import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Client from "./pages/client.tsx";
import Webapp from "./pages/webapp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* route creation */}
        <Route path="/" element={<App />} />
        <Route path="/client" element={<Client />} />
        <Route path="/webapp" element={<Webapp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
