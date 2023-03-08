import { Place } from "@/components/place";
import { render, screen } from "@testing-library/react";

describe("Temperature test", () => {
  test("Component rendering", () => {
    render(<Place city="Monterrey" country={"México"} />);
    const city = screen.queryByText("Monterrey");
    expect(city).toBeInTheDocument();
    const country = screen.queryByText("México");
    expect(country).toBeInTheDocument();
  });
});
