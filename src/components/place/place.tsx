import styles from "./place.module.css";

export const Place = ({ city_name }: { city_name: string }) => {
  return (
    <div className={styles.place}>
      <h2 className={styles.city}>{city_name}</h2>
    </div>
  );
};
