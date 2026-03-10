import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppContext } from "./contextProvider.ts";
import type { ForecastResponse } from "./types";

function AppWithUnit() {
  const [unit, setUnit] = useState("°C");
  const [city, setCity] = useState("Yerevan");
  const [country, setCountry] = useState("AM");
  const [state, setState] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weather, setWeather] = useState<ForecastResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const setPosition = (lat: number, lon: number) => {
    setLatitude(lat);
    setLongitude(lon);
  };

  return (
    <AppContext.Provider
      value={{
        unit,
        city,
        country,
        state,
        latitude,
        longitude,
        weather,
        error,
        loading,
        setLoading,
        setCountry,
        setState,
        setUnit,
        setWeather,
        setPosition,
        setCity,
        setError,
      }}
    >
      <App />
    </AppContext.Provider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWithUnit />
  </StrictMode>,
);
