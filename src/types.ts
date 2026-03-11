export interface ForecastCurrent {
  apparent_temperature: number;
  relative_humidity_2m: number;
  temperature_2m: number;
  time: number;
  weather_code: number;
  wind_speed_10m: number;
}

export interface ForecastUnits {
  apparent_temperature: string;
  relative_humidity_2m: string;
  temperature_2m: string;
  time: string;
  weather_code: string;
  wind_speed_10m: string;
}

export interface ForecastDaily {
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  time: number[];
  weather_code: number[];
}

export interface ForecastResponse {
  current: ForecastCurrent;
  forecast_units: ForecastUnits;
  daily: ForecastDaily;
}

export interface GeoPosition {
  latitude: number;
  longitude: number;
}

export interface GeoPositionResult {
  lat: number;
  lon: number;
  name: string;
  state?: string;
  country: string;
}
