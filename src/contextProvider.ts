import { createContext } from "react";
import type { ForecastResponse } from "./types";

export const AppContext = createContext<{
  unit: string;
  city: string;
  country: string;
  state: string;
  latitude: number;
  longitude: number;
  weather: ForecastResponse | null;
  error: string | null;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setUnit: (unit: string) => void;
  setWeather: (weather: ForecastResponse) => void;
  setPosition: (latitude: number, longitude: number) => void;
  setCity: (city: string) => void;
  setCountry: (country: string) => void;
  setState: (state: string) => void;
  setError: (error: string) => void;
}>({
  error: null,
  unit: "°C",
  city: "",
  country: "",
  state: "",
  latitude: 0,
  longitude: 0,
  weather: null,
  loading: false,
  setLoading: () => {},
  setError: () => {},
  setCountry: () => {},
  setState: () => {},
  setUnit: () => {},
  setWeather: () => {},
  setPosition: () => {},
  setCity: () => {},
});
