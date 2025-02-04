import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/box.css";
import App from "./App.jsx";
//import Hola from "./modulo/Hola";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
