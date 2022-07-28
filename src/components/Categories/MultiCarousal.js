import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MultiCarousal.css';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

let slidesToShow = 4;
const PreviousBtn = (props) => {
	const { className, onClick, currentSlide } = props;
	return (
		<>
			{currentSlide !== 0 && (
				<div className={className} onClick={onClick}>
					<WestIcon
						style={{
							color: 'black',
							fontSize: '15px',
							height: '20px',
							width: '20px',
						}}
					/>
				</div>
			)}
		</>
	);
};

const NextBtn = (props) => {
	const { className, onClick, currentSlide, slideCount } = props;
	return (
		<>
			{currentSlide !== slideCount - slidesToShow && (
				<div className={className} onClick={onClick}>
					<EastIcon
						style={{
							color: '#666666',
							fontSize: '15px',
							height: '20px',
							width: '20px',
						}}
					/>
				</div>
			)}
		</>
	);
};

const MultiCarousal = (props) => {
	const [propData, setPropData] = React.useState([]);
	// console.log('>>>>', props.data);
	useEffect(() => {
		if (props.data) {
			setPropData(props.data);
		}
	}, [props.data]);
	console.log(propData);
	// const data1 = props.data;
	// console.log(data2);
	// const data = [
	// 	{
	// 		id: '1',
	// 		title: 'Salon Prime',
	// 		subtitle: 'Free Waxing',
	// 		link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg',
	// 	},
	// 	{
	// 		id: '2',
	// 		title: 'Salon for Men',
	// 		subtitle: 'Flat ₹100 off',
	// 		link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1615874646690-66ab68.jpeg',
	// 	},
	// 	{
	// 		id: '3',
	// 		title: 'Spa for Women',
	// 		subtitle: 'Free head massage',
	// 		link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1601893536279-77bf02.png',
	// 	},
	// 	{
	// 		id: '4',
	// 		title: 'Massage for Men',
	// 		subtitle: 'Starts at ₹499',
	// 		link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1606211470897-f4afbc.jpeg',
	// 	},
	// 	{
	// 		id: '5',
	// 		title: 'Party Makeup',
	// 		subtitle: 'Artists trained by Chandni Singh Studio',
	// 		link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_9b68f7b0.jpeg',
	// 	},
	// ];
	// const imgg = data.map((obj) => {
	// 	return obj.link;
	// });
	// console.log(imgg);

	return (
		<div style={{ margin: '30px', width: '1172px' }}>
			<Slider
				prevArrow={<PreviousBtn />}
				nextArrow={<NextBtn />}
				slidesToShow={slidesToShow}
				infinite={false}
			>
				{propData.map((obj) => (
					<div
						style={{ width: '266px', height: '213px', margin: '0px 8px' }}
						key={obj.id}
					>
						<Card itemObj={obj} />
					</div>
				))}
			</Slider>
		</div>
	);
};
const Card = ({ itemObj }) => {
	return (
		<div className="img-box" style={{ margin: '0px 8px', textAlign: 'center' }}>
			<img
				src={itemObj.link}
				alt="i"
				className="card-img"
				style={{
					width: '100%',
					height: '100%',
					borderRadius: '4px',
					objectFit: 'cover',
					cursor: 'pointer',
				}}
			/>
			<p className="imgTitle">{itemObj.title}</p>
			<p className="imgSubTitle">{itemObj.subtitle}</p>
		</div>
	);
};

export default MultiCarousal;
