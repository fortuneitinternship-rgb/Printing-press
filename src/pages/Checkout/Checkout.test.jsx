
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Checkout from "./Checkout";

describe("Checkout Component Testing", () => {

  it("should render the Checkout component", () => {
    const { container } = render(<Checkout />);

    expect(
      container.querySelector(".container")
    ).toBeInTheDocument();
  });

  it("should display the Customer Details heading", () => {
    render(<Checkout />);

    expect(
      screen.getByRole("heading", { name: "Customer Details" })
    ).toBeInTheDocument();
  });

  it("should display the Full Name input", () => {
    render(<Checkout />);

    expect(
      screen.getByPlaceholderText("Enter your name")
    ).toBeInTheDocument();
  });

  it("should display the Mobile Number input", () => {
    render(<Checkout />);

    expect(
      screen.getByPlaceholderText("Enter mobile number")
    ).toBeInTheDocument();
  });

  it("should display the Email input", () => {
    render(<Checkout />);

    expect(
      screen.getByPlaceholderText("Enter email")
    ).toBeInTheDocument();
  });

  it("should display the Delivery Address textarea", () => {
    render(<Checkout />);

    expect(
      screen.getByPlaceholderText("Enter delivery address")
    ).toBeInTheDocument();
  });

  it("should display the Product Requirements textarea", () => {
    render(<Checkout />);

    expect(
      screen.getByPlaceholderText(
        "Enter paper type, size, quantity, design requirements etc."
      )
    ).toBeInTheDocument();
  });

  it("should display the Upload Design input", () => {
    const { container } = render(<Checkout />);

    expect(
      container.querySelector('input[type="file"]')
    ).toBeInTheDocument();
  });

  it("should display the Submit Quote Request button", () => {
    render(<Checkout />);

    expect(
      screen.getByRole("button", {
        name: "Submit Quote Request"
      })
    ).toBeInTheDocument();
  });

  it("should display the Request Summary heading", () => {
    render(<Checkout />);

    expect(
      screen.getByRole("heading", { name: "Request Summary" })
    ).toBeInTheDocument();
  });

  it("should display the product name in summary", () => {
    render(<Checkout />);

    expect(
      screen.getByText("Premium Wedding Card")
    ).toBeInTheDocument();
  });

  it("should display the product quantity in summary", () => {
    render(<Checkout />);

    expect(
      screen.getByText("Quantity: 200")
    ).toBeInTheDocument();
  });

  it("should display the paper type in summary", () => {
    render(<Checkout />);

    expect(
      screen.getByText("Paper: Textured")
    ).toBeInTheDocument();
  });

  it("should display the estimated total", () => {
    render(<Checkout />);

    expect(
      screen.getByText("Estimated Total: ₹8,000")
    ).toBeInTheDocument();
  });

  it("should contain the customer details and summary sections", () => {
    const { container } = render(<Checkout />);

    expect(container.querySelector(".col-md-8")).toBeInTheDocument();
    expect(container.querySelector(".col-md-4")).toBeInTheDocument();
  });

});
