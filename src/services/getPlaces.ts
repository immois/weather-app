import { PlaceProps } from "@/types/place";
import { RESERVAMOS_API } from "@/utils/constans";

export const getPlaces = (slug: string) => {
  const API = `${RESERVAMOS_API}?q=${slug}`;

  return fetch(API)
    .then((res) => res.json())
    .then((data: PlaceProps[]) => data)
    .catch((err) => {
      throw new Error("Fallo la petición a Reservamos" + err?.message);
    });
};
