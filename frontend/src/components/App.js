import "../styles/App.scss";
import SearchBar from "../components/searchbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import AccountPage from "../pages/AccountPage";
import CartPage from "../pages/CartPage";
import ProductPage from "../pages/ProductPage";
import { Routes, Route, Link } from "react-router-dom";
import Categories from "./Categories";
import CategoryPage from "../pages/CategoryPage";
import SearchPage from "../pages/SearchPage";
import CheckoutPage from "../pages/CheckoutPage";
import ImageSlides from "./ImageSlides";
import Slider from "react-slick";
import SliderContainer from "./SliderContainer";

function App() {
  return (
    <div>
      {/* <Categories></Categories> */}

      <header className="Nav">
        <Sidebar></Sidebar>
        <Link to="/"><h1 className="site-name">NOZAMA</h1></Link>
        <SearchBar></SearchBar>
        <Link to="/account"><div className="site-account-btn">Your Account</div></Link>
        <Link to="/cart">
          <div className="site-cart-btn">
          <img src="https://img.icons8.com/ios/40/000000/shopping-cart.png" />
          </div>
        </Link>
      </header>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/item/:id" element={<ProductPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route
          path="/search/:searchEntry"
          element={<SearchPage></SearchPage>}
        />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<div>404: Not Found</div>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
