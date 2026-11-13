
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Cart from "./Cart";

describe("Cart Component Testing", () => {

  it("should render the Cart component", () => {
    const { container } = render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    expect(
      container.querySelector(".container")
    ).toBeInTheDocument();
  });

  it("should display the Your Cart heading", () => {
    render(<MemoryRouter><Cart /></MemoryRouter>);

    expect(
      screen.getByRole("heading", { name: "Your Cart" })
    ).toBeInTheDocument();
  });

  it("should display the product name", () => {
    render(<MemoryRouter><Cart /></MemoryRouter>);

    expect(
      screen.getByRole("heading", { name: "Premium Wedding Card" })
    ).toBeInTheDocument();
  });

  it("should display the product quantity", () => {
    render(<MemoryRouter><Cart /></MemoryRouter>);

    expect(screen.getByText("Quantity: 200")).toBeInTheDocument();
  });

  it("should display the paper type", () => {
    render(<MemoryRouter><Cart /></MemoryRouter>);

    expect(screen.getByText("Paper: Textured")).toBeInTheDocument();
  });

  it("should display the estimated total", () => {
    render(<MemoryRouter><Cart /></MemoryRouter>);

    expect(
      screen.getByRole("heading", {
        name: "Estimated Total: ₹8,000"
      })
    ).toBeInTheDocument();
  });

  it("should display the Remove button", () => {
    render(<MemoryRouter><Cart /></MemoryRouter>);

    expect(
      screen.getByRole("button", { name: "Remove" })
    ).toBeInTheDocument();
  });

  it("should display the Continue link", () => {
    render(<MemoryRouter><Cart /></MemoryRouter>);

    expect(
      screen.getByRole("link", { name: "Continue" })
    ).toBeInTheDocument();
  });

  it("should navigate to checkout", () => {
    render(<MemoryRouter><Cart /></MemoryRouter>);

    expect(
      screen.getByRole("link", { name: "Continue" })
    ).toHaveAttribute("href", "/checkout");
  });

  it("should display the cart card", () => {
    const { container } = render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    expect(
      container.querySelector(".card")
    ).toBeInTheDocument();
  });

});
