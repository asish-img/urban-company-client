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
	Divider,
} from '@mui/material';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import SearchIcon from '@mui/icons-material/Search';

// import SearchIcon from '@mui/icons-material/Search';
import Dropdown from './Dropdown';
import Search from './Search';
// import { width } from '@mui/system';

const SearchBar = () => {
	const [show, setShow] = React.useState(false);

	const handleClick = (event) => {
		setShow(!show);
	};

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
							{/* <Dropdown /> */}
							<Box sx={{ position: 'absolute', top: '-25px' }}>
								<div className="select" onClick={handleClick}>
									<img
										src="https://images.urbanclap.com/image/upload//q_auto,f_auto,fl_progressive:steep/t_medium_res_template/v1514444369/Flag_of_India_28Dec2017-1.png"
										alt="flag"
										className="flag"
									/>
									<span className="city">Delhi-Ncr</span>
									<span>
										<span clssName="arrowIcon">
											<ArrowDropDownIcon
												sx={{ color: '#646464', fontSize: '30px' }}
											/>
										</span>
									</span>
								</div>
								{show ? (
									<div class="wrapper">
										<div class="wrapper">
											<span class="tri"> </span>
											<div className="pop-container">
												<div className="location-con">
													<span>
														<FmdGoodOutlinedIcon
															sx={{
																color: '#646464',
																width: '18px',
																height: '18px',
																padding: '0 5px',
															}}
														/>
													</span>
													<span className="current-location">
														Current Location
													</span>
												</div>
												<div className="gps-con">
													<span className="gps">Detect Using GPS</span>
													<span>
														<ArrowForwardIosOutlinedIcon
															sx={{
																color: '#646464',
																width: '10px',
																height: '10px',
															}}
														/>
													</span>
												</div>
											</div>
											<Divider />
											<div>
												<div className="pop-searchbox">
													<TextField
														id="outlined-textarea"
														placeholder="search for services"
														fullWidth
														sx={{
															backgroundColor: '#ffffff',
															borderRadius: '4px',
														}}
														InputProps={{
															startAdornment: (
																<InputAdornment position="start">
																	<SearchIcon />
																</InputAdornment>
															),
														}}
													/>
												</div>
											</div>
										</div>
									</div>
								) : null}
							</Box>
						</FormControl>
					</Grid>
					<Grid item xs={7.5}>
						{/* <Search /> */}
						<Box
							sx={{
								width: '588px',
								height: '54px',
								// border: '1px solid white',
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
							<input
								class="topSearchBox"
								placeholder="Home services, on demand."
							/>
						</Box>
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
