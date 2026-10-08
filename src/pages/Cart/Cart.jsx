import { Link } from "react-router-dom";

function Cart() {

  return (

    <div className="container py-5">

      <h1 className="mb-4">
        Your Cart
      </h1>

      <div className="card p-4">

        <h5>
          Premium Wedding Card
        </h5>

        <p>
          Quantity: 200
        </p>

        <p>
          Paper: Textured
        </p>

        <h5>
          Estimated Total: ₹8,000
        </h5>

        <div className="mt-3">

          <button className="btn btn-outline-danger me-2">
            Remove
          </button>

          <Link
            to="/checkout"
            className="btn btn-primary"
          >
            Continue
          </Link>

        </div>

      </div>

    </div>

  );
}

export default Cart;