
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Register from "./Register";

describe("Register Page Tests", () => {

  // 1. Check whether Register page renders
  it("1. should render the Register page", () => {
    render(<Register />);

    expect(
      screen.getByRole("heading", { name: "Create Account" })
    ).toBeInTheDocument();
  });

  // 2. Check Create Account heading
  it("2. should display Create Account heading", () => {
    render(<Register />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Create Account" })
    ).toBeInTheDocument();
  });

  // 3. Check Full Name input
  it("3. should display Full Name input", () => {
    render(<Register />);

    expect(
      screen.getByPlaceholderText("Full Name")
    ).toBeInTheDocument();
  });

  // 4. Check Full Name input type
  it("4. should have text type for Full Name", () => {
    render(<Register />);

    expect(
      screen.getByPlaceholderText("Full Name")
    ).toHaveAttribute("type", "text");
  });

  // 5. Check Email input
  it("5. should display Email input", () => {
    render(<Register />);

    expect(
      screen.getByPlaceholderText("Email")
    ).toBeInTheDocument();
  });

  // 6. Check Email input type
  it("6. should have email type for Email", () => {
    render(<Register />);

    expect(
      screen.getByPlaceholderText("Email")
    ).toHaveAttribute("type", "email");
  });

  // 7. Check Mobile Number input
  it("7. should display Mobile Number input", () => {
    render(<Register />);

    expect(
      screen.getByPlaceholderText("Mobile Number")
    ).toBeInTheDocument();
  });

  // 8. Check Mobile Number input type
  it("8. should have tel type for Mobile Number", () => {
    render(<Register />);

    expect(
      screen.getByPlaceholderText("Mobile Number")
    ).toHaveAttribute("type", "tel");
  });

  // 9. Check Password input
  it("9. should display Password input", () => {
    render(<Register />);

    expect(
      screen.getByPlaceholderText("Password")
    ).toBeInTheDocument();
  });

  // 10. Check Password input type
  it("10. should have password type for Password", () => {
    render(<Register />);

    expect(
      screen.getByPlaceholderText("Password")
    ).toHaveAttribute("type", "password");
  });

  // 11. Check Register button
  it("11. should display Register button", () => {
    render(<Register />);

    expect(
      screen.getByRole("button", { name: "Register" })
    ).toBeInTheDocument();
  });

  // 12. Check button styling
  it("12. should have Bootstrap button classes", () => {
    render(<Register />);

    expect(
      screen.getByRole("button", { name: "Register" })
    ).toHaveClass("btn", "btn-primary", "w-100");
  });

  // 13. Check Bootstrap card layout
  it("13. should display registration card", () => {
    const { container } = render(<Register />);

    expect(
      container.querySelector(".card")
    ).toBeInTheDocument();

    expect(
      container.querySelector(".card")
    ).toHaveClass("p-4", "shadow-sm");
  });

  // 14. Check Bootstrap container
  it("14. should display Bootstrap container", () => {
    const { container } = render(<Register />);

    expect(
      container.querySelector(".container")
    ).toBeInTheDocument();
  });

  // 15. Check Bootstrap responsive column
  it("15. should display responsive registration column", () => {
    const { container } = render(<Register />);

    expect(
      container.querySelector(".col-md-5")
    ).toBeInTheDocument();
  });

});
