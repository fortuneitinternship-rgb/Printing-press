function Checkout() {

  return (

    <div className="container py-5">

      <div className="row">

        <div className="col-md-8">

          <h2>
            Customer Details
          </h2>

          <div className="card p-4 mt-3">

            <label>Full Name</label>

            <input
              className="form-control mb-3"
              type="text"
              placeholder="Enter your name"
            />


            <label>Mobile Number</label>

            <input
              className="form-control mb-3"
              type="tel"
              placeholder="Enter mobile number"
            />


            <label>Email</label>

            <input
              className="form-control mb-3"
              type="email"
              placeholder="Enter email"
            />


            <label>Delivery Address</label>

            <textarea
              className="form-control mb-3"
              rows="4"
              placeholder="Enter delivery address"
            ></textarea>


            <label>Product Requirements</label>

            <textarea
              className="form-control mb-3"
              rows="4"
              placeholder="Enter paper type, size, quantity, design requirements etc."
            ></textarea>


            <label>Upload Design</label>

            <input
              type="file"
              className="form-control mb-3"
            />


            <button className="btn btn-primary">
              Submit Quote Request
            </button>

          </div>

        </div>


        <div className="col-md-4">

          <div className="card p-4">

            <h4>
              Request Summary
            </h4>

            <hr />

            <p>
              Premium Wedding Card
            </p>

            <p>
              Quantity: 200
            </p>

            <p>
              Paper: Textured
            </p>

            <hr />

            <strong>
              Estimated Total: ₹8,000
            </strong>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Checkout;