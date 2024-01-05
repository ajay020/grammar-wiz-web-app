import { screen, render } from "@testing-library/react";

import QuizProgress from "./QuizProgress";

describe("QuizProgress", () => {
  test("should render", () => {
    render(<QuizProgress takenQuestions={[]} />);
    let element = screen.getByTestId("quiz-progress");
    expect(element).toBeInTheDocument();
  });

  test("should render with correct number of circles", () => {
    render(
      <QuizProgress
        takenQuestions={[{ id: "1", isCorrect: false, isSolved: true }]}
      />
    );
    let element = screen.getAllByTestId("quiz-progress-circle");
    expect(element).toHaveLength(1);
  });

  test("should render with correct border color", () => {
    render(
      <QuizProgress
        takenQuestions={[
          { id: "1", isCorrect: false, isSolved: true },
          { id: "2", isCorrect: true, isSolved: true },
          { id: "3", isCorrect: false, isSolved: false },
        ]}
      />
    );
    let element = screen.getAllByTestId("quiz-progress-circle");
    expect(element[0]).toHaveClass("border-red-500");
    expect(element[1]).toHaveClass("border-green-500");
    expect(element[2]).toHaveClass("border-slate-600");
  });
});
