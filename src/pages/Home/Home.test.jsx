
import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

describe("Home Component Testing", () => {
  const renderHome = () =>
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

  it("1. should render the Home component", () => {
    const { container } = renderHome();
    expect(container.firstChild).toBeInTheDocument();
  });

  it("2. should display the hero section", () => {
    renderHome();
    expect(document.querySelector(".hero")).toBeInTheDocument();
  });

  it("3. should display the hero tagline", () => {
    renderHome();
    expect(
      screen.getByText(/YOUR VISION • OUR PRINTING EXPERTISE/i)
    ).toBeInTheDocument();
  });

  it("4. should display the main heading", () => {
    renderHome();

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Beautiful Printing for\s*Every Special Moment/i,
      })
    ).toBeInTheDocument();
  });

  it("5. should display the hero description", () => {
    renderHome();
    expect(
      screen.getByText(
        /Premium marriage cards, business printing and customized printing solutions/i
      )
    ).toBeInTheDocument();
  });

  it("6. should display Explore Products link", () => {
    renderHome();
    expect(
      screen.getByRole("link", { name: /Explore Products/i })
    ).toHaveAttribute("href", "/products");
  });

  it("7. should display Request a Quote link", () => {
    renderHome();
    expect(
      screen.getByRole("link", { name: /Request a Quote/i })
    ).toHaveAttribute("href", "/products");
  });

  it("8. should display Shop by Category heading", () => {
    renderHome();
    expect(
      screen.getByRole("heading", { name: /Shop by Category/i })
    ).toBeInTheDocument();
  });

  it("9. should display all six product categories", () => {
    renderHome();

    const categoryNames = [
      "Marriage Cards",
      "Pamphlets",
      "Bill Books",
      "Visiting Cards",
      "Posters & Banners",
      "Stickers",
    ];

    const categorySection = screen
      .getByRole("heading", { name: /Shop by Category/i })
      .closest("section");

    const categoryScope = within(categorySection);

    categoryNames.forEach((category) => {
      expect(
        categoryScope.getByRole("heading", { name: category })
      ).toBeInTheDocument();
    });
  });

  it("10. should display View All Categories link", () => {
    renderHome();
    expect(
      screen.getByRole("link", { name: /View All Categories/i })
    ).toHaveAttribute("href", "/products");
  });

  it("11. should display New Arrivals heading", () => {
    renderHome();
    expect(
      screen.getByRole("heading", { name: /New Arrivals/i })
    ).toBeInTheDocument();
  });

  it("12. should display New Arrivals description", () => {
    renderHome();
    expect(
      screen.getByText(/Explore our latest printing designs/i)
    ).toBeInTheDocument();
  });

  it("13. should display View All Products link", () => {
    renderHome();
    expect(
      screen.getByRole("link", { name: /View All Products/i })
    ).toHaveAttribute("href", "/products");
  });

  it("14. should display four featured product cards", () => {
    const { container } = renderHome();
    expect(
      container.querySelectorAll(".product-card")
    ).toHaveLength(4);
  });

  it("15. should display Why Choose PrintPro heading", () => {
    renderHome();
    expect(
      screen.getByRole("heading", { name: /Why Choose PrintPro\?/i })
    ).toBeInTheDocument();
  });

  it("16. should display all four benefits", () => {
    renderHome();

    const benefits = [
      "High Quality Printing",
      "Custom Designs",
      "Affordable Pricing",
      "Fast Delivery",
    ];

    benefits.forEach((benefit) => {
      expect(
        screen.getByRole("heading", { name: benefit })
      ).toBeInTheDocument();
    });
  });

  it("17. should display benefit descriptions", () => {
    renderHome();

    expect(
      screen.getByText(/Professional quality printing/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Designs customized for you/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Best value for your money/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Quick and reliable delivery/i)
    ).toBeInTheDocument();
  });

  it("18. should display How It Works heading", () => {
    renderHome();
    expect(
      screen.getByRole("heading", {
        name: /Your Printing in 5 Simple Steps/i,
      })
    ).toBeInTheDocument();
  });

  it("19. should display all five printing steps", () => {
    renderHome();

    const steps = [
      "Choose Product",
      "Share Your Design",
      "Provide Requirements",
      "Approve Quote",
      "Printing & Delivery",
    ];

    steps.forEach((step) => {
      expect(screen.getByText(step)).toBeInTheDocument();
    });
  });

  it("20. should display all five step numbers", () => {
    renderHome();

    const stepSection = screen
      .getByRole("heading", {
        name: /Your Printing in 5 Simple Steps/i,
      })
      .closest("section");

    const headings = within(stepSection).getAllByRole("heading", {
      level: 5,
    });

    expect(headings.map((heading) => heading.textContent)).toEqual([
      "1",
      "2",
      "3",
      "4",
      "5",
    ]);
  });
});
