// import React from 'react';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar el archivo CSS de Bootstrap

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
    <div className="container-fluid">
      <h1 className="navbar-brand">Pasión Xeneize</h1>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">Camisetas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Medias</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Camperas</a>
          </li>
        </ul>
      </div>
      <CartWidget />
    </div>
  </nav>
  );
};

export default NavBar;
