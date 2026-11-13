
import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./MainLayout";

describe("MainLayout Component Testing", () => {

  // Test 1: Render MainLayout
  it("should render the MainLayout component", () => {
    const { container } = render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={<div>Home Page Content</div>}
            />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(
      container.querySelector(".main-layout")
    ).toBeInTheDocument();
  });

  // Test 2: Display Navbar
  it("should render the Navbar component", () => {
    const { container } = render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={<div>Home Page Content</div>}
            />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const navbar = container.querySelector("nav");

    expect(navbar).toBeInTheDocument();

    expect(
      within(navbar).getByText("PrintPro")
    ).toBeInTheDocument();
  });

  // Test 3: Display Footer
  it("should render the Footer component", () => {
    const { container } = render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={<div>Home Page Content</div>}
            />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const footer = container.querySelector("footer");

    expect(footer).toBeInTheDocument();

    expect(
      within(footer).getByText("Quick Links")
    ).toBeInTheDocument();
  });

  // Test 4: Display Outlet content
  it("should render the child page content inside Outlet", () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={<div>Home Page Content</div>}
            />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByText("Home Page Content")
    ).toBeInTheDocument();
  });

  // Test 5: Check main element
  it("should contain the main element", () => {
    const { container } = render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={<div>Home Page Content</div>}
            />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(
      container.querySelector("main")
    ).toBeInTheDocument();
  });

  // Test 6: Check Navbar appears before main content
  it("should render Navbar before main content", () => {
    const { container } = render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={<div>Home Page Content</div>}
            />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const layout = container.querySelector(".main-layout");
    const navbar = layout.querySelector("nav");
    const main = layout.querySelector("main");

    expect(navbar).toBeInTheDocument();
    expect(main).toBeInTheDocument();

    expect(
      navbar.compareDocumentPosition(main) &
      Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy();
  });

  // Test 7: Check Footer appears after main content
  it("should render Footer after main content", () => {
    const { container } = render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={<div>Home Page Content</div>}
            />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const layout = container.querySelector(".main-layout");
    const main = layout.querySelector("main");
    const footer = layout.querySelector("footer");

    expect(main).toBeInTheDocument();
    expect(footer).toBeInTheDocument();

    expect(
      main.compareDocumentPosition(footer) &
      Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy();
  });

});
