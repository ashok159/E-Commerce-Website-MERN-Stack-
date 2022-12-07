import '../styles/App.scss';
import SearchBar from './searchbar';
import TestAPI from './TestAPI';
import Footer from './Footer';
import HeaderSlider from './HeaderSlider';
import Account from './account';
import Cart from './Cart';

import Sidebar from './Sidebar';

function App() {
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
      <main>
      </main>  
      <TestAPI></TestAPI>  
      <Footer/> 

    </div>   
  );
}

export default App;