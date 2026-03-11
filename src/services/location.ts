import type { GeoPosition, GeoPositionResult } from "@/types";

export type GeoPositionResponse = GeoPositionResult[];

export function getCurrentPosition(): Promise<GeoPosition> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not found."));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => reject(error),
    );
  });
}

export function getCityFromPosition(
  latitude: number,
  longitude: number,
): Promise<string> {
  return new Promise((resolve, reject) => {
    fetch(
      `${import.meta.env.VITE_OPENWEATHER_API_URL}reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`,
    )
      .then((response) => response.json())
      .then((data: GeoPositionResponse) => {
        const name = data[0]?.name ?? "";
        resolve(name);
      })
      .catch((error) => reject(error));
  });
}

export function getPositionFromCity(
  name: string,
): Promise<GeoPositionResponse> {
  return new Promise((resolve, reject) => {
    fetch(
      `${import.meta.env.VITE_OPENWEATHER_API_URL}direct?q=${name}&limit=5&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`,
    )
      .then((response) => response.json())
      .then((data) => resolve(data as GeoPositionResponse))
      .catch((error) => reject(error));
  });
}
