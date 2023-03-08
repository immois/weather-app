import { WEATHER_API, WEATHER_API_KEY } from "@/utils/constans";

export const getOpenWeather = (lat: string, long: string) => {
  const options = `&appid=${WEATHER_API_KEY}&lang=es&units=metric&exclude=alerts,minutely`;
  const API = `${WEATHER_API}?lat=${lat}&lon=${long}${options}`;

  return fetch(API)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => {
      throw new Error("Fallo la petición a Open Weather" + err?.message);
    });
};
