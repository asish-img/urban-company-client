import React from 'react';
import { Box, TextField, InputAdornment, Divider } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Search from './Search';
const Dropdown = () => {
	const [show, setShow] = React.useState(false);

	const handleClick = (event) => {
		setShow(!show);
	};
	return (
		// sx={{ maxWidth: 150, m: 8 }}
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
						<ArrowDropDownIcon sx={{ color: '#646464', fontSize: '30px' }} />
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
								<span className="current-location">Current Location</span>
							</div>
							<div className="gps-con">
								<span className="gps">Detect Using GPS</span>
								<span>
									<ArrowForwardIosOutlinedIcon
										sx={{ color: '#646464', width: '10px', height: '10px' }}
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
									sx={{ backgroundColor: '#ffffff', borderRadius: '4px' }}
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
	);
};

export default Dropdown;
