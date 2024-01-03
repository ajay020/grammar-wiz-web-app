import { render, screen } from "@testing-library/react";
import LessonDetails from "./LessonDetails";
import { ThemeProvider } from "../../theme/ThemeContext";

describe("LessonDetails", () => {
  test("should render with correct title", () => {
    render(<LessonDetails lesson={{ id: "1", title: "Test" }} />, {
      wrapper: ThemeProvider,
    });

    let element = screen.getByText("Test");

    expect(element).toBeInTheDocument();
  });
});
