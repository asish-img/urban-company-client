import React from 'react';
// import './CategoryCollection.css';
import { Box, Typography } from '@mui/material';
import MultiCarousal from './MultiCarousal';
const SalonSpaAndMassageServices = () => {
	const data = [
		{
			id: '1',
			title: 'Salon Prime',
			subtitle: 'Free Waxing',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg',
		},
		{
			id: '2',
			title: 'Salon for Men',
			subtitle: 'Flat ₹100 off',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1615874646690-66ab68.jpeg',
		},
		{
			id: '3',
			title: 'Spa for Women',
			subtitle: 'Free head massage',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1601893536279-77bf02.png',
		},
		{
			id: '4',
			title: 'Massage for Men',
			subtitle: 'Starts at ₹499',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1606211470897-f4afbc.jpeg',
		},
		{
			id: '5',
			title: 'Party Makeup',
			subtitle: 'Artists trained by Chandni Singh Studio',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_9b68f7b0.jpeg',
		},
	];

	return (
		<Box
			sx={{
				width: '100vw',
				height: '489px',
				// border: '1px solid red',
				// overflow: 'hidden',
			}}
		>
			<Box
				sx={{
					width: '100vw',
					height: '489px',
					borderTop: '16px solid #f2f4f6 ',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Box
					sx={{
						height: '140px',
						padding: '60px 60px 0 64px',
					}}
				>
					<Typography
						sx={{
							fontWeight: '700',
							fontSize: '32px',
							lineHeight: ' 48px',
							margin: '0',
							color: '#212121',
						}}
					>
						Salon, Spa and Massage services
					</Typography>
					<Typography
						sx={{
							color: '#757575',
							margin: ' 4px 0 0 0',
							fontSize: '18px',
							lineHeight: '28px',
						}}
					>
						Hygienic & Single use products | Low-contact services
					</Typography>
				</Box>
				<Box
					sx={{
						// width: '100vw',
						width: '1172px',
						// backgroundColor: 'lightcyan',
						height: '229px',
						margin: '44px auto 60px auto',
						// boxSizing: 'border-box',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Box
						sx={{
							height: '100%',
							margin: '0 auto',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Box sx={{ width: '1172px', position: 'relative' }}>
							<Box sx={{ width: '100%', position: 'relative', left: '-24px' }}>
								<MultiCarousal data={data} />
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default SalonSpaAndMassageServices;
