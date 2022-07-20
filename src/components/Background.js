import React from 'react';
import { Box } from '@mui/material';
import SearchBar from './SearchBar';
const Background = () => {
	return (
		<Box
			sx={{
				backgroundImage:
					'url(https://images.unsplash.com/photo-1657555456661-e2855cc4a2f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80)',
			}}
		>
			<SearchBar />
		</Box>
	);
};

export default Background;
