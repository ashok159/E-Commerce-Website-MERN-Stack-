import '../styles/App.scss';
import SearchBar from './searchbar';
import Footer from './Footer';
import HeaderSlider from './HeaderSlider';
import Account from './account';
import Cart from './Cart';
import Sidebar from './Sidebar';
import ItemContainer from "./ItemContainer";
// import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="Nav">
        <Sidebar></Sidebar>
        <SearchBar></SearchBar>
        <Account></Account>
        <Cart></Cart>
        <a href="/">Nozama</a>
      </header>
 
      <div>
        <HeaderSlider></HeaderSlider>
        <ItemContainer></ItemContainer>
      </div>
      <Footer/> 

    </div>   
  );
}

export default App;