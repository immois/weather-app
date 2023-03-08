import { PlaceProps } from "@/types/place";
import styles from "./place.module.css";

export const Place = ({ city, country }: PlaceProps) => {
  return (
    <div className={styles.place}>
      <h2 className={styles.city}>{city}</h2>
      <p className={styles.country}>{country}</p>
    </div>
  );
};
