
import { Link } from "react-router-dom";

import products from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./Home.css";

function Home() {
  const featuredProducts = products.slice(0, 4);

  const categories = [
    "Marriage Cards",
    "Pamphlets",
    "Bill Books",
    "Visiting Cards",
    "Posters & Banners",
    "Stickers",
  ];

  const benefits = [
    {
      icon: "bi-printer",
      title: "High Quality Printing",
      description: "Professional quality printing.",
    },
    {
      icon: "bi-palette",
      title: "Custom Designs",
      description: "Designs customized for you.",
    },
    {
      icon: "bi-currency-rupee",
      title: "Affordable Pricing",
      description: "Best value for your money.",
    },
    {
      icon: "bi-truck",
      title: "Fast Delivery",
      description: "Quick and reliable delivery.",
    },
  ];

  const steps = [
    "Choose Product",
    "Share Your Design",
    "Provide Requirements",
    "Approve Quote",
    "Printing & Delivery",
  ];

  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <p className="hero-small">
              YOUR VISION • OUR PRINTING EXPERTISE
            </p>

            <h1>
              Beautiful Printing for
              <br className="desktop-break" />
              Every Special Moment
            </h1>

            <p className="hero-description">
              Premium marriage cards, business printing and
              customized printing solutions for every occasion.
            </p>

            <div className="hero-buttons">
              <Link to="/products" className="btn btn-primary">
                Explore Products
              </Link>

              <Link to="/quote" className="btn btn-outline-primary">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="home-section">
        <div className="container">
          <div className="section-heading">
            <h2>Shop by Category</h2>
            <Link to="/products">View All Products →</Link>
          </div>

          <div className="row g-4">
            {categories.map((category) => (
              <div className="col-6 col-md-4 col-lg-2" key={category}>
                <Link to="/products" className="category-card">
                  <div className="category-placeholder">
                    <i className="bi bi-image" />
                  </div>

                  <h6>{category}</h6>
                  <span>Explore →</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="home-section featured-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <h2>New Arrivals</h2>
              <p>Explore our latest printing designs.</p>
            </div>

            <Link to="/products">View All Products →</Link>
          </div>

          <div className="row g-4">
            {featuredProducts.map((product) => (
              <div className="col-12 col-sm-6 col-lg-3" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {featuredProducts.length === 0 && (
            <p className="text-center">
              Products will be available soon.
            </p>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="container">
          <h2>Why Choose PrintPro?</h2>

          <div className="row g-4 mt-3">
            {benefits.map((benefit) => (
              <div className="col-12 col-sm-6 col-lg-3" key={benefit.title}>
                <div className="benefit-card">
                  <i className={`bi ${benefit.icon}`} />
                  <h5>{benefit.title}</h5>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="home-section">
        <div className="container text-center">
          <h2>Your Printing in 5 Simple Steps</h2>

          <div className="row g-4 mt-4">
            {steps.map((step, index) => (
              <div className="col-6 col-md" key={step}>
                <div className="step-card">
                  <span className="step-number">{index + 1}</span>
                  <h6>{step}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="quote-section">
        <div className="container">
          <h2>Have a Custom Printing Requirement?</h2>
          <p>Tell us what you need. We'll help you find the right solution.</p>
          <Link to="/quote" className="btn btn-light">
            Get a Free Quote
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Home;
