import React from 'react';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const Search = () => {
	return (
		<Box
			sx={{
				width: '588px',
				height: '54px',
				border: '1px solid white',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: '4px',
				backgroundColor: 'white',
				marginBottom: '18px',
			}}
		>
			<span>
				<SearchIcon sx={{ color: '#757575', padding: '20px' }} />
			</span>
			<input class="topSearchBox" placeholder="Home services, on demand." />
		</Box>
	);
};

export default Search;
