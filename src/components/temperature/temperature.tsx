import styles from "./temperature.module.css";

interface TemperatureProps {
  /** Temperatura mínima */
  tMax: number;
  /** Temperatura máxima */
  tMin?: number;
}

export const Temperature = ({ tMax, tMin }: TemperatureProps) => {
  return (
    <div className={styles.temp}>
      <span className={styles.max}>{tMax.toFixed(0)}°C</span>
      {tMin && <span className={styles.min}>{tMin.toFixed(0)}°C</span>}
    </div>
  );
};
