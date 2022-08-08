import React from 'react'
import Background from './Background'
import TopOfferSlid  from './Categories/TopOfferSlide'
import NewCategoryLaunches from './Categories/NewCategoryLaunches'
import BestOffers from './Categories/BestOffers'
import Appliances  from './Categories/Appliances'
import SalonSpaAndMassageServices from './Categories/SalonSpaAndMassageServices'
import CleaningAndPestControl from './Categories/CleaningAndPestControl'
import UcLuxuryExperience from './Categories/UcLuxuryExperience'
import HomeRepairs from './Categories/HomeRepairs'
import SearchBar from './SearchBar'
import Footer  from './Categories/Footer'
import CurrentLocation from './CurrentLocation'
import Company from './Categories/Company'
function Components() {
  return (
    <div>
        <Background /> 
		 <CurrentLocation />
			<TopOfferSlid />
			<NewCategoryLaunches />
			<BestOffers />
			<Appliances />
			<SalonSpaAndMassageServices />
			<CleaningAndPestControl />
			<UcLuxuryExperience /> 
			 <HomeRepairs />  
			 < Company />
			 {/* <SearchBar /> */}
			
			 <Footer />
    </div>
  )
}

export default Components