import { createContext } from "react";

export const GlobalContext = createContext<{
  unit: string;
  setUnit: (unit: string) => void;
  city: string;
  setCity: (city: string) => void;
}>({
  unit: "℃",
  setUnit: () => {},
  city: "",
  setCity: () => {},
});
