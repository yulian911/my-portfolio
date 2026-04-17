import { render, screen, waitFor } from "@testing-library/react";
import { expect, test } from "vitest";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders portfolio app", async () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      {" "}
      {/* symuluje stronę główną */}
      <App />
    </MemoryRouter>,
  );

  // Poczekaj na lazy loading z Suspense
  await waitFor(() => {
    expect(screen.getByRole("heading")).toBeInTheDocument(); // dostosuj
  });
});
