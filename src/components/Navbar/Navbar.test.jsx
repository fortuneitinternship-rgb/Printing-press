
import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar Component Testing", () => {

  it("should render the Navbar component", () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(container.querySelector("nav")).toBeInTheDocument();
  });

  it("should display PrintPro logo and brand name", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText("P")).toBeInTheDocument();
    expect(screen.getByText("PrintPro")).toBeInTheDocument();
    expect(screen.getByText("Printing Press")).toBeInTheDocument();
  });

  it("should display top information bar", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/Quality Printing \| Custom Designs \| Bulk Orders \| Fast Delivery/)
    ).toBeInTheDocument();
  });

  it("should display contact number", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText("+91 9491047221")).toBeInTheDocument();
  });

  // FIXED TEST: Main navigation links
  it("should display main navigation links", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const mainNavbar = document.querySelector("#mainNavbar");

    expect(
      within(mainNavbar).getByRole("link", { name: "Home" })
    ).toHaveAttribute("href", "/");

    expect(
      within(mainNavbar).getByRole("link", { name: "Products" })
    ).toHaveAttribute("href", "/products");

    expect(
      within(mainNavbar).getByRole("link", { name: "Services" })
    ).toHaveAttribute("href", "/products");

    expect(
      within(mainNavbar).getByRole("link", { name: "Marriage Cards" })
    ).toHaveAttribute("href", "/products");

    expect(
      within(mainNavbar).getByRole("link", { name: "Gallery" })
    ).toHaveAttribute("href", "/products");
  });

  it("should display search, wishlist, login and cart icons", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: "Search" })).toHaveAttribute("href", "/products");
    expect(screen.getByRole("link", { name: "Wishlist" })).toHaveAttribute("href", "/wishlist");
    expect(screen.getByRole("link", { name: "Login" })).toHaveAttribute("href", "/login");
    expect(screen.getByRole("link", { name: "Cart" })).toHaveAttribute("href", "/cart");
  });

  it("should display Request Quote button", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("link", { name: "Request Quote" })
    ).toHaveAttribute("href", "/products");
  });

  it("should display all category links", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const categoryBar = document.querySelector(".category-bar");

    expect(
      within(categoryBar).getByRole("link", { name: /Marriage Cards/ })
    ).toBeInTheDocument();

    expect(
      within(categoryBar).getByRole("link", { name: /Pamphlets/ })
    ).toBeInTheDocument();

    expect(
      within(categoryBar).getByRole("link", { name: /Bill Books/ })
    ).toBeInTheDocument();

    expect(
      within(categoryBar).getByRole("link", { name: /Visiting Cards/ })
    ).toBeInTheDocument();

    expect(
      within(categoryBar).getByRole("link", { name: /Posters & Banners/ })
    ).toBeInTheDocument();

    expect(
      within(categoryBar).getByRole("link", { name: /Stickers/ })
    ).toBeInTheDocument();
  });

  it("should have mobile navigation toggle button", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("button", { name: "Toggle navigation" })
    ).toBeInTheDocument();
  });

  it("should render navigation icons", () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(container.querySelector(".bi-telephone")).toBeInTheDocument();
    expect(container.querySelector(".bi-search")).toBeInTheDocument();
    expect(container.querySelector(".bi-heart")).toBeInTheDocument();
    expect(container.querySelector(".bi-person")).toBeInTheDocument();
    expect(container.querySelector(".bi-cart3")).toBeInTheDocument();
  });

});
