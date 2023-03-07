import { ICON_DEFAULT, ICON_LIST, getWeatherIcons } from "@/lib/weather";

describe("funcion que retornar la ruta de un icono svg segun el icono de weather", () => {
  test("debe retornar un string", () => {
    const result = getWeatherIcons("01d");
    expect(typeof result).toBe("string");
  });

  test("debe retornar la ruta del icono svg", () => {
    const result = getWeatherIcons("10n");
    expect(result).toBe(ICON_LIST["10n"]);
  });

  test("debe retornar la ruta por default", () => {
    const result = getWeatherIcons("12d");
    expect(result).toBe(ICON_DEFAULT);
  });
});
