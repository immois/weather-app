import { PlaceProps } from "@/types/place";
import Link from "next/link";
import styles from "./locations.module.css";

interface ListLocationsProps {
  loading: boolean;
  error: null | unknown;
  placesResult: PlaceProps[];
}

const LocationSkeleton = () => {
  return <div></div>;
};

export const ListLocations = ({
  loading,
  placesResult,
}: ListLocationsProps) => {
  if (loading) {
    return <LocationSkeleton />;
  }

  return (
    <>
      {placesResult.map((location) => (
        <Link
          data-place
          key={location.id}
          className={styles.card}
          href={`/location/${location.city_name}?lat=${location.lat}&long=${location.long}`}
        >
          {`${location.city_name}, ${location.country}, ${location.state}`}
        </Link>
      ))}
    </>
  );
};
