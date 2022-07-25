import React from 'react';
// import { Box, Typography } from '@mui/material';
import CategoryBarWithoutSlide from './CategoryBarWithoutSlide';
const UcLuxuryExperience = () => {
	const heading = {
		heading: 'UC Luxury Experience',
		subHeading: 'Top Professionals | Best Brands | Premium Experience',
	};
	const data = [
		{
			id: '1',
			title: 'Salon Luxe',
			// subtitle: 'Free Waxing',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883165804-025664.png',
		},
		{
			id: '2',
			title: 'Salon for Men Royale',
			// subtitle: 'Flat ₹100 off',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164057-dd5910.png',
		},
		{
			id: '3',
			title: 'Spa Luxe',
			// subtitle: 'Free head massage',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164904-165c1e.png',
		},
		{
			id: '4',
			title: 'Massage Therapy for Men Royale',
			// subtitle: 'Starts at ₹499',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164502-08f9f6.png',
		},
	];
	return (
		<div>
			<CategoryBarWithoutSlide data={data} heading={heading} />
		</div>
	);
};

export default UcLuxuryExperience;
