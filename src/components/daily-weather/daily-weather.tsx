import { WeatherDailyData } from "@/types/weather";
import styles from "./daily-weather.module.css";
import { WeatherIcon } from "../weather-icon";
import { formatDay } from "@/utils/format";
import { Temperature } from "../temperature";
import cs from "classnames";

interface HourlyWeather {
  hourly: WeatherDailyData[];
  moreHumidity: number;
}

export const DailyWeather = ({ hourly, moreHumidity }: HourlyWeather) => {
  return (
    <div className={styles.listCard}>
      <h2>Pronostico para 7 días</h2>
      {hourly.length > 0 &&
        hourly.map((hour, index) => {
          if (index === 0) {
            return null;
          }
          return (
            <div
              className={cs(styles.card, {
                [styles.moreHumidity]: moreHumidity === index,
              })}
              key={index}
            >
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
