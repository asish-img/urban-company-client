import React from 'react';
import CategoryBarWithoutSlide from './CategoryBarWithoutSlide';
const Appliances = () => {
	const heading = {
		heading: 'Appliances',
		subHeading: 'Servicing,Repair,Installation & Uninstallation',
	};
	const data = [
		{
			id: '1',
			title: 'Refrigerator',
			subtitle: '',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bf5acc80.png',
		},
		{
			id: '2',
			title: 'Geyser',
			subtitle: 'Starts at ₹249',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_c0667020.png',
		},
		{
			id: '3',
			title: 'Water Purifier',
			subtitle: 'Upto 45% off',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bbb8c690.png',
		},
		{
			id: '4',
			title: 'Washing Machine',
			subtitle: '',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_b78221c0.png',
		},
	];
	return (
		<div>
			<CategoryBarWithoutSlide data={data} heading={heading} />
		</div>
	);
};

export default Appliances;
