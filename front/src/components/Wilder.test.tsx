import React from "react";
import { render, screen } from "@testing-library/react";
import Wilder from "./Wilder";

test("renders Wilder with name, city and hardcoded text", () => {
  render(<Wilder name={"Alain"} city={"Paris"} skills={[]} />);
  expect(screen.getByText(/Alain/i)).toBeInTheDocument();
  expect(screen.getByText(/Paris/i)).toBeInTheDocument();
  expect(screen.getByText(/Lorem Ipsum/i)).toBeInTheDocument();
  expect(screen.getByText(/Wild Skills/i)).toBeInTheDocument();
});
