import './App.css';

import Background from './components/Background';
import SalonSpaAndMassageServices from './components/Categories/SalonSpaAndMassageServices';
import CleaningAndPestControl from './components/Categories/CleaningAndPestControl';
import UcLuxuryExperience from './components/Categories/UcLuxuryExperience';
import HomeRepairs from './components/Categories/HomeRepairs';
import Appliances from './components/Categories/Appliances';
import BestOffers from './components/Categories/BestOffers';
import NewCategoryLaunches from './components/NewCategoryLaunches';
import TopOfferSlide from './components/Categories/TopOfferSlide';
import CurrentLocation from './components/CurrentLocation';
import Search from './components/Search';
import SearchBar from './components/SearchBar';
function App() {
	return (
		<div className="App">
			<Background />
			{/*<TopOfferSlide />
			<NewCategoryLaunches />
			<BestOffers />
			<Appliances />
			<SalonSpaAndMassageServices />
			<CleaningAndPestControl />
			<UcLuxuryExperience />
			<HomeRepairs /> */}
			{/* <CurrentLocation /> */}
			{/* <Search /> */}
			{/* <SearchBar /> */}
		</div>
	);
}

export default App;
