import "../styles/App.scss";
import SearchBar from "../components/searchbar";
import TestAPI from "../components/ItemContainer";
import Footer from "../components/Footer";
import HeaderSlider from "../components/HeaderSlider";
import Account from "../components/account";
import Cart from "../components/Cart";
import Sidebar from "../components/Sidebar";

function HomePage() {
  return (
    <div className="App">
      <header className="Nav">
        <Sidebar></Sidebar>
        <SearchBar></SearchBar>
        <Account></Account>
        <Cart></Cart>
        <a href="/">Allie Finsta</a>
      </header>
      <HeaderSlider></HeaderSlider>
      <main></main>
      <TestAPI></TestAPI>
      <Footer />
    </div>
  );
}

export default HomePage;
