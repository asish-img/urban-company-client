import React from 'react';
import CategoryBarWithoutSlide from './Categories/CategoryBarWithoutSlide';

const NewCategoryLaunches = () => {
	const heading = {
		heading: 'New Category Launches',
		// subHeading: 'Hygienic & single use products | low-contact services',
	};
	const data = [
		{
			id: '1',
			title: 'Laser And Advanced Facials',
			subtitle: 'Advanced Skin treatments ',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1646140576865-02aba1.jpeg',
		},
		{
			id: '2',
			title: 'Furniture making,Upholstery & Polish',
			subtitle: '',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg  ',
		},
		{
			id: '3',
			title: 'Air Purifier',
			subtitle: 'Flat ₹100 off',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg',
		},
		{
			id: '4',
			title: 'Buy RO Water Purifier',
			subtitle: '',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1643120136395-80523e.jpeg',
		},
	];
	return (
		<div>
			<CategoryBarWithoutSlide data={data} heading={heading} />
		</div>
	);
};

export default NewCategoryLaunches;
