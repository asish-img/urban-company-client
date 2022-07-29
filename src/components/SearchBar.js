import React from 'react';

import {
	Grid,
	TextField,
	Typography,
	Box,
	InputAdornment,
	FormControl,
	Link,
	Divider,
} from '@mui/material';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Search from '@mui/icons-material/Search';
// import Search from './Search';

const SearchBar = () => {
	// const [show, setShow] = React.useState(false);

	// const [latitude, setLatitude] = React.useState('');
	// const [longitude, setLongitude] = React.useState('');
	// const [currentLocation, setCurrentLocation] = React.useState('');
	// const geoUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}longitude=${longitude}&localityLanguage=en`;

	// async function postData(url = '') {
	// 	// Default options are marked with *
	// 	const response = await fetch(url);
	// 	return response.json(); // parses JSON response into native JavaScript objects
	// }

	// const getGeoLocation = (e) => {
	// 	console.log('geo');
	// 	// React.useEffect(() => {
	// 	navigator.geolocation.getCurrentPosition((position) => {
	// 		console.log(position.coords);
	// 		setLatitude(position.coords.latitude);
	// 		setLongitude(position.coords.longitude);

	// 		postData(geoUrl).then((data) => {
	// 			console.log(data); // JSON data parsed by `data.json()` call
	// 			setCurrentLocation(data.principalSubdivision);
	// 		});
	// 	});
	// 	// }, []);
	// };

	// const handleClick = (event) => {
	// 	setShow(!show);
	// 	console.log(show);
	// };

	// const handleBodyClick = (event) => {
	// 	console.log(event.type);
	// 	if (
	// 		event.type === 'keydown' ||
	// 		event.type === 'focus' ||
	// 		event.type === 'change'
	// 	) {
	// 		setShow(false);
	// 	} else {
	// 		return;
	// 	}
	// };

	return (
		<Box
			sx={{ height: '100vh', display: 'flex', justifyContent: 'center' }}
			// onClick={handleBodyClick}
			// onFocus={handleBodyClick}
			// onKeyDown={handleBodyClick}
			// onChange={handleBodyClick}
		>
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
				<Search />
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
