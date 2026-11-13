
import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import products from "../../data/products";

describe("ProductDetails Component Testing", () => {
  const renderProductDetails = (id = "1") =>
    render(
      <MemoryRouter initialEntries={[`/products/${id}`]}>
        <Routes>
          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />
        </Routes>
      </MemoryRouter>
    );

  it("1. should render the ProductDetails component", () => {
    const { container } = renderProductDetails();
    expect(container.querySelector(".product-details")).toBeInTheDocument();
  });

  it("2. should display the product image", () => {
    renderProductDetails();

    const product = products.find((item) => item.id === 1);

    expect(
      screen.getByRole("img", { name: product.name })
    ).toBeInTheDocument();
  });

  it("3. should display the correct product image source", () => {
    renderProductDetails();

    const product = products.find((item) => item.id === 1);

    expect(
      screen.getByRole("img", { name: product.name })
    ).toHaveAttribute("src", product.image);
  });

  it("4. should display the product category", () => {
    renderProductDetails();

    const product = products.find((item) => item.id === 1);

    expect(screen.getByText(product.category)).toBeInTheDocument();
  });

  it("5. should display the product name", () => {
    renderProductDetails();

    const product = products.find((item) => item.id === 1);

    expect(
      screen.getByRole("heading", { level: 1, name: product.name })
    ).toBeInTheDocument();
  });

  it("6. should display the product rating", () => {
    renderProductDetails();

    const product = products.find((item) => item.id === 1);

    expect(
      screen.getByText(`(${product.rating})`)
    ).toBeInTheDocument();
  });

  it("7. should display the starting price", () => {
    renderProductDetails();

    const product = products.find((item) => item.id === 1);

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: `Starting from ₹${product.price}`,
      })
    ).toBeInTheDocument();
  });

  it("8. should display the product description", () => {
    renderProductDetails();

    const product = products.find((item) => item.id === 1);

    expect(
      screen.getByText(product.description)
    ).toBeInTheDocument();
  });

  it("9. should display the Paper Type label", () => {
    renderProductDetails();
    expect(screen.getByText("Paper Type")).toBeInTheDocument();
  });

  it("10. should display all four paper type options", () => {
    renderProductDetails();

    const paperLabel = screen.getByText("Paper Type");
    const paperOption = paperLabel
      .closest(".option")
      .querySelector("select");

    expect(
      within(paperOption).getByRole("option", { name: "Matte" })
    ).toBeInTheDocument();

    expect(
      within(paperOption).getByRole("option", { name: "Glossy" })
    ).toBeInTheDocument();

    expect(
      within(paperOption).getByRole("option", { name: "Textured" })
    ).toBeInTheDocument();

    expect(
      within(paperOption).getByRole("option", { name: "Handmade" })
    ).toBeInTheDocument();

    expect(paperOption.options).toHaveLength(4);
  });

  it("11. should display the Size label", () => {
    renderProductDetails();
    expect(screen.getByText("Size")).toBeInTheDocument();
  });

  it("12. should display all three size options", () => {
    renderProductDetails();

    const sizeLabel = screen.getByText("Size");
    const sizeSelect = sizeLabel
      .closest(".option")
      .querySelector("select");

    expect(sizeSelect.options).toHaveLength(3);

    expect(
      within(sizeSelect).getByRole("option", { name: "5 x 7 inch" })
    ).toBeInTheDocument();

    expect(
      within(sizeSelect).getByRole("option", { name: "6 x 8 inch" })
    ).toBeInTheDocument();

    expect(
      within(sizeSelect).getByRole("option", { name: "Custom Size" })
    ).toBeInTheDocument();
  });

  it("13. should display the Quantity label", () => {
    renderProductDetails();
    expect(screen.getByText("Quantity")).toBeInTheDocument();
  });

  it("14. should display the quantity input", () => {
    renderProductDetails();

    const quantityLabel = screen.getByText("Quantity");
    const quantityInput = quantityLabel
      .closest(".option")
      .querySelector("input");

    expect(quantityInput).toBeInTheDocument();
    expect(quantityInput).toHaveAttribute("type", "number");
  });

  it("15. should have minimum quantity of 1", () => {
    renderProductDetails();

    const quantityInput = screen
      .getByText("Quantity")
      .closest(".option")
      .querySelector("input");

    expect(quantityInput).toHaveAttribute("min", "1");
  });

  it("16. should have default quantity of 100", () => {
    renderProductDetails();

    const quantityInput = screen
      .getByText("Quantity")
      .closest(".option")
      .querySelector("input");

    expect(quantityInput).toHaveValue(100);
  });

  it("17. should display the Add to Wishlist button", () => {
    renderProductDetails();

    expect(
      screen.getByRole("button", { name: /Add to Wishlist/i })
    ).toBeInTheDocument();
  });

  it("18. should display the Request Quote link", () => {
    renderProductDetails();

    expect(
      screen.getByRole("link", { name: /Request Quote/i })
    ).toBeInTheDocument();
  });

  it("19. should navigate to the Checkout page", () => {
    renderProductDetails();

    expect(
      screen.getByRole("link", { name: /Request Quote/i })
    ).toHaveAttribute("href", "/checkout");
  });

  it("20. should display Product Not Found for an invalid ID", () => {
    renderProductDetails("999");

    expect(
      screen.getByRole("heading", { name: "Product Not Found" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "Back to Products" })
    ).toHaveAttribute("href", "/products");
  });
});
