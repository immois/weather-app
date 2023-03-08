import { ICON_DEFAULT, ICON_LIST, getWeatherIcons } from "@/lib/weather";

describe("getWeatherIcons test", () => {
  test("return a string", () => {
    const result = getWeatherIcons("01d");
    expect(typeof result).toBe("string");
  });

  test("return the icon path svg", () => {
    const result = getWeatherIcons("10n");
    expect(result).toBe(ICON_LIST["10n"]);
  });

  test("return default path", () => {
    const result = getWeatherIcons("12d");
    expect(result).toBe(ICON_DEFAULT);
  });
});
