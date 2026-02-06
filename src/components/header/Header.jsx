import React from 'react';
import { Link } from 'react-router-dom';
import { IoSearchOutline, IoHeartOutline, IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { IoIosGitCompare } from "react-icons/io";
import { FaAngleDown, FaMapMarkerAlt } from "react-icons/fa";
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
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
              <div className="category-select-wrapper">
                <select className="category-select">
                  <option>All Categories</option>
                  <option>Product</option>
                  <option>Flash Sale</option>
                  <option>Best Sellers</option>
                </select>
              </div>
              <button className="search-button">
                <IoSearchOutline />
              </button>
            </div>
          </div>

          <div className="user-actions">
            <button className="action-btn"><IoHeartOutline /></button>
            <button className="action-btn"><IoIosGitCompare /></button>
            <button className="action-btn"><IoCartOutline /></button>
            <button className="action-btn"><IoPersonOutline /></button>
          </div>

        </div>
      </div>

      <nav className="header-bottom">
        <div className="container header-flex">
          
          <div className="categories-btn">
           
            <span>All Categories</span>
           
          </div>

          <ul className="nav-menu">
            <li><Link to="/">Product</Link></li>
            <li><Link to="/">Flash Sale</Link></li>
            <li><Link to="/">Best Sellers</Link></li>
            <li><Link to="/">Specials Offers</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/">Contact Us</Link></li>
          </ul>

          <div className="stores-info">
            <FaMapMarkerAlt />
            <div className="store-text">
              <span className="store-title">Stores Near You</span>
              <span className="store-subtitle">20 Stores Nationwide</span>
            </div>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;