export const ICON_LIST: Record<string, string> = {
  "01d": "/icons/clear-sky-day.svg",
  "01n": "/icons/clear-sky-night.svg",
  "02d": "/icons/few-clouds-day.svg",
  "02n": "/icons/few-clouds-night.svg",
  "03": "/icons/scattered-clouds.svg",
  "04": "/icons/broken-clouds.svg",
  "09": "/icons/shower-rain.svg",
  "10d": "/icons/rain-day.svg",
  "10n": "/icons/rain-night.svg",
  "11": "/icons/thunderstorm.svg",
};

export const ICON_DEFAULT = "/icons/mist.svg";

export const getWeatherIcons = (icon: string) => {
  const sub = icon.substring(0, 2);

  if (sub === "03" || sub === "04" || sub === "09" || sub === "11") {
    return ICON_LIST[sub];
  }

  return ICON_LIST[icon] || ICON_DEFAULT;
};
