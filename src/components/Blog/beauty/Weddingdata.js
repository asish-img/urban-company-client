import React from 'react';
import Beauty from './Beauty';
import Wedding from './Wedding';


const Weddingdata = () => {
	const heading = {
		heading: 'Appliances',
		subHeading: 'Servicing,Repair,Installation & Uninstallation',
	};

    const arr = [
		{
			id: '1',
			title: 'BEAUTY, SKINCARE',
			subtitle: '7 Mandap Decor Designs Based On The Foliage & Greenery Trend ',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/02/31161829/New-latest-green-floral-Mandap-decor-by-Bhoomi-wedding-planners-1-150x150.jpg',
		},
		{
			id: '2',
			title: 'BEAUTY, SKINCARE',
			subtitle: '	5 Brides Who Chose To Go Super Minimal With Their Makeup & Looked Fabulous!',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/07/31160424/Minimal-bridal-makeup-150x150.jpg',
		},
		{
			id: '3',
			title: 'BEAUTY, SKINCARE',
			subtitle: ' Stage Decor Ideas for Smaller Functions (Engagement, Cocktail, Sangeet! ',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/07/30164030/Sangeet-stage-decor-Altair-150x150.jpeg',
		},
		{
			id: '4',
			title: 'BEAUTY, SKINCARE',
			subtitle: '14 Best Stage Decoration Ideas For Indian Weddings! ',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/05/30140554/Wedding-Stage-decor-outdoor-150x150.jpg',
		},
        {
			id: '5',
			title: 'BEAUTY, SKINCARE',
			subtitle: ' All You Need to Know About Enamel Painting ',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/09/17134553/Untitled-design-2-1-150x150.jpg',
		},
      
        
        {
			id: '6',
			title: 'BEAUTY, SKINCARE',
			subtitle: 'Textured Walls: Everything You Need to Know ',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/09/14155712/Untitled-design-1-150x150.jpg',
		},
        {
			id: '7',
			title: 'BEAUTY, SKINCARE',
			subtitle: ' Wood Polishing: All You Need to Know',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/09/09230216/painting-150x150.jpg',
		},
        {
			id: '8',
			title: 'BEAUTY, SKINCARE',
			subtitle: 'Waterproofing Your Walls: All You Need to Know',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/09/08173613/waterproof-150x150.jpg',
		},
        
	];

    const arr2 = [
		{
			id: '1',
			title: 'BEAUTY, SKINCARE',
			subtitle: 'Yoga for Thyroid: Different Asanas  ',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/08/19164510/sarvangasana-150x150.jpg',
		},
		{
			id: '2',
			title: 'anulom vilom Health Benefits of Anulom Vilom Pranayama',
			subtitle: '	5 Brides Who Chose To Go Super Minimal With Their Makeup & Looked Fabulous!',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/08/12112509/anulom_vilom-150x150.jpg',
		},
		{
			id: '3',
			title: '6 Yoga Asanas To Help You Burn Your Belly Fat',
			subtitle: ' Stage Decor Ideas for Smaller Functions (Engagement, Cocktail, Sangeet! ',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/11/26170723/yoga-poses-to-150x150.jpg',
		},
		{
			id: '4',
			title: 'BEAUTY, SKINCARE',
			subtitle: 'Is Intermittent Fasting Safe For Women? ',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/11/26132622/intermittent-fasting-women-180x180.jpg',
		},
        {
			id: '5',
			title: 'BEAUTY, SKINCARE',
			subtitle: '   Men’s Hair Colouring: Home or Salon?',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/08/31123544/gettyimages-181879127-1589643370-150x150.jpg',
		},
      
        
        {
			id: '6',
			title: 'BEAUTY, SKINCARE',
			subtitle: 'Men’s Hairstyles—3 Classics and How to Do Them',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/08/27114437/90426618_154256686052525_1736364692824191085_n-150x150.jpg',
		},
        {
			id: '7',
			title: 'BEAUTY, SKINCARE',
			subtitle: ' Learn How to Trim Your Beard At Home!',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/04/27125721/Landscape-Canyon-Blog-Banner-1-1-180x180.jpg',
		},
        {
			id: '8',
			title: 'BEAUTY, SKINCARE',
			subtitle: ' The Best Beard Oil In India',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/12/24143730/best-beard-oil-1-150x150.jpg',
		},
        
	];
	return (
		<div>
			<Wedding  heading={heading} arr={arr} arr2={arr2}/>
		</div>
	);
};

export default  Weddingdata;
