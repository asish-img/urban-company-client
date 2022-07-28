import React from 'react';
import CategoryBarWithoutSlide from './CategoryBarWithoutSlide';

const HomeRepairs = () => {
	const heading = {
		heading: 'Home Repairs',
		// subHeading: 'Top Professionals | Best Brands | Premium Experience',
	};
	const data = [
		{
			id: '1',
			title: 'Furniture Making, Upholstery & Polish',
			// subtitle: 'Free Waxing',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg',
		},
		{
			id: '2',
			title: 'Carpenters',
			// subtitle: 'Flat ₹100 off',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/carpenter.jpg',
		},
		{
			id: '3',
			title: 'Electricians',
			// subtitle: 'Free head massage',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_a91b73d0.jpeg',
		},
		{
			id: '4',
			title: 'Plumbers',
			// subtitle: 'Starts at ₹499',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/plumber.jpg',
		},
	];
	return (
		<div>
			<CategoryBarWithoutSlide data={data} heading={heading} />
			{/* <MultiCarousalWithoutArrow data={data} heading={heading}  /> */}
		</div>
	);
};

export default HomeRepairs;
