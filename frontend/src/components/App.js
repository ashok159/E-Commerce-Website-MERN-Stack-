import "../styles/App.scss";
import HomePage from "../pages/HomePage";
import AccountPage from "../pages/AccountPage";
import CartPage from "../pages/CartPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<div>404: Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
