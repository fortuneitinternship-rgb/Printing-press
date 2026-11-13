
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
>>>>>>> 58ae147398e76c26f08c78b624af71b414909376
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
<<<<<<< HEAD
    <>
      {/* Top Information Bar */}
      <div className="top-bar">
        <div className="container">
          <div>
            Quality Printing | Custom Designs | Bulk Orders | Fast Delivery
          </div>

          <div>
            <i className="bi bi-telephone"></i>
            +91 9491047221
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container">
=======
    <header className="site-header">
      <div className="container navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <span className="brand-icon">P</span>
          <span>PrintPro</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></i>
        </button>

        {/* Navigation Links */}
        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>

          <NavLink to="/" onClick={closeMenu}>Home</NavLink>

          <NavLink to="/products" onClick={closeMenu}>
            Products
          </NavLink>

          <NavLink to="/wishlist" onClick={closeMenu}>
            <i className="bi bi-heart"></i> Wishlist
          </NavLink>

          <NavLink to="/cart" onClick={closeMenu}>
            <i className="bi bi-bag"></i> Cart
          </NavLink>

          <NavLink to="/login" onClick={closeMenu}>
            Login
          </NavLink>
>>>>>>> 58ae147398e76c26f08c78b624af71b414909376

          <Link
            to="/quote"
            className="quote-button"
            onClick={closeMenu}
          >
<<<<<<< HEAD
            <div className="logo-box">P</div>

            <div className="ms-2">
              <strong>PrintPro</strong>
              <small>Printing Press</small>
            </div>
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-label="Toggle navigation"
            aria-controls="mainNavbar"
            aria-expanded="false"
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
=======
            Get a Quote
          </Link>

        </nav>
      </div>
    </header>
>>>>>>> 58ae147398e76c26f08c78b624af71b414909376
  );
}

export default Navbar;
