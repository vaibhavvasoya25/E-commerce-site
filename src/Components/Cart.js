import React from "react";

const Cart = () => {
  return (
    <div>
      <div
        to="/"
        className="add-to-cart"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <span className="cart-count">{0}</span>
        <img
          alt="addToCart"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5VgDDUaewB94kEe7tlvA8XZ6gKS7-PWaS0kMHZoicSg&usqp=CAU&ec=48600113"
        />
      </div>
    </div>
  );
};

export default Cart;
