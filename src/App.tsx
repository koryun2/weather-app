import "./App.css";
import ForecastCarousel from "./components/forecastCarousel/forecastCarousel";
import CurrentForecast from "./components/currentForecast/currentForecast";
import SearchBar from "./components/searchBar/searchBar.tsx";
import { useContext, useEffect } from "react";
import UnitSwitch from "./components/unitSwitch/unitSwitch.tsx";
import { AppContext } from "./contextProvider.ts";
import {
  getCityFromPosition,
  getCurrentPosition,
} from "./services/location.ts";
import { getWeather } from "./services/weather.ts";
import Error from "./components/error/error.tsx";

export default function App() {
  const {
    unit,
    city,
    latitude,
    longitude,
    country,
    state,
    weather,
    error,
    setWeather,
    setCity,
    setPosition,
    setError,
  } = useContext(AppContext);

  useEffect(() => {
    getCurrentPosition().then((position) => {
      setPosition(position.latitude, position.longitude);
      getCityFromPosition(position.latitude, position.longitude).then(
        (city) => {
          setCity(city);
        },
      );
      getWeather(position.latitude, position.longitude).then((weatherItem) => {
        setWeather(weatherItem);
      });
    });
  }, []);

  useEffect(() => {
    if (city) {
      getWeather(latitude, longitude)
        .then((weatherItem) => {
          setWeather(weatherItem);
          setError("");
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [city, latitude, longitude]);

  return (
    <>
      <SearchBar />
      <UnitSwitch />
      {error && <Error error={error} />}
      <CurrentForecast
        country={country}
        state={state}
        weather={weather?.current ?? null}
        unit={unit}
        city={city}
        header_text={`Today's Weather in ${city}`}
      />
      <ForecastCarousel
        daily_cards={weather?.daily ?? null}
        header_text={`This Week`}
      />
    </>
  );
}
