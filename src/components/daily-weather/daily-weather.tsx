import { WeatherDailyData } from "@/types/weather";
import styles from "./daily-weather.module.css";
import { WeatherIcon } from "../weather-icon";
import { formatDay } from "@/utils/format";
import { Temperature } from "../temperature";
import cs from "classnames";

interface HourlyWeather {
  daily: WeatherDailyData[];
}

export const DailyWeather = ({ daily }: HourlyWeather) => {
  const higherHumidity = daily.map((day) => day.humidity).sort((a, b) => b - a);
  const indexHigherHumidity = daily.findIndex(
    (hum) => hum.humidity === higherHumidity[0]
  );

  return (
    <div className={styles.listCard}>
      <h2>Pronostico para 7 días</h2>
      {daily.length > 0 &&
        daily.map((hour, index) => {
          const dayHigherHumidity = indexHigherHumidity === index;

          if (index === 0) {
            return null;
          }
          return (
            <div
              className={cs(styles.card, {
                [styles.moreHumidity]: dayHigherHumidity,
              })}
              key={index}
            >
              {dayHigherHumidity && (
                <p className={styles.higherHumidity}>Dia con mayor humedad</p>
              )}
              <div>
                <h3>{formatDay(hour.dt)}</h3>
                <Temperature tMax={hour.temp.max} tMin={hour.temp.min} />
              </div>
              <WeatherIcon
                icon={hour.weather[0].icon}
                size="sm"
                description={hour.weather[0].description}
                hideDescription
              />
            </div>
          );
        })}
      <div></div>
    </div>
  );
};
