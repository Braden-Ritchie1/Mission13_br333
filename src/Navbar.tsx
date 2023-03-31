import React from 'react';
import { Link } from 'react-router-dom';

//this function handles the navbar and allows linking from the home page to the podcast and movie list pages
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link text-light" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/podcast">
              Podcast
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/movieList">
              Movie List
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
