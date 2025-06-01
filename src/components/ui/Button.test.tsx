// components/ui/button.test.tsx
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
  });

//   it("calls onClick when clicked", () => {
//     const onClick = jest.fn();
//     render(<Button onClick={onClick}>Click me</Button>);
//     fireEvent.click(screen.getByText(/click me/i));
//     expect(onClick).toHaveBeenCalledTimes(1);
//   });

//   it("is disabled when disabled prop is true", () => {
//     render(<Button disabled>Disabled</Button>);
//     const btn = screen.getByText(/disabled/i) as HTMLButtonElement;
//     expect(btn).toBeDisabled();
//   });
});
