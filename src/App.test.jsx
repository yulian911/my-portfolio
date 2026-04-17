// src/App.test.jsx
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App"; // dostosuj ścieżkę do głównego komponentu

test("renders portfolio app", () => {
  render(<App />);
  expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
});
