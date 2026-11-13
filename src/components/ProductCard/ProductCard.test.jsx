
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductCard from "./ProductCard";

const mockProduct = {
  id: 1,
  name: "Wedding Invitation Card",
  category: "Marriage Cards",
  image: "/images/wedding-card.jpg",
  rating: 4.5,
  price: 25,
};

describe("ProductCard Component Testing", () => {

  // Test 1: Render ProductCard component
  it("should render the ProductCard component", () => {
    const { container } = render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>
    );

    expect(
      container.querySelector(".product-card")
    ).toBeInTheDocument();
  });

  // Test 2: Display product name
  it("should display the product name", () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: "Wedding Invitation Card",
      })
    ).toBeInTheDocument();
  });

  // Test 3: Display product category
  it("should display the product category", () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>
    );

    expect(
      screen.getByText("Marriage Cards")
    ).toBeInTheDocument();
  });

  // Test 4: Display product image
  it("should display the product image", () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>
    );

    const image = screen.getByAltText(
      "Wedding Invitation Card"
    );

    expect(image).toBeInTheDocument();

    expect(image).toHaveAttribute(
      "src",
      "/images/wedding-card.jpg"
    );
  });

  // Test 5: Display product rating
  it("should display the product rating", () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>
    );

    expect(
      screen.getByText("(4.5)")
    ).toBeInTheDocument();
  });

  // Test 6: Display product price
  it("should display the product price", () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>
    );

    expect(
      screen.getByText("Starting from ₹25")
    ).toBeInTheDocument();
  });

  // Test 7: Display View Details link
  it("should display the View Details link", () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("link", {
        name: "View Details",
      })
    ).toBeInTheDocument();
  });

  // Test 8: Check product details route
  it("should navigate to the correct product details route", () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("link", {
        name: "View Details",
      })
    ).toHaveAttribute("href", "/products/1");
  });

  // Test 9: Display Request Quote link
  it("should display the Request Quote link", () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("link", {
        name: "Request Quote",
      })
    ).toBeInTheDocument();
  });

  // Test 10: Check Request Quote route
  it("should navigate to the Request Quote page", () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("link", {
        name: "Request Quote",
      })
    ).toHaveAttribute("href", "/request-quote");
  });

  // Test 11: Display wishlist button
  it("should display the wishlist button", () => {
    const { container } = render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>
    );

    expect(
      container.querySelector(".wishlist-button")
    ).toBeInTheDocument();
  });

});
