import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders personal site home page", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /hey, i'm cheng/i })
  ).toBeInTheDocument();
});

test("renders project cards with repository links", () => {
  window.history.pushState({}, "", "/projects");

  render(<App />);

  expect(
    screen.getByRole("heading", { name: "TransitBar" }).closest("a")
  ).toHaveAttribute("href", "https://github.com/chengang-zhang/TransitBar");
  expect(
    screen.getByRole("heading", { name: "TransitBar-GTFS" }).closest("a")
  ).toHaveAttribute("href", "https://github.com/chengang-zhang/TransitBar-GTFS");
  expect(
    screen.getByRole("heading", { name: "Oneshots" }).closest("a")
  ).toHaveAttribute("href", "https://github.com/Brauntt/Oneshots");
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
