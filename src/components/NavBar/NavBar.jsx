// import React from 'react';
import Cartwidget from '../Cartwidget';
import {Link, NavLink} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top">
    <div className="container-fluid">
      <h1>
        <Link className="nav-title"to="/">Boca Store</Link>
      </h1>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/category/jerseys" className="nav-link">Jerseys</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/socks" className="nav-link">Socks</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/shorts" className="nav-link">Shorts</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/jackets" className="nav-link">Jackets</NavLink>
          </li>
        </ul>
      </div>
      <NavLink to="/cart"> 
      <Cartwidget/>

      </NavLink>
    </div>
  </nav>
  );
};

export default NavBar;
