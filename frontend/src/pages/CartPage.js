import React from "react";
import { Link } from "react-router-dom";
import "../styles/CartPage.css";

function CartPage() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (cart === null) {
    cart = [];
  }

  function windowRefresh() {
    window.location.reload();
  }

  function removeFromCart(productName) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].title === productName) {
        cart.splice(i, 1);
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart.length);
  }

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cart.map((item) => (
        <div className="item-display">
          <img src={item.thumbnail} alt="product" />
          <h3>{item.title}</h3>
          <h3>Price: ${item.price}</h3>
          <button
            onClick={() => {
              removeFromCart(item.title);
              windowRefresh();
              alert("Item removed from cart!");
            }}
          >
            Remove from Cart
          </button>
          <h3>--------------------------------------</h3>
        </div>
      ))}
      <Link to="/checkout">Checkout</Link>
    </div>
  );
}

export default CartPage;
