// import React from 'react';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <button className="btn btn-light btn-outline-dark position-relative">
      <i className="bi bi-cart-fill"></i>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    5
    <span className="visually-hidden">Productos en el Carrito</span>
  </span>
      </button>
    </div>
  );
};

export default CartWidget;
