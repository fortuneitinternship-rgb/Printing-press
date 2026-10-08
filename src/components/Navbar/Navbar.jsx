import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <>
      {/* Top Information Bar */}
      <div className="top-bar">
        <div className="container">

          <div>
            Quality Printing | Custom Designs | Bulk Orders | Fast Delivery
          </div>

          <div>
            <i className="bi bi-telephone"></i>
            +91 98765 43210
          </div>

        </div>
      </div>


      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">

        <div className="container">

          {/* Logo */}
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center"
          >

            <div className="logo-box">
              P
            </div>

            <div className="ms-2">
              <strong>PrintPro</strong>
              <small>Printing Press</small>
            </div>

          </Link>


          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>


          {/* Navigation */}
          <div
            className="collapse navbar-collapse"
            id="mainNavbar"
          >

            <ul className="navbar-nav mx-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Marriage Cards
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Gallery
                </Link>
              </li>

            </ul>


            {/* Right Icons */}
            <div className="navbar-icons">

              <Link to="/products" title="Search">
                <i className="bi bi-search"></i>
              </Link>

              <Link to="/wishlist" title="Wishlist">
                <i className="bi bi-heart"></i>
              </Link>

              <Link to="/login" title="Login">
                <i className="bi bi-person"></i>
              </Link>

              <Link to="/cart" title="Cart">
                <i className="bi bi-cart3"></i>
              </Link>

              <Link
                to="/products"
                className="quote-btn"
              >
                Request Quote
              </Link>

            </div>

          </div>

        </div>

      </nav>


      {/* Category Bar */}
      <div className="category-bar">

        <div className="container">

          <Link to="/products">
            <i className="bi bi-envelope"></i>
            Marriage Cards
          </Link>

          <Link to="/products">
            <i className="bi bi-file-earmark-text"></i>
            Pamphlets
          </Link>

          <Link to="/products">
            <i className="bi bi-receipt"></i>
            Bill Books
          </Link>

          <Link to="/products">
            <i className="bi bi-person-vcard"></i>
            Visiting Cards
          </Link>

          <Link to="/products">
            <i className="bi bi-image"></i>
            Posters & Banners
          </Link>

          <Link to="/products">
            <i className="bi bi-sticky"></i>
            Stickers
          </Link>

        </div>

      </div>

    </>
  );
}

export default Navbar;