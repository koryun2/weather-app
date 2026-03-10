import type { DailyCardInterface } from "./types";
import type { CurrentForecastProps } from "./components/currentForecast/currentForecast";
import type { SearchBarProps } from "./components/searchBar/searchBar";

export const dailyCardMock: DailyCardInterface[] = [
  {
    weekday: "Mon",
    icon: "/icons/sun-behind-cloud.svg",
    temp_max: 20,
    temp_min: 10,
    unit: "℃",
  },
  {
    weekday: "Tue",
    icon: "/icons/sun-behind-rain-cloud.svg",
    temp_max: 22,
    temp_min: 12,
    unit: "℃",
  },
  {
    weekday: "Wed",
    icon: "/icons/sun-behind-rain-cloud.svg",
    temp_max: 18,
    temp_min: 11,
    unit: "℃",
  },
  {
    weekday: "Thu",
    icon: "/icons/sun-behind-rain-cloud.svg",
    temp_max: 16,
    temp_min: 9,
    unit: "℃",
  },
  {
    weekday: "Fri",
    icon: "/icons/sun.svg",
    temp_max: 20,
    temp_min: 10,
    unit: "℃",
  },
  {
    weekday: "Sat",
    icon: "/icons/sun.svg",
    temp_max: 20,
    temp_min: 10,
    unit: "℃",
  },
  {
    weekday: "Sun",
    icon: "/icons/sun.svg",
    temp_max: 20,
    temp_min: 10,
    unit: "℃",
  },
];

export const currentForecastMock: CurrentForecastProps = {
  header_text: "Current Forecast",
  city: "London",
  time: "12:00",
  unit: "℃",
  icon: "/icons/sun-behind-rain-cloud.svg",
  temp: 20,
  feels_like: 18,
  humidity: 50,
  wind_speed: 10,
};

export const searchBarMock: SearchBarProps = {
  input: "Search for a city",
};

export const citiesMock: string[] = [
  "London",
  "Paris",
  "Berlin",
  "Madrid",
  "Rome",
  "Lisbon",
  "Amsterdam",
  "Brussels",
  "Copenhagen",
];
