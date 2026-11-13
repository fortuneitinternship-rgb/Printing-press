
import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Wishlist from "./Wishlist";

const renderWishlist = () => {
  return render(
    <MemoryRouter>
      <Wishlist />
    </MemoryRouter>
  );
};

describe("Wishlist Page Tests", () => {

  it("1. should render the Wishlist page", () => {
    renderWishlist();

    expect(
      screen.getByRole("heading", { name: /My Wishlist/i })
    ).toBeInTheDocument();
  });

  it("2. should display My Wishlist heading", () => {
    renderWishlist();

    expect(
      screen.getByRole("heading", { level: 1, name: /My Wishlist/i })
    ).toBeInTheDocument();
  });

  it("3. should display Premium Wedding Card", () => {
    renderWishlist();

    expect(
      screen.getByRole("heading", {
        level: 5,
        name: "Premium Wedding Card"
      })
    ).toBeInTheDocument();
  });

  it("4. should display product starting price", () => {
    renderWishlist();

    expect(
      screen.getByText("Starting from ₹40")
    ).toBeInTheDocument();
  });

  it("5. should display Remove button", () => {
    renderWishlist();

    expect(
      screen.getByRole("button", { name: "Remove" })
    ).toBeInTheDocument();
  });

  it("6. should have danger outline styling on Remove button", () => {
    renderWishlist();

    expect(
      screen.getByRole("button", { name: "Remove" })
    ).toHaveClass("btn", "btn-outline-danger", "me-2");
  });

  it("7. should display View Details link", () => {
    renderWishlist();

    expect(
      screen.getByRole("link", { name: "View Details" })
    ).toBeInTheDocument();
  });

  it("8. should navigate to product details page", () => {
    renderWishlist();

    expect(
      screen.getByRole("link", { name: "View Details" })
    ).toHaveAttribute("href", "/products/3");
  });

  it("9. should have primary Bootstrap styling on View Details", () => {
    renderWishlist();

    expect(
      screen.getByRole("link", { name: "View Details" })
    ).toHaveClass("btn", "btn-primary");
  });

  it("10. should display Bootstrap container", () => {
    const { container } = renderWishlist();

    expect(
      container.querySelector(".container")
    ).toBeInTheDocument();
  });

  it("11. should display Wishlist product card", () => {
    const { container } = renderWishlist();

    expect(
      container.querySelector(".card")
    ).toHaveClass("p-4", "mt-4");
  });

  it("12. should display product details inside the card", () => {
    renderWishlist();

    const card = screen.getByRole("heading", {
      name: "Premium Wedding Card"
    }).closest(".card");

    expect(card).toBeInTheDocument();

    expect(
      within(card).getByText("Starting from ₹40")
    ).toBeInTheDocument();

    expect(
      within(card).getByRole("button", { name: "Remove" })
    ).toBeInTheDocument();

    expect(
      within(card).getByRole("link", { name: "View Details" })
    ).toBeInTheDocument();
  });

});
