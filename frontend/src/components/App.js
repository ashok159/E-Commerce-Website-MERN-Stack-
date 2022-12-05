<<<<<<< HEAD
import '../styles/App.scss';
import SearchBar from './searchbar';
import TestAPI from './TestAPI';
import Footer from './Footer';
import HeaderSlider from './HeaderSlider';
import Account from './account';
import Cart from './Cart';

import Sidebar from './Sidebar';

=======
import '../styles/App.css';
import SearchBar from './search';
import TestAPI from './TestAPI';
>>>>>>> 99e9afab8e73dc3eea3d55a379f7bbc700f7fbde

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