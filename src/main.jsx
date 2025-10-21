import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import "./main.css";
import Home from "./pages/Home";
import Layout from "./Layout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
