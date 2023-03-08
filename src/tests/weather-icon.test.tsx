import { render, screen } from "@testing-library/react";
import { WeatherIcon } from "@/components/weather-icon";

describe("WeatherIcon test", () => {
  test("Component rendering", () => {
    render(<WeatherIcon icon="01d" description="Vientos fuertes" />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    const description = screen.queryByText("Vientos fuertes");
    expect(description).toBeInTheDocument();
  });

  test("Visually hide the weather description", () => {
    render(
      <WeatherIcon
        icon="01d"
        description="Vientos fuertes"
        hideDescription={true}
      />
    );
    const description = screen.queryByText("Vientos fuertes");
    expect(description).not.toBeInTheDocument();
  });
});
