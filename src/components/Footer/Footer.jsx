import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="row">

          {/* About */}
          <div className="col-md-3">

            <h4>PrintPro</h4>

            <p>
              Quality printing solutions for weddings,
              businesses, events and special occasions.
            </p>

            <div className="social-icons">

              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-whatsapp"></i>
              <i className="bi bi-youtube"></i>

            </div>

          </div>


          {/* Quick Links */}
          <div className="col-md-3">

            <h5>Quick Links</h5>

            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/login">Login</Link>

          </div>


          {/* Services */}
          <div className="col-md-3">

            <h5>Printing Services</h5>

            <Link to="/products">Marriage Cards</Link>
            <Link to="/products">Visiting Cards</Link>
            <Link to="/products">Pamphlets</Link>
            <Link to="/products">Bill Books</Link>
            <Link to="/products">Posters & Banners</Link>

          </div>


          {/* Contact */}
          <div className="col-md-3">

            <h5>Contact Us</h5>

            <p>
              <i className="bi bi-telephone"></i>
              +91 98765 43210
            </p>

            <p>
              <i className="bi bi-envelope"></i>
              info@printpro.com
            </p>

            <p>
              <i className="bi bi-geo-alt"></i>
              Hyderabad, Telangana
            </p>

          </div>

        </div>

      </div>


      <div className="footer-bottom">
        © 2026 PrintPro. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;