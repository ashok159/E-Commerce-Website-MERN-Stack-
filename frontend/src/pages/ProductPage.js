import SearchBar from "../components/searchbar";
import Footer from "../components/Footer";
import Account from "../components/account";
import Cart from "../components/Cart";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

function ProductPage() {
  const { id } = useParams();
  const [itemData, setItemdata] = useState([]);

  useEffect(()=>{
        axios.get(`/item/${id}`)
          .then(response => {
            console.log(response.data)
        setItemdata(response.data);
      })

  }, [])

  return (
    <div className="App">
      <main>
        <h1>{itemData.title}</h1>
        <p>{itemData.description}</p>
      </main>
      <Footer />
    </div>
  );
}

export default ProductPage;
