import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "./theme/ThemeContext";

const AllTheProviders = ({ children }) => {
  return (
    <Router>
      <ThemeProvider>{children}</ThemeProvider>
    </Router>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
