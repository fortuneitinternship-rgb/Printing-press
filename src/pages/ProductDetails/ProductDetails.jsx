import { useParams, Link } from "react-router-dom";

import products from "../../data/products";

import "./ProductDetails.css";

function ProductDetails() {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );


  if (!product) {

    return (
      <div className="container py-5">
        <h2>Product Not Found</h2>

        <Link to="/products">
          Back to Products
        </Link>
      </div>
    );

  }


  return (

    <div className="container product-details">

      <div className="row g-5">

        {/* Image */}
        <div className="col-md-6">

          <div className="details-image">

            <img
              src={product.image}
              alt={product.name}
            />

          </div>

        </div>


        {/* Information */}
        <div className="col-md-6">

          <small>
            {product.category}
          </small>

          <h1>{product.name}</h1>

          <div className="details-rating">
            ★★★★★
            <span>
              ({product.rating})
            </span>
          </div>

          <h3>
            Starting from ₹{product.price}
          </h3>

          <p>
            {product.description}
          </p>


          <hr />


          {/* Paper */}
          <div className="option">

            <label>
              Paper Type
            </label>

            <select className="form-select">

              <option>Matte</option>
              <option>Glossy</option>
              <option>Textured</option>
              <option>Handmade</option>

            </select>

          </div>


          {/* Size */}
          <div className="option">

            <label>
              Size
            </label>

            <select className="form-select">

              <option>5 x 7 inch</option>
              <option>6 x 8 inch</option>
              <option>Custom Size</option>

            </select>

          </div>


          {/* Quantity */}
          <div className="option">

            <label>
              Quantity
            </label>

            <input
              type="number"
              className="form-control"
              min="1"
              defaultValue="100"
            />

          </div>


          <div className="details-buttons">

            <button className="btn btn-outline-danger">
              <i className="bi bi-heart"></i>
              Add to Wishlist
            </button>

            <Link
              to="/checkout"
              className="btn btn-primary"
            >
              Request Quote
            </Link>

          </div>

        </div>

      </div>

    </div>

  );
}

export default ProductDetails;