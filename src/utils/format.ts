export const formatDay = (day: number) => {
  return new Date(day * 1000).toLocaleDateString("es-MX", {
    weekday: "long",
  });
};
