import { Link } from "react-router-dom";

import "./ProductCard.css";

function ProductCard({ product }) {

  return (

    <div className="product-card">

      {/* Wishlist */}
      <button className="wishlist-button">
        <i className="bi bi-heart"></i>
      </button>


      {/* Product Image */}
      <div className="product-image">

        <img
          src={product.image}
          alt={product.name}
        />

      </div>


      {/* Product Information */}
      <div className="product-content">

        <small className="product-category">
          {product.category}
        </small>

        <h5>{product.name}</h5>


        {/* Rating */}
        <div className="rating">

          <span>
            ★★★★★
          </span>

          <small>
            ({product.rating})
          </small>

        </div>


        {/* Price */}
        <p className="price">
          Starting from ₹{product.price}
        </p>


        {/* Buttons */}
        <div className="product-buttons">

          <Link
            to={`/products/${product.id}`}
            className="btn btn-outline-primary btn-sm"
          >
            View Details
          </Link>

          <button className="btn btn-primary btn-sm">
            Request Quote
          </button>

        </div>

      </div>

    </div>

  );
}

export default ProductCard;