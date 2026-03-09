import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { UnitContext, CityContext } from "./contextProvider.ts";

function AppWithUnit() {
  const [unit, setUnit] = useState("℃");
  const [city, setCity] = useState("Yerevan");
  return (
    <UnitContext.Provider value={{ unit, setUnit }}>
      <CityContext.Provider value={{ city, setCity }}>
        <App />
      </CityContext.Provider>
    </UnitContext.Provider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWithUnit />
  </StrictMode>,
);
