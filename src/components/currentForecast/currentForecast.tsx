import type { ForecastCurrent } from "@/types";
import {
  Fallback,
  CurrentForecastContainer,
  Local,
  Time,
  Temp,
  FeelsLike,
  Humidity,
  WindSpeed,
  Unit,
  Icon,
  Value,
  InfoContainer,
  MainInfoContainer,
  AdditionalInfoContainer,
  CurrentForecastHeader,
} from "../currentForecast/currentForecast.styles";
import { convertTemperature, formatTime, getIconURL } from "@/utils";

export interface CurrentForecastProps {
  header_text: string;
  city: string;
  country: string;
  state: string;
  weather: ForecastCurrent | null;
  unit: string;
}

export default function CurrentForecast({
  city,
  country,
  state,
  weather,
  unit,
  header_text,
}: CurrentForecastProps) {
  return (
    <>
      {weather ? (
        <>
          <CurrentForecastHeader>{header_text}</CurrentForecastHeader>
          <CurrentForecastContainer>
            <InfoContainer>
              <Icon src={getIconURL(weather.weather_code)} alt={city} />
              <MainInfoContainer>
                <Local>
                  {city}
                  {country ? `, ${country}` : ""}
                  {state ? `, ${state} ` : ""}
                  <Time>{formatTime(weather?.time ?? 0)}</Time>
                </Local>
                <Temp>
                  {convertTemperature(
                    weather?.temperature_2m ?? 0,
                    unit,
                  ).toFixed(1)}
                  <Unit>{unit}</Unit>
                </Temp>
              </MainInfoContainer>
            </InfoContainer>

            <AdditionalInfoContainer>
              <FeelsLike>
                Feels Like{" "}
                <Value>
                  {convertTemperature(
                    weather?.apparent_temperature ?? 0,
                    unit,
                  ).toFixed(1)}
                  {unit}
                </Value>
              </FeelsLike>
              <Humidity>
                Humidity <Value>{weather?.relative_humidity_2m} %</Value>
              </Humidity>
              <WindSpeed>
                Wind Speed <Value>{weather?.wind_speed_10m} km/h</Value>
              </WindSpeed>
            </AdditionalInfoContainer>
          </CurrentForecastContainer>
        </>
      ) : (
        <Fallback>
          Sorry! Currently data is not available for this location.
        </Fallback>
      )}
    </>
  );
}
