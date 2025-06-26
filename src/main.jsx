import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import General from "./components/General.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <General></General>
  </StrictMode>
);
