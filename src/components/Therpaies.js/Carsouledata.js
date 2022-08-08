import React from 'react'
import Carsoule from './Carsoule';

function Carsouledata() {

    const data = [
		{
			id: '1',
			title: 'Package',
			subtitle: 'Flat ₹100 off ',
			Content: 'Coffee Body Detain Therpay ' ,
			Rate:'⭐ 4.75(1.9k)',
			Reupess:'899 .40min',
			Guide: ' Spa guide>>',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,h_64,fl_progressive:steep,q_auto/images/growth/luminosity/1659677889575-8a070f.jpeg',
		},
		{
			id: '2',
			title: 'Gift a spa',
			subtitle: 'Starts at ₹499',
			Content: 'Coffee Body Detain Therpay ' ,
			Rate:'⭐ 4.75(1.9k)',
			Reupess:'899 .40min',
			Guide: ' Spa guide>>',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_600,dpr_1,h_324,fl_progressive:steep,q_auto/images/growth/luminosity/1643383505644-32d3c5.jpeg',
		},
		{
			id: '3',
			title: 'Destress',
			subtitle: 'Starts at ₹249',
			Content: 'Top to Toe Therapy' ,
			Rate:'⭐ 4.81(1.9k)',
			Reupess:'1899 .30min',
			Guide: ' Spa guide>>',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_600,dpr_1,h_324,fl_progressive:steep,q_auto/images/growth/home-screen/1634738485614-0a8e51.jpeg',
		},
		{
			id: '4',
			title: 'Women care',
			subtitle: 'Consultation at ₹49 ',
			Content: 'Stress relief Swedish Massage' ,
			Rate:'⭐ 4.05(1.9k)',
			Reupess:'999 .40min',
			Guide: ' Spa guide>>',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_600,dpr_1,h_324,fl_progressive:steep,q_auto/images/growth/luminosity/1648216307204-393f8c.jpeg',
		},
		{
			id: '4',
			title: 'Back Leg Relief',
			subtitle: 'Consultation at ₹49 ',
			Content: 'Holistic De-stress Therapy ' ,
			Rate:'⭐ 4.75(1.9k)',
			Guide: ' Spa guide>>',
			Reupess:'899 .40min',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_600,dpr_1,h_324,fl_progressive:steep,q_auto/images/growth/home-screen/1636471195566-8f60b1.jpeg',
		},
		{
			id: '4',
			title: 'Pain Relief',
			subtitle: 'Consultation at ₹49 ',
			Content: 'Natural Clove Detox Therapy' ,
			Rate:'⭐ 5(1.9k)',
			Guide: ' Spa guide>>',
			Reupess:'899 .40min',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_600,dpr_1,h_324,fl_progressive:steep,q_auto/images/growth/luminosity/1657110549736-e4adf5.jpeg',
		},
		{
			id: '4',
			title: 'Ayurvedic Life ',
			subtitle: 'Consultation at ₹49 ',
			Content: ' Leaomongrass Uplifting aromathrapy' ,
			Rate:'⭐ 4.75(1.9k)',
			Guide: ' Spa guide>>',
			Reupess:'699 .40min',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_600,dpr_1,h_324,fl_progressive:steep,q_auto/images/growth/home-screen/1626351489568-468006.jpeg',
		},
		{
			id: '2',
			title: 'Gift a spa',
			subtitle: 'Starts at ₹499',
			Content: 'Sleep Therpay ' ,
			Rate:'⭐ 4.8(1.9k)',
			Guide: ' Spa guide>>',
			Reupess:'1.199 .40min',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_600,dpr_1,h_324,fl_progressive:steep,q_auto/images/growth/luminosity/1655801252848-ee86ac.jpeg',
		},
		
		
	];
  return (
    <div>
        <Carsoule  data={data}/>
    </div>
  )
}

export default Carsouledata