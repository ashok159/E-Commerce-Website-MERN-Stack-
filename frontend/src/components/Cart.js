import "../styles/Cart.css";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="Cart-nav">
      <Link to="/cart">
        <img src="https://img.icons8.com/ios/40/000000/shopping-cart.png" />
      </Link>
    </div>
  );
}

export default Cart;
