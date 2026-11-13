
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Loader Component Testing", () => {

  // Test 1: Loader renders successfully
  it("should render the loader component", () => {
    const { container } = render(<Loader />);

    expect(
      container.querySelector(".loader-container")
    ).toBeInTheDocument();
  });

  // Test 2: Loading text
  it("should display Loading text", () => {
    render(<Loader />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  // Test 3: Spinner visibility
  it("should display the loading spinner", () => {
    const { container } = render(<Loader />);

    expect(
      container.querySelector(".spinner-border")
    ).toBeInTheDocument();
  });

  // Test 4: Spinner primary color class
  it("should have the primary color class", () => {
    const { container } = render(<Loader />);

    expect(
      container.querySelector(".spinner-border")
    ).toHaveClass("text-primary");
  });

  // Test 5: Loader container
  it("should contain the loading message inside the loader container", () => {
    const { container } = render(<Loader />);

    const loaderContainer = container.querySelector(".loader-container");

    expect(loaderContainer).toContainElement(
      screen.getByText("Loading...")
    );
  });

  // Test 6: Spinner and text should both be displayed
  it("should display spinner and loading message together", () => {
    const { container } = render(<Loader />);

    expect(
      container.querySelector(".spinner-border")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Loading...")
    ).toBeInTheDocument();
  });

});
