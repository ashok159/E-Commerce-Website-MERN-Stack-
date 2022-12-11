import "../styles/App.scss";
import ItemContainer from "../components/ItemContainer";
import Footer from "../components/Footer";
import HeaderSlider from "../components/HeaderSlider";


function HomePage() {
  return (
    <div className="App">
      <HeaderSlider></HeaderSlider>
      <ItemContainer></ItemContainer>
    </div>
  );
}

export default HomePage;
