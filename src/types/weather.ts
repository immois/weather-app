import { SizeIcons } from "./global";

export interface WeatherIconProps {
  /** Weather icon */
  icon: string;
  /** Weather icon size
   * @default 'md'
   */
  size?: SizeIcons;
  /** Weather description */
  description: string;
  /** Visually hide the weather description
   * @default false
   */
  hideDescription?: boolean;
}

interface Weather {
  icon: string;
  description: string;
}

export interface WeatherDailyData {
  temp: {
    max: number;
    min: number;
  };
  wind_speed: string;
  humidity: number;
  weather: Weather[];
  sunrise: number;
  sunset: number;
  dt: number;
}

export interface WeatherHourlyData {
  dt: number;
  temp: number;
  humidity: number;
  weather: Weather;
}
