import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
describe("test app", () => {
  test("renders learn react link", () => {
    render(<App />);
    const helloWord = screen.getByText(/Hello/i);
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/text/i);
    expect(helloWord).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });
  test("awdawd", async () => {
    render(<App />);
    const helloWord = await screen.findByText(/data/i);
    expect(helloWord).toBeInTheDocument();
  });
  test("click", () => {
    render(<App />);
    const btn = screen.getByTestId("btn");
    expect(screen.queryByTestId("toggle")).toBeNull();
    fireEvent.click(btn);
    expect(screen.getByTestId("toggle")).toBeInTheDocument();
  });
  test("input", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/text/i);
    expect(screen.queryByTestId("input-val")).toContainHTML("");
    fireEvent.input(input, { target: { value: "awdawdawd" } });
    // userEvent.type(input,'12312')
    expect(screen.getByTestId("input-val")).toContainHTML("awdawdawd");
  });
});
