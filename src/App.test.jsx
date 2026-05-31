import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders personal site home page", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /hey, i'm cheng/i })
  ).toBeInTheDocument();
});

test("opens and navigates the photography lightbox", async () => {
  window.history.pushState({}, "", "/photography");
  const user = userEvent.setup();

  render(<App />);

  await user.click(screen.getByRole("button", { name: /the brooklyn bridge/i }));
  expect(screen.getByRole("dialog")).toBeInTheDocument();
  expect(screen.getByRole("dialog")).toHaveTextContent("The Brooklyn Bridge");

  await user.click(screen.getByRole("button", { name: /next photo/i }));
  expect(screen.getByRole("dialog")).toHaveTextContent("The Manhattan Bridge");

  await user.click(screen.getByRole("button", { name: /previous photo/i }));
  expect(screen.getByRole("dialog")).toHaveTextContent("The Brooklyn Bridge");

  await user.click(screen.getByRole("dialog"));
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

  await user.click(screen.getByRole("button", { name: /the brooklyn bridge/i }));
  await user.click(screen.getByRole("button", { name: /close enlarged photo/i }));
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});
