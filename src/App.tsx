import "./App.css";
import ForecastCarousel from "./components/forecastCarousel/forecastCarousel";
import CurrentForecast from "./components/currentForecast/currentForecast";
import SearchBar from "./components/searchBar/searchBar.tsx";
import { useContext } from "react";
import UnitSwitch from "./components/unitSwitch/unitSwitch.tsx";
import { UnitContext, CityContext } from "./contextProvider.ts";
import { currentForecastMock, dailyCardMock } from "./mocks.ts";

export default function App() {
  const { unit } = useContext(UnitContext);
  const { city } = useContext(CityContext);
  return (
    <>
      <SearchBar />
      <UnitSwitch />
      <CurrentForecast {...currentForecastMock} unit={unit} city={city} />
      <ForecastCarousel
        header_text="7 Day Forecast"
        daily_cards={dailyCardMock}
      />
    </>
  );
}
