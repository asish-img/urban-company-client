import React from 'react';
import { Box } from '@mui/material';
import SearchBar from './SearchBar';
import Navbar from './Navbar';

const Background = () => {
	return (
		<Box
			sx={{
				// backgroundImage:
				// 	'url(https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1615375782838-f890f8.jpeg)',
				// backgroundSize: ' cover',
				// backgroundRepeat: 'no-repeat',
				// backgroundPosition: ' center',
				height: '552px',
				width: '100vw',
				position: 'relative',
				background:
					'linear-gradient(180deg,rgba(0,0,0,.16),rgba(0,0,0,.8)),url(https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1615375782838-f890f8.jpeg) no-repeat center center/cover',
			}}
		>
			{/* <Box sx={{ position:'relative',background: 'linear-gradient(180deg,rgba(0,0,0,.16),rgba(0,0,0,.8))'}}></Box> */}
			<Navbar />
			<Box
				sx={{
					height: '100%',
					width: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					position: 'relative',
					top: '180px',
				}}
			>
				<Box>
					<SearchBar />
				</Box>
			</Box>
		</Box>
	);
};

export default Background;
