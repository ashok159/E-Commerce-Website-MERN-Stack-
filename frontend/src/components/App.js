import "../styles/App.scss";
import SearchBar from "../components/searchbar";
import Account from "../components/account";
import Cart from "../components/Cart";
import Sidebar from "../components/Sidebar";
import HomePage from "../pages/HomePage";
import AccountPage from "../pages/AccountPage";
import CartPage from "../pages/CartPage";
import ProductPage from "../pages/ProductPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <header className="Nav">
        <Sidebar></Sidebar>
        <SearchBar></SearchBar>
        <Account></Account>
        <Cart></Cart>
        <a href="/">Allie Finsta</a>
      </header>

      {/* <Router> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/item/:id" element={<ProductPage />} />
          <Route path="*" element={<div>404: Not Found</div>} />
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
