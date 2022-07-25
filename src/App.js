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

function App() {
	return (
		<div className="App">
			<Background />
			<TopOfferSlide />
			<NewCategoryLaunches />
			<BestOffers />
			<Appliances />
			<SalonSpaAndMassageServices />
			<CleaningAndPestControl />
			<UcLuxuryExperience />
			<HomeRepairs />
		</div>
	);
}

export default App;
