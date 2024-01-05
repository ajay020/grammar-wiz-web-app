import { render, screen } from "@testing-library/react";

import QuizResult from "./QuizResult";

describe("QuizResult", () => {
  test("should render with correct score", () => {
    render(<QuizResult score={15} totalQuestions={20} onTryAgain={() => {}} />);

    let element = screen.getByText(
      "You answered 15 out of 20 questions correctly."
    );
    expect(element).toBeInTheDocument();
  });

  test("should render with correct message", () => {
    render(<QuizResult score={15} totalQuestions={20} onTryAgain={() => {}} />);
    let greatJob = screen.getByText("Great job!");
    expect(greatJob).toBeInTheDocument();
  });

  test("should render with correct low score message", () => {
    render(<QuizResult score={10} totalQuestions={20} onTryAgain={() => {}} />);
    let keepPracticing = screen.getByText("Keep practicing!");
    expect(keepPracticing).toBeInTheDocument();
  });
});
