import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import General from "./components/GeneralForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App></App>
    {/* <General></General> */}
  </StrictMode>
);
