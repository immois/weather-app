import { PlaceProps } from "@/types/place";
import styles from "./search.module.css";
import { ChangeEvent, SyntheticEvent, useRef, useState } from "react";
import cs from "classnames";
import { getPlaces } from "@/services/getPlaces";
import { useRouter } from "next/router";
import { ListLocations } from "../list-locations";
import { useClickOutside } from "@/hooks/useClickOutside";

export const Search = () => {
  const [placesData, setPlacesData] = useState<PlaceProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [queryPlaces, setQueryPlaces] = useState<string>("");
  const [isFocus, setIsFocus] = useState(false);
  const [isError, setIsError] = useState<unknown>(null);
  const router = useRouter();
  const refContainer = useRef(null);

  // close search if click outside
  useClickOutside(refContainer, () => setIsFocus(false));

  // get Locales
  const fetchApi = async () => {
    setLoading(true);
    try {
      const data = await getPlaces(queryPlaces);
      setPlacesData(data);
      setLoading(false);
    } catch (error) {
      setIsError(error);
      setLoading(false);
    }
  };

  // Si se hace submit se le redigira al primer dato
  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (placesData.length >= 1) {
      const location = placesData[0];
      const path = `/location/${location.city_name}?lat=${location.lat}&long=${location.long}`;
      router.push(path);
    }
  };

  // Se hara el fetch cada 2 palabras
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQueryPlaces(e.target.value);
    if (e.target.value.length % 2 == 0) {
      fetchApi();
    }
  };

  const handleFocus = () => {
    setIsFocus(true);

    if (queryPlaces.length === 0) {
      setPlacesData([]);
    }
  };

  return (
    <div
      ref={refContainer}
      className={cs({ [styles.containerActive]: isFocus })}
    >
      <form
        className={cs(styles.search, { [styles.searchFocus]: isFocus })}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={queryPlaces}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder="Buscar lugares..."
        />
      </form>

      {isFocus && (
        <div className={styles.listWrapper}>
          <ListLocations
            placesResult={placesData}
            loading={loading}
            error={isError}
          />
        </div>
      )}
    </div>
  );
};
