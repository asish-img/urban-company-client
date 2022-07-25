import CategoriesWithGrid from "./Components/CategoriesWithGrid";
import Footer from "./Components/Footer";
import HomeServices from "./Components/HomeServices";
import Appliances from "./Components/Appliances/Appliances";
import BestOffers from "./Components/BestOffers/BestOffers";
import NewCategoryLaunches from "./Components/NewCategoryLaunches/BestOffers/NewCategoryLaunches";
import Slider1 from "./Components/Slider1/Slider1";

function App() {
  return (
    <div>
      <CategoriesWithGrid />
      <HomeServices />
      {/* <Footer /> */}
      <Appliances />
      <BestOffers />
      <NewCategoryLaunches />
      <Slider1 />
    </div>
  );
}

export default App;
