import React from "react";
import { Link } from "react-router-dom";
import {  FaSearch } from "react-icons/fa";
import"./Header.css";

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="navbar">
        <div className="logo">HighTech</div>
      <nav className="nav">
      <ul>
        <li>
          <a className="nav-link active" aria-current="page" href="layout">Home</a>
        </li>
        <li>
          <Link className="nav-link" to='product'>Product</Link>
        </li>
        <li>
          <Link className="nav-link" to="/services">Services</Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
      
      <div className="navbar-center">
        <form className="search-box">
          <input type="text" placeholder="Search..." />
          <button type="submit">
            <FaSearch />
          </button>
          </form>
      </div>
      </nav>
   </header>
   
  );
};

export default Navbar;
