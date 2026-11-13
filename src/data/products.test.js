
import { describe, it, expect } from "vitest";
import products from "./products";

describe("Products Data Testing", () => {

  // Test 1: Check products array
  it("should export an array of products", () => {
    expect(Array.isArray(products)).toBe(true);
  });

  // Test 2: Check total products
  it("should contain 6 products", () => {
    expect(products).toHaveLength(6);
  });

  // Test 3: Check product IDs
  it("should have unique product IDs", () => {
    const ids = products.map((product) => product.id);

    expect(new Set(ids).size).toBe(ids.length);
  });

  // Test 4: Check product names
  it("should have product names", () => {
    products.forEach((product) => {
      expect(product.name).toBeTruthy();
      expect(typeof product.name).toBe("string");
    });
  });

  // Test 5: Check product categories
  it("should have product categories", () => {
    products.forEach((product) => {
      expect(product.category).toBeTruthy();
      expect(typeof product.category).toBe("string");
    });
  });

  // Test 6: Check product prices
  it("should have valid product prices", () => {
    products.forEach((product) => {
      expect(typeof product.price).toBe("number");
      expect(product.price).toBeGreaterThan(0);
    });
  });

  // Test 7: Check product ratings
  it("should have valid product ratings", () => {
    products.forEach((product) => {
      expect(typeof product.rating).toBe("number");
      expect(product.rating).toBeGreaterThanOrEqual(0);
      expect(product.rating).toBeLessThanOrEqual(5);
    });
  });

  // Test 8: Check product images
  it("should have product image paths", () => {
    products.forEach((product) => {
      expect(product.image).toBeTruthy();
      expect(typeof product.image).toBe("string");
    });
  });

  // Test 9: Check product descriptions
  it("should have product descriptions", () => {
    products.forEach((product) => {
      expect(product.description).toBeTruthy();
      expect(typeof product.description).toBe("string");
    });
  });

  // Test 10: Check marriage card products
  it("should contain 3 marriage card products", () => {
    const marriageCards = products.filter(
      (product) => product.category === "Marriage Cards"
    );

    expect(marriageCards).toHaveLength(3);
  });

  // Test 11: Check individual product details
  it("should contain the Royal Red Wedding Card", () => {
    const product = products.find(
      (item) => item.id === 1
    );

    expect(product).toBeDefined();
    expect(product.name).toBe("Royal Red Wedding Card");
    expect(product.price).toBe(25);
    expect(product.rating).toBe(4.8);
  });

});
