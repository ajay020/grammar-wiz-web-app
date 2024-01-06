import { render, screen } from "../../test-utils";

import Navbar from "./Navbar";

describe("Navbar", () => {
  test("should render", () => {
    render(<Navbar />);

    let element = screen.getByText("English Grammar Wiz");
    expect(element).toBeInTheDocument();
  });

  test("should render with correct links", () => {
    render(<Navbar />);

    let element = screen.getByText("Home");
    expect(element).toBeInTheDocument();
    element = screen.getByText("Quiz");
    expect(element).toBeInTheDocument();
    element = screen.getByText("Play");
    expect(element).toBeInTheDocument();
  });
});
