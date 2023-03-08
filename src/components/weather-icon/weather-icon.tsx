import { getWeatherIcons } from "@/lib/weather";
import { WeatherIconProps } from "@/types/weather";
import { getSizeIcons } from "@/utils/getSizeIcons";
import Image from "next/image";
import styles from "./weather-icon.module.css";
import cs from "classnames";

export const WeatherIcon = ({
  icon,
  size = "md",
  description,
  hideDescription = false,
}: WeatherIconProps) => {
  const srcImg = getWeatherIcons(icon);
  const sizeImg = getSizeIcons(size);
  return (
    <div className={styles.container}>
      <Image
        src={srcImg}
        alt={description}
        width={sizeImg}
        height={sizeImg}
        priority
      />
      {!hideDescription && (
        <p
          className={cs({
            [styles.xl]: size === "xl",
            [styles.sm]: size === "sm",
          })}
        >
          {description}
        </p>
      )}
    </div>
  );
};
