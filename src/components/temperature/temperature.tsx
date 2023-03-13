import styles from "./temperature.module.css";

interface TemperatureProps {
  /** Temperatura mínima */
  tMax: number;
  /** Temperatura máxima */
  tMin?: number;
  humidity?: number;
}

export const Temperature = ({ tMax, tMin, humidity }: TemperatureProps) => {
  return (
    <div className={styles.temp}>
      <span className={styles.max}>{tMax.toFixed(0)}°C</span>
      {tMin && <span className={styles.min}>{tMin.toFixed(0)}°C</span>}
      {humidity && (
        <div className={styles.humidity}>
          <span>Humedad</span>
          <span>{humidity}</span>
        </div>
      )}
    </div>
  );
};
