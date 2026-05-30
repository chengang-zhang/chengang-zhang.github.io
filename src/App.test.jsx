import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders personal site home page", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /hey, i'm cheng/i })
  ).toBeInTheDocument();
});
