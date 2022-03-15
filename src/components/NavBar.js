import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <Link to="/">BOOKS</Link>
    <br />
    <Link to="/CATEGORIES">CATEGORIES</Link>
    <div className="avatar">
      <i className="fa fa-user" />
    </div>
  </nav>
);

export default NavBar;
