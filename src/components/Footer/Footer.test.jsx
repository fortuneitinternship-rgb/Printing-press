
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "./Footer";

describe("Footer Component Testing", () => {

  it("renders the footer component", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(document.querySelector("footer")).toBeInTheDocument();
  });

  it("displays PrintPro brand name", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByText("PrintPro")).toBeInTheDocument();
  });

  it("displays Quick Links heading", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByText("Quick Links")).toBeInTheDocument();
  });

  it("displays Printing Services heading", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByText("Printing Services")).toBeInTheDocument();
  });

  it("displays Contact Us heading", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByText("Contact Us")).toBeInTheDocument();
  });

  it("displays all quick navigation links", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "Products" })).toHaveAttribute("href", "/products");
    expect(screen.getByRole("link", { name: "Wishlist" })).toHaveAttribute("href", "/wishlist");
    expect(screen.getByRole("link", { name: "Cart" })).toHaveAttribute("href", "/cart");
    expect(screen.getByRole("link", { name: "Login" })).toHaveAttribute("href", "/login");
  });

  it("displays all printing services", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: "Marriage Cards" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Visiting Cards" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Pamphlets" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Bill Books" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Posters & Banners" })).toBeInTheDocument();
  });

  it("displays contact information", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByText("+91 98765 43210")).toBeInTheDocument();
    expect(screen.getByText("info@printpro.com")).toBeInTheDocument();
    expect(screen.getByText("Hyderabad, Telangana")).toBeInTheDocument();
  });

  it("displays social media icons", () => {
    const { container } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(container.querySelector(".bi-facebook")).toBeInTheDocument();
    expect(container.querySelector(".bi-instagram")).toBeInTheDocument();
    expect(container.querySelector(".bi-whatsapp")).toBeInTheDocument();
    expect(container.querySelector(".bi-youtube")).toBeInTheDocument();
  });

  it("displays copyright information", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(
      screen.getByText(
        `© ${new Date().getFullYear()} PrintPro. All Rights Reserved.`
      )
    ).toBeInTheDocument();
  });

});
 