
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Products from "./Products";
import products from "../../data/products";

// Helper function
const renderProducts = () => {
  return render(
    <MemoryRouter>
      <Products />
    </MemoryRouter>
  );
};

describe("Products Page Tests", () => {

  // 1. Check whether Products page renders
  it("1. should render the Products page", () => {
    renderProducts();

    expect(
      screen.getByRole("heading", { name: "Our Products" })
    ).toBeInTheDocument();
  });

  // 2. Check page description
  it("2. should display the page description", () => {
    renderProducts();

    expect(
      screen.getByText("Explore our printing products and services.")
    ).toBeInTheDocument();
  });

  // 3. Check All category button
  it("3. should display All category button", () => {
    renderProducts();

    expect(
      screen.getByRole("button", { name: "All" })
    ).toBeInTheDocument();
  });

  // 4. Check Marriage Cards category
  it("4. should display Marriage Cards category button", () => {
    renderProducts();

    expect(
      screen.getByRole("button", { name: "Marriage Cards" })
    ).toBeInTheDocument();
  });

  // 5. Check Visiting Cards category
  it("5. should display Visiting Cards category button", () => {
    renderProducts();

    expect(
      screen.getByRole("button", { name: "Visiting Cards" })
    ).toBeInTheDocument();
  });

  // 6. Check Pamphlets category
  it("6. should display Pamphlets category button", () => {
    renderProducts();

    expect(
      screen.getByRole("button", { name: "Pamphlets" })
    ).toBeInTheDocument();
  });

  // 7. Check Bill Books category
  it("7. should display Bill Books category button", () => {
    renderProducts();

    expect(
      screen.getByRole("button", { name: "Bill Books" })
    ).toBeInTheDocument();
  });

  // 8. Check Posters & Banners category
  it("8. should display Posters & Banners category button", () => {
    renderProducts();

    expect(
      screen.getByRole("button", { name: "Posters & Banners" })
    ).toBeInTheDocument();
  });

  // 9. Check all products initially
  it("9. should display all products by default", () => {
    renderProducts();

    products.forEach((product) => {
      expect(
        screen.getByRole("img", { name: product.name })
      ).toBeInTheDocument();
    });
  });

  // 10. Check default active category
  it("10. should make All category active by default", () => {
    renderProducts();

    expect(
      screen.getByRole("button", { name: "All" })
    ).toHaveClass("active");
  });

  // 11. Check Marriage Cards filtering
  it("11. should display only Marriage Cards products", () => {
    renderProducts();

    fireEvent.click(
      screen.getByRole("button", { name: "Marriage Cards" })
    );

    const marriageProducts = products.filter(
      (product) => product.category === "Marriage Cards"
    );

    marriageProducts.forEach((product) => {
      expect(
        screen.getByRole("img", { name: product.name })
      ).toBeInTheDocument();
    });

    const otherProducts = products.filter(
      (product) => product.category !== "Marriage Cards"
    );

    otherProducts.forEach((product) => {
      expect(
        screen.queryByRole("img", { name: product.name })
      ).not.toBeInTheDocument();
    });
  });

  // 12. Check Visiting Cards filtering
  it("12. should display only Visiting Cards products", () => {
    renderProducts();

    fireEvent.click(
      screen.getByRole("button", { name: "Visiting Cards" })
    );

    const visitingProducts = products.filter(
      (product) => product.category === "Visiting Cards"
    );

    visitingProducts.forEach((product) => {
      expect(
        screen.getByRole("img", { name: product.name })
      ).toBeInTheDocument();
    });

    const otherProducts = products.filter(
      (product) => product.category !== "Visiting Cards"
    );

    otherProducts.forEach((product) => {
      expect(
        screen.queryByRole("img", { name: product.name })
      ).not.toBeInTheDocument();
    });
  });

  // 13. Check Pamphlets filtering
  it("13. should display only Pamphlets products", () => {
    renderProducts();

    fireEvent.click(
      screen.getByRole("button", { name: "Pamphlets" })
    );

    const pamphletProducts = products.filter(
      (product) => product.category === "Pamphlets"
    );

    pamphletProducts.forEach((product) => {
      expect(
        screen.getByRole("img", { name: product.name })
      ).toBeInTheDocument();
    });

    const otherProducts = products.filter(
      (product) => product.category !== "Pamphlets"
    );

    otherProducts.forEach((product) => {
      expect(
        screen.queryByRole("img", { name: product.name })
      ).not.toBeInTheDocument();
    });
  });

  // 14. Check Bill Books filtering
  it("14. should display only Bill Books products", () => {
    renderProducts();

    fireEvent.click(
      screen.getByRole("button", { name: "Bill Books" })
    );

    const billBookProducts = products.filter(
      (product) => product.category === "Bill Books"
    );

    billBookProducts.forEach((product) => {
      expect(
        screen.getByRole("img", { name: product.name })
      ).toBeInTheDocument();
    });

    const otherProducts = products.filter(
      (product) => product.category !== "Bill Books"
    );

    otherProducts.forEach((product) => {
      expect(
        screen.queryByRole("img", { name: product.name })
      ).not.toBeInTheDocument();
    });
  });

  // 15. Check Posters & Banners filtering
  it("15. should display only Posters & Banners products", () => {
    renderProducts();

    fireEvent.click(
      screen.getByRole("button", { name: "Posters & Banners" })
    );

    const posterProducts = products.filter(
      (product) => product.category === "Posters & Banners"
    );

    posterProducts.forEach((product) => {
      expect(
        screen.getByRole("img", { name: product.name })
      ).toBeInTheDocument();
    });

    const otherProducts = products.filter(
      (product) => product.category !== "Posters & Banners"
    );

    otherProducts.forEach((product) => {
      expect(
        screen.queryByRole("img", { name: product.name })
      ).not.toBeInTheDocument();
    });
  });

  // 16. Check All button resets the filter
  it("16. should display all products when All is clicked", () => {
    renderProducts();

    fireEvent.click(
      screen.getByRole("button", { name: "Marriage Cards" })
    );

    fireEvent.click(
      screen.getByRole("button", { name: "All" })
    );

    products.forEach((product) => {
      expect(
        screen.getByRole("img", { name: product.name })
      ).toBeInTheDocument();
    });
  });

  // 17. Check active class changes
  it("17. should update active category button", () => {
    renderProducts();

    const marriageButton = screen.getByRole("button", {
      name: "Marriage Cards"
    });

    fireEvent.click(marriageButton);

    expect(marriageButton).toHaveClass("active");

    expect(
      screen.getByRole("button", { name: "All" })
    ).not.toHaveClass("active");
  });

  // 18. Check product cards are rendered
  it("18. should render ProductCard components", () => {
    renderProducts();

    const productImages = screen.getAllByRole("img");

    expect(productImages.length).toBe(products.length);
  });

  // 19. Check product grid exists
  it("19. should display the product grid", () => {
    const { container } = renderProducts();

    expect(
      container.querySelector(".row.g-4.mt-3")
    ).toBeInTheDocument();
  });

  // 20. Check filter buttons container
  it("20. should display filter buttons container", () => {
    const { container } = renderProducts();

    expect(
      container.querySelector(".filter-buttons")
    ).toBeInTheDocument();
  });

});
