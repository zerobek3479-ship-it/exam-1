import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSearchOutline, IoHeartOutline, IoCartOutline, IoPersonOutline, IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { IoIosGitCompare } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="main-header">
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Menu</h2>
          <IoCloseOutline onClick={() => setIsOpen(false)} className="close-icon" />
        </div>
        <ul className="sidebar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Product</Link></li>
          <li><Link to="/flash-sale">Flash Sale</Link></li>
          <li><Link to="/best-sellers">Best Sellers</Link></li>
          <li><Link to="/specials">Specials Offers</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>

      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}

      <div className="header-top">
        <div className="container header-flex">
          <div className="logo">
            <Link to="/">
              <span className="logo-icon">N</span>
              <span className="logo-text">BESTXTORE</span>
            </Link>
          </div>

          <div className="search-container">
            <div className="search-wrapper">
              <input type="text" placeholder="Search..." className="search-input" />
              <button className="search-button">
                <IoSearchOutline />
              </button>
            </div>
          </div>

          <div className="user-actions">
            <p className="action-btn"><IoHeartOutline /></p>
            <p  className="action-btn"><IoCartOutline /></p>
            <p  className="action-btn"><IoPersonOutline /></p>
          </div>
        </div>
      </div>

      <nav className="header-bottom">
        <div className="container header-flex">
          <div className="categories-btn" onClick={() => setIsOpen(true)}>
            <IoMenuOutline  />
            <span>All Categories</span>
          </div>

          <ul className="nav-menu">
            <li><Link to="/products">Product</Link></li>
            <li><Link to="/flash-sale">Flash Sale</Link></li>
            <li><Link to="/best-sellers">Best Sellers</Link></li>
            <li><Link to="/specials">Specials Offers</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>

          <div className="stores-info">
            <FaMapMarkerAlt />
            <div className="store-text">
              <span className="store-title">Stores Near You</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;