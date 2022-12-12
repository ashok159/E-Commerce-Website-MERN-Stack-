import "../styles/App.scss";
import ItemContainer from "../components/ItemContainer";
import Footer from "../components/Footer";
import HeaderSlider from "../components/HeaderSlider";
import SliderContainer from "../components/SliderContainer";


function HomePage() {
  return (
    <div className="App">
      {/* <HeaderSlider></HeaderSlider> */}
      <SliderContainer></SliderContainer>
      <ItemContainer></ItemContainer>
    </div>
  );
}

export default HomePage;
