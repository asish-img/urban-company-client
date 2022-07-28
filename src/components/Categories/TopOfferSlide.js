import React from 'react';
import { Box, Typography } from '@mui/material';
import MultiCarousal from './MultiCarousal';
const TopOfferSlide = () => {
	const data = [
		{
			id: '1',
			title: '',
			subtitle: ' ',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657022000977-36a913.jpeg',
		},
		{
			id: '2',
			title: '',
			subtitle: '',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657718619527-26bf3d.jpeg ',
		},
		{
			id: '3',
			title: '',
			subtitle: '',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657718623036-5a0936.jpeg',
		},
		{
			id: '4',
			title: '',
			subtitle: '',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657718622423-e36bd5.jpeg',
		},
		{
			id: '5',
			title: '',
			subtitle: '',
			link: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657718620618-7f6f6f.jpeg',
		},
	];

	return (
		<Box
			sx={{
				width: '100vw',
				height: '295px',
				// border: '1px solid red',
				// overflow: 'hidden',
			}}
		>
			<Box
				sx={{
					width: '100vw',
					height: '100%',
					borderTop: '16px solid #f2f4f6 ',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
				}}
			>
				<Box
					sx={{
						height: '140px',
						padding: '60px 60px 0 64px',
					}}
				></Box>
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
						<Box sx={{ width: '1172px', position: 'relative', top: '-22px' }}>
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

export default TopOfferSlide;
