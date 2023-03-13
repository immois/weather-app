export const formatDay = (day: number) => {
  return new Date(day * 1000).toLocaleDateString("es-MX", {
    weekday: "long",
  });
};

export const formatKm = (
  /** metre/sec */
  unit: number
) => {
  const metre = 1000;
  const sec = 3600;

  const conver = (unit / metre) * sec;

  return conver.toFixed();
};
