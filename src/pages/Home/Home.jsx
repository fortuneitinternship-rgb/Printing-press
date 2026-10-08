import { Link } from "react-router-dom";

import products from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./Home.css";

function Home() {

  const featuredProducts = products.slice(0, 4);

  return (

    <div>

      {/* Hero Section */}
      <section className="hero">

        <div className="container">

          <div className="hero-content">

            <p className="hero-small">
              YOUR VISION • OUR PRINTING EXPERTISE
            </p>

            <h1>
              Beautiful Printing for
              <br />
              Every Special Moment
            </h1>

            <p>
              Premium marriage cards, business printing
              and customized printing solutions.
            </p>

            <div className="hero-buttons">

              <Link
                to="/products"
                className="btn btn-primary"
              >
                Explore Products
              </Link>

              <Link
                to="/products"
                className="btn btn-outline-primary"
              >
                Request a Quote
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* Categories */}
      <section className="section">

        <div className="container">

          <div className="section-heading">

            <h2>Shop by Category</h2>

            <Link to="/products">
              View All Categories →
            </Link>

          </div>


          <div className="row g-4">

            {[
              "Marriage Cards",
              "Pamphlets",
              "Bill Books",
              "Visiting Cards",
              "Posters & Banners",
              "Stickers"
            ].map((category) => (

              <div
                className="col-6 col-md-4 col-lg-2"
                key={category}
              >

                <Link
                  to="/products"
                  className="category-card"
                >

                  <div className="category-placeholder">
                    <i className="bi bi-image"></i>
                  </div>

                  <h6>{category}</h6>

                  <span>
                    Explore →
                  </span>

                </Link>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* New Arrivals */}
      <section className="section bg-light">

        <div className="container">

          <div className="section-heading">

            <div>
              <h2>New Arrivals</h2>
              <p>Explore our latest printing designs.</p>
            </div>

            <Link to="/products">
              View All Products →
            </Link>

          </div>


          <div className="row g-4">

            {featuredProducts.map((product) => (

              <div
                className="col-md-6 col-lg-3"
                key={product.id}
              >

                <ProductCard product={product} />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* Why Choose Us */}
      <section className="why-section">

        <div className="container">

          <h2>Why Choose PrintPro?</h2>

          <div className="row text-center mt-4">

            <div className="col-md-3">
              <i className="bi bi-printer"></i>
              <h5>High Quality Printing</h5>
              <p>Professional quality printing.</p>
            </div>

            <div className="col-md-3">
              <i className="bi bi-palette"></i>
              <h5>Custom Designs</h5>
              <p>Designs customized for you.</p>
            </div>

            <div className="col-md-3">
              <i className="bi bi-currency-rupee"></i>
              <h5>Affordable Pricing</h5>
              <p>Best value for your money.</p>
            </div>

            <div className="col-md-3">
              <i className="bi bi-truck"></i>
              <h5>Fast Delivery</h5>
              <p>Quick and reliable delivery.</p>
            </div>

          </div>

        </div>

      </section>


      {/* How It Works */}
      <section className="section">

        <div className="container text-center">

          <h2>Your Printing in 5 Simple Steps</h2>

          <div className="row mt-5">

            <div className="col-md">
              <h5>1</h5>
              <p>Choose Product</p>
            </div>

            <div className="col-md">
              <h5>2</h5>
              <p>Share Your Design</p>
            </div>

            <div className="col-md">
              <h5>3</h5>
              <p>Provide Requirements</p>
            </div>

            <div className="col-md">
              <h5>4</h5>
              <p>Approve Quote</p>
            </div>

            <div className="col-md">
              <h5>5</h5>
              <p>Printing & Delivery</p>
            </div>

          </div>

        </div>

      </section>

    </div>

  );
}

export default Home;