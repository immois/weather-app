import Image from "next/image";
import styles from "./details-weather.module.css";
import { formatKm } from "@/utils/format";

interface DetailsWeatherProps {
  humidity?: number;
  pressure?: number;
  uvi?: number;
  wind_gust?: number;
}

export const DetailsWeather = ({
  humidity,
  pressure,
  uvi,
  wind_gust = 0,
}: DetailsWeatherProps) => {
  const data = [
    { name: "humedad", value: `${humidity}%`, icon: "/icons/humidity.svg" },
    {
      name: "presión",
      value: `${pressure} hPa`,
      icon: "/icons/pressure.svg",
    },
    { name: "uv", value: uvi?.toFixed(), icon: "/icons/uv.svg" },
    {
      name: "viento",
      value: `${formatKm(wind_gust)} km/h`,
      icon: "/icons/wind.svg",
    },
  ];

  return (
    <div className={styles.details}>
      {data.map((item, index) => (
        <div key={index + item.name} className={styles.card}>
          <Image src={item.icon} alt={item.name} width={28} height={28} />
          <span>{item.value}</span>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};
