import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.JSX";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
  //added Just Check
);
