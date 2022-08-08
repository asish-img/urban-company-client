import React from 'react'

import Menu from './Menu';

function BeautyMenudata() {
    const arr = [
		{
			id: '1',
			title: 'A daily hair care routine to help you maintain healthy hair is just as important…',
			subtitle: ' How to Maintain Healthy Hair: Daily Hair Care Routine ',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2017/11/28115554/shutterstock_488716720.jpg',
		},
		{
			id: '1',
			title: 'In this post you will learn: How to choose the right shade from the LÓreal…',
			subtitle: '	Loreal Hair Color Chart – Top 10 Shades for Indian Skin Tones',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/06/25151611/shutterstock_1008717547.jpg',
		},
		{
			id: '1',
			title: 'While red is ravishing, black is bewitching, and blonde is, well, blonde, brown is simply…',
			subtitle: ' 13 Brown Hair Color Shades for Indian Skin Tones',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/06/29151619/brown-hair-color-chart.jpg',
		},
		{
			id: '1',
			title: '  Do you have grey hair? If the answer is ‘yes’, then you are probably…',
			subtitle: ' Things to Keep in Mind When Choosing a Hair Dye for Indian Skin',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/08/31133617/shutterstock_520906765.jpg'
		},
        {
			id: '1',
			title: 'If you’re looking for the best gel eyeliner brands, it’s highly likely that you are…',
			subtitle: ' Makeup Must – Haves: Best Gel Eyeliner Brands in India',
			link: ' https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/11/25132108/Minimalist-Nail-Art-Cover-Photos1.png',
		},
        {
			id: '1',
			title: 'For many women out there, the terms ‘nail art’ and ‘effort’ interchangeable. Truth be told,…',
			subtitle: '18 Minimalist Nail Art Designs for the Lazy Girl ',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/07/31150024/How-to-Choose-Hair-Dye1.png',
		},
        	{
			id: '1',
			title: 'We asked the women of Urban Company to reveal their favourite red lipsticks, and in the…',
			subtitle: ' What’s Your Red? The Best Red Lipsticks for Indian Skin Tones ',
			link: ' https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/31131624/Whats-My-Red-Cover-photo-768x292.png',
		},
        
	];

	const arr1 = [
		{
			id: '1',
			title: 'How To Grow Your Beard Faster',
			subtitle: ' Beards have been popular for the last few years as a style statement around the… ',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/12/13182709/How-To-Grow-Beard-Faster.jpg',
		},
		{
			id: '1',
			title: 'How To Prevent Dandruff In Men',
			subtitle: '	Dandruff is a common problem faced by people across the globe. Men are more frequent…',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/09/03122055/best-dandruff-shampoo-for-men-1024x459.jpg',
		},
		{
			id: '1',
			title: 'Men’s Hair Colouring: Home or Salon?',
			subtitle: ' If you’ve stepped into your early thirties, chances are those grey hairs are peeking out…',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/08/31123544/gettyimages-181879127-1589643370.jpg',
		},
		{
			id: '1',
			title: ' Men’s Hairstyles—3 Classics and How to Do Them',
			subtitle: ' Been sporting the casual messy look on your hair for too long? Let us help…',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/08/27114437/90426618_154256686052525_1736364692824191085_n.jpg'
		},
        {
			id: '1',
			title: 'Learn How to Trim Your Beard At Home!',
			subtitle: ' The current quarantine situation has got everyone re-evaluating, re-imagining and re-doing things we’ve deemed normal.…',
			link: ' https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/04/27125721/Landscape-Canyon-Blog-Banner-1-1.jpg',
		},
        {
			id: '1',
			title: 'The Best Beard Oil In India',
			subtitle: 'Beard oil is a specially formulated oil that helps soften coarse hair and makes it… ',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/12/24143730/best-beard-oil-1.jpg',
		},
        	{
			id: '1',
			title: 'Male Pattern Baldness – Causes And Solutions',
			subtitle: ' This post discusses all about male pattern baldness and the various reasons that cause hair… ',
			link: ' https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/10/30105306/male-pattern-baldness.jpg',
		},
        
	];
	const arr2 = [
		{
			id: '1',
			title: 'Everything You Need To Know About Wooden Flooring! *Prices Included*',
			subtitle: ' Is wooden flooring practical for Indian homes? What should one consider before installing wood flooring… ',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2017/12/03185905/Wooden-Flooring.jpg',
		},
		{
			id: '1',
			title: '12 Ways To Have A Beautiful Spa-Like Bathroom On A Budget',
			subtitle: '	Have you been dreaming of your favourite spa? Don’t you just love the vibe their dressing…',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2017/11/03191902/shutterstock_556196275.jpg',
		},
		{
			id: '1',
			title: 'How to Maintain a White Kitchen in India (To Keep It White!)',
			subtitle: '   If you’ve taken the plunge and got yourself a white kitchen, then, congratulations! But…',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/01/03190423/How-to-maintain-a-white-kitchen-in-India-Urbanclap-Professional-Avasiti-Designs-image.jpeg',
		},
		{
			id: '1',
			title: '   If you’ve taken the plunge and got yourself a white kitchen, then, congratulations! But…',
			subtitle: ' Can you place a kitchen in the north west? Where should the sink, stove and…',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/02/08181918/ceiling-cabinets-posh.jpeg'
		},
        {
			id: '1',
			title: 'The Beginners Guide To Understanding Kitchen Layout Designs',
			subtitle: ' If you’re a homeowner who has recently started designing your new kitchen or remodelling your…',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/01/03184734/Feature-Image-The-Beginners-Kitchen-Guide-to-Understanding-Kitchen-Layout-Designs-Urbanclap-Homes.jpeg',
		},
        {
			id: '1',
			title: '11 Pinterest-Worthy Ways To Style Your Coffee Table',
			subtitle: 'Most of us use our coffee table when there’s a snack or hot beverage that…',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2017/12/03190903/maintain-the-highs-and-lows-coffee-table.jpg',
		},
        	{
			id: '1',
			title: 'Inside Akshay Kumar and Twinkle Khanna’s Artistically Inviting Home',
			subtitle: ' This is the sixth post in the series – Celebrity Home Tours Week on Urban…',
			link: ' https://de927adv5b23k.cloudfront.net/wp-content/uploads/2017/12/03185909/Akshay-kumars-home-tour.jpg',
		},
        
	];

	const arr3 = [
		{
			id: '1',
			title: 'No End to Dreaming Big for Superstar Jyoti',
			subtitle: ' Meeting pros is always a humbling experience. There is an instant feeling of belonging to… ',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/11/12193743/IMG_20191101_125802.jpg',
		},
		{
			id: '1',
			title: 'Getting Back Up When Life Knocked Her Down: Rachna’s Story',
			subtitle: '	Life is not what happens to you, but what you make of it and how…',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/11/19132552/IMG_20191109_122941-1.jpg',
		},
		{
			id: '1',
			title: 'Becoming An Equal Partner – How Beautician Shalini Made It Happen',
			subtitle: '   This is exactly what I love about Urban Company. I joined four months back, and…',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/11/19160742/Becoming-An-Equal-Partner-1.jpg',
		},
		{
			id: '1',
			title: '   This Carpenter’s Story Has A Lesson For Everybody',
			subtitle: ' In October last year, Umesh Sharma was employed as a helper by a firm in…',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2016/04/29163850/carpenter.jpg'
		},
        {
			id: '1',
			title: 'No Dream is Too Big for Preeti Dua | Salon Professional',
			subtitle: ' My husband and I are at an equal standing. In fact, I might be at…',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2021/06/22114135/Preeti-Blog-feature.jpg',
		},
        {
			id: '1',
			title: 'From a Daily-wage Laborer to Star Cleaner at Urban Company: Story of Rabiul',
			subtitle: 'As part of the #UCTurns5 drive, I had the pleasure of meeting Rabiul who has…',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/11/15190942/Star-Cleaner-at-UC.jpg',
		},
        	
        
	];
	const arr4 = [
		{
			id: '1',
			title: 'Urban Company partners with Saudi’s leading beauty services provider Baheya to bring unparalleled at-home services in the region',
			subtitle: ' Urban Company, Asia’s largest tech-enabled home services marketplace, has entered into a partnership with Baheya,…',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2022/07/28172838/ucfeatured-740x560.jpeg',
		},
		{
			id: '1',
			title: '#UCUpskill — Rising with Urban Company',
			subtitle: '	One of our key pillars of partner enablement is training and upskilling of our service…',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2022/07/28172251/pros.jpg',
		},
		{
			id: '1',
			title: 'Rolling out health insurance for all our partners!',
			subtitle: '   The health insurance plan will benefit 40,000+ partners in India We are pleased to introduce…',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2022/05/25130744/health-insurance.jpeg',
		},
		{
			id: '1',
			title: '   On Our 5 Year Anniversary, a Trip Down Memory Lane',
			subtitle: ' 10th November, a special day for all of us at UrbanClap. This year, we marked…',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/06/24115207/uc.jpg'
		},
        {
			id: '1',
			title: 'The ‘Whatever It Takes’ Company',
			subtitle: '   I had joined Urban Company (UC) after a thoroughly enjoyable 4 year stint at…			',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/09/25164051/0_h2Lrv6hbeEe_SRvC.jpg',
		},
        {
			id: '1',
			title: '4 Years in, but Still Day 1 for Me!',
			subtitle: '  This article is part of our series “Thriving in Urban Company” Read more articles:…',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/11/15190942/Star-Cleaner-at-UC.jpg',
		},
		{
			id: '1',
			title: 'Why Go Long on Urban Company ESOPs',
			subtitle: 'This article is part of our series “Thriving in Urban Company” Read more articles: Skin… ',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/09/16171503/shutterstock_269280611_small.jpg',
		},
        	
        
	];
	const arr5 = [
		{
			id: '1',
			title: '5 Trending Hairstyles for Long Hair to Try This Shaadi Season',
			subtitle: ' Vicky and Katrina aren’t the only ones smitten this season of love. With invitations piling…',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2021/12/03163659/456.jpg',
		},
		{
			id: '1',
			title: 'Which is The Best Hair Removal Method?',
			subtitle: 'When it comes to getting rid of unwanted hair, there are hundreds of good options…',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2021/08/03162342/featured-best-hair-removal-method.jpg',
		},
		{
			id: '1',
			title: 'McAloo Tikki at Home: Can Antil & Pavitra do it?',
			subtitle: '   The pandemic has definitely woken up the chef in all of us but in the…',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2022/02/03155846/featured_TUG-740x560.jpg',
		},
		
		
        	
        
	];
	const arr6 = [
		{
			id: '1',
			title: 'No End to Dreaming Big for Superstar Jyoti',
			subtitle: ' Meeting pros is always a humbling experience. There is an instant feeling of belonging to… ',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/11/12193743/IMG_20191101_125802.jpg',
		},
		{
			id: '1',
			title: 'Getting Back Up When Life Knocked Her Down: Rachna’s Story',
			subtitle: '	Life is not what happens to you, but what you make of it and how…',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/11/19132552/IMG_20191109_122941-1.jpg',
		},
		{
			id: '1',
			title: 'Becoming An Equal Partner – How Beautician Shalini Made It Happen',
			subtitle: '   This is exactly what I love about Urban Company. I joined four months back, and…',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/11/19160742/Becoming-An-Equal-Partner-1.jpg',
		},
		{
			id: '1',
			title: '   This Carpenter’s Story Has A Lesson For Everybody',
			subtitle: ' In October last year, Umesh Sharma was employed as a helper by a firm in…',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2016/04/29163850/carpenter.jpg'
		},
        {
			id: '1',
			title: 'No Dream is Too Big for Preeti Dua | Salon Professional',
			subtitle: ' My husband and I are at an equal standing. In fact, I might be at…',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2021/06/22114135/Preeti-Blog-feature.jpg',
		},
        {
			id: '1',
			title: 'From a Daily-wage Laborer to Star Cleaner at Urban Company: Story of Rabiul',
			subtitle: 'As part of the #UCTurns5 drive, I had the pleasure of meeting Rabiul who has…',
			link: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/11/15190942/Star-Cleaner-at-UC.jpg',
		},
        	
        
	];
  return (
    <div>
      <Menu arr={arr}  arr1={arr1} arr2={arr2} arr3={arr3} arr4={arr4} arr5={arr5}/>
    </div>
  )
}

export default BeautyMenudata