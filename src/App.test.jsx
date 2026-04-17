// src/App.test.jsx
import { render, screen, waitFor } from "@testing-library/react";
import { expect, test } from "vitest";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders portfolio app", async () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>,
  );

  await waitFor(() => {
    // Użyj realnych selektorów z Public.jsx, np.:
    expect(screen.getByText(/skills/i)).toBeInTheDocument();
    // lub
    expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
    // lub
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
