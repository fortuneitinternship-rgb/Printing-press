
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand section */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              PrintPro
            </Link>

            <p>
              Creative printing solutions for every special
              moment and business need.
            </p>

            <div className="social-links">
              <a href="https://instagram.com" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://facebook.com" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/about">About Us</Link>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3>Our Services</h3>
            <Link to="/products">Wedding Cards</Link>
            <Link to="/products">Visiting Cards</Link>
            <Link to="/products">Pamphlets</Link>
            <Link to="/products">Posters & Stickers</Link>
          </div>

          {/* Contact */}
          <div className="footer-column footer-contact">
            <h3>Contact Us</h3>
            <p><i className="bi bi-telephone"></i> +91 XXXXX XXXXX</p>
            <p><i className="bi bi-envelope"></i> hello@example.com</p>
            <p><i className="bi bi-geo-alt"></i> Hyderabad, India</p>
            <Link to="/contact">Contact Information</Link>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} PrintPro. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
