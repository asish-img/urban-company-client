import React from 'react';
import Carusole from './Carusole';

const Carsouledata = () => {
	const heading = {
		heading: 'Appliances',
		subHeading: 'Servicing,Repair,Installation & Uninstallation',
	};
	const data = [
		{
			id: '1',
			title: 'COMPANY UPDATES',
			subtitle: 'Urban Company partners with Saudi’s leading beauty services provider Baheya to bring unparalleled at-home services in the region ',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2022/07/28172838/ucfeatured-740x560.jpeg',
		},
		{
			id: '2',
			title: 'Geyser',
			subtitle: 'Starts at ₹249',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2022/02/03155846/featured_TUG-740x560.jpg',
			id: '3',
			title: 'INSIDE URBAN COMPANY',
			subtitle: 'Rolling out health insurance for all our partners!',
			link: 'https://miro.medium.com/max/1400/1*zCNTuZnKQEyRsULVKRQBEQ.jpeg',
		},
		{
			id: '4',
			title: 'COMPANY UPDATES',
			subtitle: "#UCUpskill — Rising with Urban Company",
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2022/07/28172251/pros.jpg',
		},
        {
			id: '5',
			title: 'TUG VIDEOS',
			subtitle: '5 Trending Hairstyles for Long Hair to Try This Shaadi Season',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2021/12/03163659/456.jpg'
		},
        {
			id: '6',
			title: 'INSIDE URBAN COMPANY',
			subtitle: 'Earnings Index Benchmarking Report | UC Service Professionals vs Off the Platform Professionals',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2022/01/20102419/pexels-lukas-590022-1.jpg'
		},
	];
	return (
		<div>
			<Carusole data={data} heading={heading} />
		</div>
	);
};

export default Carsouledata;
