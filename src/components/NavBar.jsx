// import React from 'react';
import CartWidget from './CartWidget';
import {Link, NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar el archivo CSS de Bootstrap

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container-fluid">
      <h1 className="navbar-brand-dark">
        <Link to="/">Pasión Xeneize</Link>
      </h1>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/category/camisetas" className="nav-link">Camisetas</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/medias" className="nav-link">Medias</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/camperas" className="nav-link">Camperas</NavLink>
          </li>
        </ul>
      </div>
      <CartWidget />
    </div>
  </nav>
  );
};

export default NavBar;
