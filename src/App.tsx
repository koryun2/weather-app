import "./App.css";
import ForecastCarousel from "@components/forecastCarousel/forecastCarousel";
import CurrentForecast from "@components/currentForecast/currentForecast";
import SearchBar from "@components/searchBar/searchBar";
import { useContext, useEffect } from "react";
import UnitSwitch from "@components/unitSwitch/unitSwitch";
import { AppContext } from "@/contextProvider";
import {
  getCityFromPosition,
  getCurrentPosition,
} from "@services/location";
import { getWeather } from "@services/weather";
import Error from "@components/error/error";
import Footer from "@components/footer/footer";
import Loading from "@components/loading/loading";

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
    loading,
    setWeather,
    setCity,
    setPosition,
    setError,
    setLoading,
  } = useContext(AppContext);

  useEffect(() => {
    getCurrentPosition()
      .then((position) => {
        setPosition(position.latitude, position.longitude);
        getCityFromPosition(position.latitude, position.longitude).then(
          (cityName) => setCity(cityName),
        );
      })
      .catch((err) => setError(err?.message ?? "Failed to load"));
  }, []);

  useEffect(() => {
    if (!city || (latitude === 0 && longitude === 0)) return;
    setLoading(true);
    getWeather(latitude, longitude)
      .then((weatherItem) => {
        setWeather(weatherItem);
        setError("");
      })
      .catch((err) => setError(err?.message ?? "Failed to load"))
      .finally(() => setLoading(false));
  }, [city, latitude, longitude]);

  return (
    <>
      <SearchBar />
      <UnitSwitch />
      {error && <Error error={error} />}
      {loading ? (
        <Loading />
      ) : (
        <>
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
      )}
      <Footer />
    </>
  );
}
