export function formatTime(time: number) {
  return new Date(time * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

const WMO_TO_OWM_ICON: Record<number, string> = {
  0: "01d",
  1: "02d",
  2: "02d",
  3: "03d",
  45: "50d",
  48: "50d",
  51: "09d",
  53: "09d",
  55: "09d",
  56: "09d",
  57: "09d",
  61: "10d",
  63: "10d",
  65: "10d",
  66: "10d",
  67: "10d",
  71: "13d",
  73: "13d",
  75: "13d",
  77: "13d",
  80: "09d",
  81: "09d",
  82: "09d",
  85: "13d",
  86: "13d",
  95: "11d",
  96: "11d",
  99: "11d",
};

const OWM_ICON_BASE = "https://openweathermap.org/payload/api/media/file";

export function getIconURL(weather_code: number) {
  const icon = WMO_TO_OWM_ICON[weather_code] ?? "01d";
  return `${OWM_ICON_BASE}/${icon}.png`;
}

export function getWeekday(weekday_unix: number) {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return weekdays[new Date(weekday_unix * 1000).getDay()];
}

export function convertTemperature(temperature: number, unit: string) {
  if (unit === "°C") {
    return temperature;
  } else {
    return (temperature * 9) / 5 + 32;
  }
}
