import { Link } from "react-router-dom";

function Wishlist() {

  return (

    <div className="container py-5">

      <h1>
        ♡ My Wishlist
      </h1>

      <div className="card p-4 mt-4">

        <h5>
          Premium Wedding Card
        </h5>

        <p>
          Starting from ₹40
        </p>

        <div>

          <button className="btn btn-outline-danger me-2">
            Remove
          </button>

          <Link
            to="/products/3"
            className="btn btn-primary"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>

  );
}

export default Wishlist;