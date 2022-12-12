import SearchBar from "../components/searchbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ProductPage.css";

function ProductPage() {
  const { id } = useParams();
  const [itemData, setItemdata] = useState([]);
  const [image, setImage] = useState([]);

  function addToCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart === null) {
      cart = [];
    }
    cart.push(itemData);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
  }

  useEffect(() => {
    axios.get(`/item/${id}`).then((response) => {
      // console.log(response.data);
      setItemdata(response.data);
      setImage(response.data.images);
    });
  }, []);

  return (
    <div>
      <div className="product-page-container">
        <div className="product-page-img">
          <img src={image[0]} alt="product" />
        </div>
        <div className="product_page_text">
          <h1 className="product-page-title">{itemData.title}</h1>
          <div className="product-page-price">${itemData.price}</div>
          <div className="product-page-discount">-{itemData.discountPercentage}% OFF ORIGINAL PRICE</div>
          <div className="product-page-rating">Rating: {itemData.rating} (5)</div>
          <button 
            className="product-page-cart-button"
            onClick={() => {
              alert("Item added to cart!");
              addToCart();
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="product-page-bottom">
        <h4 className="product-page-bottom-title">More Details:</h4>
        <div>Brand: {itemData.brand}</div>
        <div>Description: {itemData.description}</div>
        <div>Items Remaining: {itemData.stock}</div>
      </div>
    </div>
  );
}

export default ProductPage;
