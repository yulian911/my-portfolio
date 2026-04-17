import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { test, expect } from "vitest";
import App from "./App";

test("renders public page footer", async () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>,
  );

  expect(await screen.findByText(/J4SK13R/i)).toBeInTheDocument();
  expect(screen.getByText(/ALL RIGHTS RESERVED/i)).toBeInTheDocument();
});
