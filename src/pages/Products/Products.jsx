import { useState } from "react";

import products from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./Products.css";

function Products() {

  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Marriage Cards",
    "Visiting Cards",
    "Pamphlets",
    "Bill Books",
    "Posters & Banners"
  ];

  const filteredProducts =
    category === "All"
      ? products
      : products.filter(
          (product) => product.category === category
        );


  return (

    <div className="products-page">

      <div className="container">

        <div className="page-title">

          <h1>Our Products</h1>

          <p>
            Explore our printing products and services.
          </p>

        </div>


        {/* Filters */}
        <div className="filter-buttons">

          {categories.map((item) => (

            <button
              key={item}
              onClick={() => setCategory(item)}
              className={
                category === item
                  ? "active"
                  : ""
              }
            >
              {item}
            </button>

          ))}

        </div>


        {/* Product Grid */}
        <div className="row g-4 mt-3">

          {filteredProducts.map((product) => (

            <div
              className="col-sm-6 col-lg-3"
              key={product.id}
            >

              <ProductCard
                product={product}
              />

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}

export default Products;