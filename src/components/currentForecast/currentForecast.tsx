import {
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

export interface CurrentForecastProps {
  header_text: string;
  city: string;
  time: string;
  unit: string;
  icon: string;
  temp: number;
  feels_like: number;
  humidity: number;
  wind_speed: number;
}

export default function CurrentForecast({
  city,
  unit,
  time,
  icon,
  temp,
  feels_like,
  humidity,
  wind_speed,
  header_text,
}: CurrentForecastProps) {
  return (
    <>
      <CurrentForecastHeader>{header_text}</CurrentForecastHeader>
      <CurrentForecastContainer>
        <InfoContainer>
          <Icon src={icon} alt={city} />
          <MainInfoContainer>
            <Local>
              {city},<Time>{time}</Time>
            </Local>

            <Temp>
              {temp}
              <Unit>{unit}</Unit>
            </Temp>
          </MainInfoContainer>
        </InfoContainer>

        <AdditionalInfoContainer>
          <FeelsLike>
            Feels Like{" "}
            <Value>
              {feels_like} {unit}
            </Value>
          </FeelsLike>
          <Humidity>
            Humidity <Value>{humidity} %</Value>
          </Humidity>
          <WindSpeed>
            Wind Speed <Value>{wind_speed} km/h</Value>
          </WindSpeed>
        </AdditionalInfoContainer>
      </CurrentForecastContainer>
    </>
  );
}
