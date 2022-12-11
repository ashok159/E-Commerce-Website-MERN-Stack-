import SearchBar from "../components/searchbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductPage() {
  const { id } = useParams();
  const [itemData, setItemdata] = useState([]);
  const [image, setImage] = useState([]);

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
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductPage;
