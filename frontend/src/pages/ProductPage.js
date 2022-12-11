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
    <div className="App">
      <div className="product_page">
        <h3>Brand: {itemData.brand}</h3>
        <img src={image[0]} alt="product" />
        <h1>{itemData.title}</h1>
        <h2>{itemData.description}</h2>
        <h3>Rating: {itemData.rating}/5</h3>
        <h3>${itemData.price}</h3>
        <h3>Items Remaining: {itemData.stock}</h3>
        <button
          onClick={() => {
            alert("Item added to cart!");
            addToCart();
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
