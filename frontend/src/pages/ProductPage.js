import SearchBar from "../components/searchbar";
import Footer from "../components/Footer";
import Account from "../components/account";
import Cart from "../components/Cart";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { name } = useParams();
  return (
    <div className="App">
      <header className="Nav">
        <Sidebar></Sidebar>
        <SearchBar></SearchBar>
        <Account></Account>
        <Cart></Cart>
        <a href="/">Allie Finsta</a>
      </header>
      <main>
        <h1>Product Page</h1>
        <p>Product Name: {name}</p>
      </main>
      <Footer />
    </div>
  );
}

export default ProductPage;
