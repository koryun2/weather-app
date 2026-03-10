import type { ForecastResponse } from "@/types";

export async function getWeather(
  latitude: number,
  longitude: number,
): Promise<ForecastResponse> {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&timezone=auto&timeformat=unixtime&daily=weather_code&current=weather_code`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
