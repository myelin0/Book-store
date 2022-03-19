import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="Bookstore-CMS">
    <div className="headwrap">
      <h1 className="cms">Bookstore CMS</h1>
      <div className="nav-links">
        <Link className="nav-item" to="/">BOOKS</Link>
        <br />
        <Link className="nav-item" to="/CATEGORIES">CATEGORIES</Link>
      </div>
    </div>
    <div className="avatar">
      <i className="fa fa-user" />
    </div>
  </nav>
);

export default NavBar;
