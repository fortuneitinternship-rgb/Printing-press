
import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

// Import components
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wishlist/Wishlist";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Checkout from "../pages/Checkout/Checkout";

// Test router helper
const renderAppRoute = (initialPath = "/") => {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

describe("AppRoutes Tests", () => {

  // 1. Home page
  it("1. should render Home page for / route", () => {
    renderAppRoute("/");

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Beautiful Printing for\s*Every Special Moment/i
      })
    ).toBeInTheDocument();
  });

  // 2. Products page
  it("2. should render Products page", () => {
    renderAppRoute("/products");

    expect(
      screen.getByRole("heading", { name: "Our Products" })
    ).toBeInTheDocument();
  });

  // 3. Product Details page
  it("3. should render Product Details page", () => {
    renderAppRoute("/products/1");

    expect(
      screen.getByRole("heading", { level: 1 })
    ).toBeInTheDocument();
  });

  // 4. Cart page
  it("4. should render Cart page", () => {
    renderAppRoute("/cart");

    expect(
      screen.getByRole("heading", { name: "Your Cart" })
    ).toBeInTheDocument();
  });

  // 5. Wishlist page
  it("5. should render Wishlist page", () => {
    renderAppRoute("/wishlist");

    expect(
      screen.getByRole("heading", { name: /My Wishlist/i })
    ).toBeInTheDocument();
  });

  // 6. Login page
  it("6. should render Login page", () => {
    renderAppRoute("/login");

    expect(
      screen.getByRole("heading", { name: "Login" })
    ).toBeInTheDocument();
  });

  // 7. Register page
  it("7. should render Register page", () => {
    renderAppRoute("/register");

    expect(
      screen.getByRole("heading", { name: "Create Account" })
    ).toBeInTheDocument();
  });

  // 8. Checkout page
  it("8. should render Checkout page", () => {
    renderAppRoute("/checkout");

    expect(
      screen.getByRole("heading", { name: /Customer Details/i })
    ).toBeInTheDocument();
  });

  // 9. Navbar through MainLayout
  it("9. should render Navbar through MainLayout", () => {
    const { container } = renderAppRoute("/");

    const navbar = container.querySelector("nav");

    expect(navbar).toBeInTheDocument();

    expect(
      within(navbar).getByText("PrintPro")
    ).toBeInTheDocument();
  });

  // 10. Footer through MainLayout
  it("10. should render Footer through MainLayout", () => {
    renderAppRoute("/");

    expect(
      screen.getByText(/All Rights Reserved/i)
    ).toBeInTheDocument();
  });

  // 11. MainLayout
  it("11. should render MainLayout", () => {
    const { container } = renderAppRoute("/");

    expect(
      container.querySelector(".main-layout")
    ).toBeInTheDocument();
  });

  // 12. Main content
  it("12. should render main content area", () => {
    const { container } = renderAppRoute("/");

    expect(
      container.querySelector("main")
    ).toBeInTheDocument();
  });

  // 13. Products inside MainLayout
  it("13. should render Products page inside MainLayout", () => {
    const { container } = renderAppRoute("/products");

    expect(
      container.querySelector(".main-layout main")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Our Products" })
    ).toBeInTheDocument();
  });

  // 14. Wishlist inside MainLayout
  it("14. should render Wishlist page inside MainLayout", () => {
    const { container } = renderAppRoute("/wishlist");

    expect(
      container.querySelector(".main-layout main")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /My Wishlist/i })
    ).toBeInTheDocument();
  });

  // 15. Valid Product Details route
  it("15. should render Product Details for a valid product route", () => {
    renderAppRoute("/products/3");

    expect(
      screen.getByRole("heading", { level: 1 })
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Product Not Found")
    ).not.toBeInTheDocument();
  });

});
