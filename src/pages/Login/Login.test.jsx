
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "./Login";

describe("Login Component Testing", () => {
  const renderLogin = () =>
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

  it("1. should render the Login component", () => {
    const { container } = renderLogin();
    expect(container.firstChild).toBeInTheDocument();
  });

  it("2. should display the Login heading", () => {
    renderLogin();
    expect(
      screen.getByRole("heading", { name: "Login" })
    ).toBeInTheDocument();
  });

  it("3. should display the Email label", () => {
    renderLogin();
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("4. should display the Password label", () => {
    renderLogin();
    expect(screen.getByText("Password")).toBeInTheDocument();
  });

  it("5. should display the email input field", () => {
    renderLogin();
    expect(
      screen.getByPlaceholderText("Enter email")
    ).toBeInTheDocument();
  });

  it("6. should have email input type", () => {
    renderLogin();
    expect(
      screen.getByPlaceholderText("Enter email")
    ).toHaveAttribute("type", "email");
  });

  it("7. should display the password input field", () => {
    renderLogin();
    expect(
      screen.getByPlaceholderText("Enter password")
    ).toBeInTheDocument();
  });

  it("8. should have password input type", () => {
    renderLogin();
    expect(
      screen.getByPlaceholderText("Enter password")
    ).toHaveAttribute("type", "password");
  });

  it("9. should display the Login button", () => {
    renderLogin();
    expect(
      screen.getByRole("button", { name: "Login" })
    ).toBeInTheDocument();
  });

  it("10. should have the primary button styling", () => {
    renderLogin();
    expect(
      screen.getByRole("button", { name: "Login" })
    ).toHaveClass("btn", "btn-primary");
  });

  it("11. should display the Register link", () => {
    renderLogin();
    expect(
      screen.getByRole("link", { name: "Register" })
    ).toBeInTheDocument();
  });

  it("12. should navigate to the Register page", () => {
    renderLogin();
    expect(
      screen.getByRole("link", { name: "Register" })
    ).toHaveAttribute("href", "/register");
  });

  it("13. should display the account registration message", () => {
    renderLogin();
    expect(
      screen.getByText(/Don't have an account/i)
    ).toBeInTheDocument();
  });

  it("14. should display the Bootstrap card", () => {
    const { container } = renderLogin();
    expect(container.querySelector(".card")).toBeInTheDocument();
  });

  it("15. should display the centered login layout", () => {
    const { container } = renderLogin();

    expect(container.querySelector(".container")).toBeInTheDocument();
    expect(
      container.querySelector(".row.justify-content-center")
    ).toBeInTheDocument();
    expect(
      container.querySelector(".col-md-5")
    ).toBeInTheDocument();
  });
});
