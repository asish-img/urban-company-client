import React from 'react';

import {
	Grid,
	TextField,
	Typography,
	Box,
	InputLabel,
	MenuItem,
	Select,
	InputAdornment,
	FormControl,
	Link,
} from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
import Dropdown from './Dropdown';
import Search from './Search';
// import { width } from '@mui/system';

const SearchBar = () => {
	return (
		<Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center' }}>
			<Box sx={{ width: '936px' }}>
				<Box>
					<Box component="ol" className="breadcrumb">
						<Box component="li" className="breadcrumb-item">
							<Link href="#">Home</Link>
						</Box>
						<Box component="li" className="breadcrumb-item">
							<Link href="#">Delhi-Ncr</Link>
						</Box>
					</Box>
				</Box>
				<Typography
					sx={{
						fontSize: '48px',
						lineHeight: '72px',
						fontWeight: 550,
						color: '#ffffff',
					}}
				>
					Home services, on demand.
				</Typography>
				<Grid
					container
					spacing={2}
					sx={{
						display: 'flex',
						alignItems: ' center',
						justifyContent: 'center',
					}}
				>
					<Grid item xs={2.5}>
						<FormControl fullWidth sx={{ position: 'relative' }}>
							<Dropdown />
						</FormControl>
					</Grid>
					<Grid item xs={7.5}>
						<Search />
					</Grid>
				</Grid>
				<Box>
					<Box component="div" display="inline">
						<Link
							sx={{
								color: '#fff',
								textDecoration: 'none',
								borderBottom: '1.5px solid #fff',
								mx: 0.5,
							}}
							href="#"
						>
							Women's Therapies,
						</Link>
					</Box>
					<Box component="div" display="inline">
						<Link
							sx={{
								color: '#fff',
								textDecoration: 'none',
								borderBottom: '1.5px solid #fff',
								mx: 0.5,
							}}
							href="#"
						>
							Salon for Men,
						</Link>
					</Box>
					<Box component="div" display="inline">
						<Link
							sx={{
								color: '#fff',
								textDecoration: 'none',
								borderBottom: '1.5px solid #fff',
								mx: 0.5,
							}}
							href="#"
						>
							Men's Therapies
						</Link>
						<Box component="div" display="inline" sx={{ color: '#fff' }}>
							etc
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default SearchBar;
