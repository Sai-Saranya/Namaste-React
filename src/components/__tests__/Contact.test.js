import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

test("Should load contact us component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading", { name: "Contact Us page" });
  expect(heading).toBeInTheDocument();
});

