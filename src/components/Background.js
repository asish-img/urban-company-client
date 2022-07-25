import React from 'react';
import { Box } from '@mui/material';
import SearchBar from './SearchBar';
const Background = () => {
	return (
		<Box
			sx={{
				backgroundImage:
					'url(https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1615375782838-f890f8.jpeg)',
				backgroundSize: ' cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: ' center',
			}}
		>
			<SearchBar />
		</Box>
	);
};

export default Background;
