import { createContext } from "react";

export const UnitContext = createContext<{
  unit: string;
  setUnit: (unit: string) => void;
}>({
  unit: "℃",
  setUnit: () => {},
});

export const CityContext = createContext<{
  city: string;
  setCity: (city: string) => void;
}>({
  city: "",
  setCity: () => {},
});
