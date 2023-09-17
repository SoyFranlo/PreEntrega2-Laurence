// import React from 'react';
import Cartwidget from '../Cartwidget';
import {Link, NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [cart, setCart] = useState([]);

  

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top">
    <div className="container-fluid">
      <h1>
        <Link to="/">Pasión Xeneize</Link>
      </h1>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/category/Jerseys" className="nav-link">Jerseys</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/Socks" className="nav-link">Socks</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/Shorts" className="nav-link">Shorts</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/Jackets" className="nav-link">Jackets</NavLink>
          </li>
        </ul>
      </div>
      <Cartwidget cart={cart} removeFromCart={removeFromCart} />
    </div>
  </nav>
  );
};

export default NavBar;
