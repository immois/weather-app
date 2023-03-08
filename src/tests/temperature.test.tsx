import { Temperature } from "@/components/temperature";
import { render, screen } from "@testing-library/react";

describe("Temperature test", () => {
  test("Component rendering", () => {
    render(<Temperature tMax={28} tMin={16} />);
    const tMax = screen.queryByText("28°C");
    expect(tMax).toBeInTheDocument();
    const tMin = screen.queryByText("16°C");
    expect(tMin).toBeInTheDocument();
  });
});
