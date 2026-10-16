import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

const canonical = () =>
  document.head.querySelector('link[rel="canonical"]')?.getAttribute("href");

test("home page has its own title, canonical and a single h1", () => {
  renderAt("/");
  expect(document.title).toBe(
    "Triple Moon | Spiritual Workshops & Wellness in Essex",
  );
  expect(canonical()).toBe("https://triplemoon.co.uk/");
  expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  expect(document.querySelectorAll("#contact")).toHaveLength(1);
});

test("sub pages get their own title, canonical and h1", () => {
  renderAt("/coaching");
  expect(document.title).toBe("1:1 Life Coaching | Triple Moon");
  expect(canonical()).toBe("https://triplemoon.co.uk/coaching");
  expect(
    screen.getByRole("heading", { level: 1, name: /1:1 Life Coaching/ }),
  ).toBeInTheDocument();
  expect(document.querySelectorAll("#contact")).toHaveLength(1);
});

test("old mixed-case links still work and point to the lowercase canonical", () => {
  renderAt("/SabbatWorkshops");
  expect(
    screen.getByRole("heading", { level: 1, name: /Cyclical Living/ }),
  ).toBeInTheDocument();
  expect(canonical()).toBe("https://triplemoon.co.uk/sabbatworkshops");
});

test("resources load without an API and can be filtered", () => {
  renderAt("/resources");
  const cards = () => document.querySelectorAll(".resourcesLetterBlock .card");
  const all = cards().length;
  expect(all).toBeGreaterThan(100);

  fireEvent.change(screen.getByLabelText("Filter by type"), {
    target: { value: "Crystal" },
  });
  expect(cards().length).toBeGreaterThan(0);
  expect(cards().length).toBeLessThan(all);
  fireEvent.change(screen.getByLabelText("Filter by type"), {
    target: { value: "All" },
  });

  fireEvent.change(screen.getByLabelText("Filter by intention"), {
    target: { value: "protection" },
  });
  expect(cards().length).toBeGreaterThan(3);

  fireEvent.change(screen.getByLabelText("Search resources"), {
    target: { value: "zzzz-no-match" },
  });
  expect(screen.getByText("No matches found.")).toBeInTheDocument();
});

test("unknown URLs show a noindex 404 page", () => {
  renderAt("/no-such-page");
  expect(
    screen.getByRole("heading", { level: 1, name: "Page not found" }),
  ).toBeInTheDocument();
  expect(
    document.head.querySelector('meta[name="robots"]').getAttribute("content"),
  ).toBe("noindex");
});
