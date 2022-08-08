import React from 'react';
import Beauty from './Beauty';


const Beautydata = () => {
	const heading = {
		heading: 'Appliances',
		subHeading: 'Servicing,Repair,Installation & Uninstallation',
	};
	const data = [
		{
			id: '1',
			title: 'Best Sheet Masks in India',
			subtitle: 'Sheet masks are like those quick facials you can have with no added effort. Most of these face masks usually live up to their claims. Here we have a look at the…',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/09/11170202/Best-Sheet-Masks-in-India.jpg',
		},
		
        
	];

    const arr = [
		{
			id: '1',
			title: 'BEAUTY, SKINCARE',
			subtitle: 'The Wonders of Coconut Oil for Face ',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/09/02182811/65292faf9652d19903511ac3a4a31340-150x150.jpg',
		},
		{
			id: '1',
			title: 'BEAUTY, SKINCARE',
			subtitle: '	RICA Roll-on Waxing The Process',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/08/28185438/rollon12-512x341-150x150.jpg',
		},
		{
			id: '1',
			title: 'BEAUTY, SKINCARE',
			subtitle: 'All you Need to know About the Sara Fruit Cleanup ',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/08/28123311/new-150x150.jpg',
		},
		{
			id: '1',
			title: 'BEAUTY, SKINCARE',
			subtitle: 'Best Night Creams in India for Indian Types ',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/08/24091358/kama-180x180.png',
		},
        
	];
	return (
		<div>
			<Beauty data={data} heading={heading} arr={arr}/>
		</div>
	);
};

export default Beautydata;
