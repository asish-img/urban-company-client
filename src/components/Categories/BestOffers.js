import React from 'react';
import CategoryBarWithoutSlide from './CategoryBarWithoutSlide';
const BestOffers = () => {
	const heading = {
		heading: 'Best Offers',
		subHeading: 'Hygienic & single use products | low-contact services',
	};
	const data = [
		{
			id: '1',
			title: 'Salon for Men',
			subtitle: 'Flat ₹100 off ',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1615874646690-66ab68.jpeg',
		},
		{
			id: '2',
			title: 'Massage for Men',
			subtitle: 'Starts at ₹499',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1606211470897-f4afbc.jpeg',
		},
		{
			id: '3',
			title: 'Geyser',
			subtitle: 'Starts at ₹249',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_c0667020.png',
		},
		{
			id: '4',
			title: 'House Painters',
			subtitle: 'Consultation at ₹49 ',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1602245928963-5094c6.jpeg',
		},
	];
	return (
		<div>
			<CategoryBarWithoutSlide data={data} heading={heading} />
		</div>
	);
};

export default BestOffers;
