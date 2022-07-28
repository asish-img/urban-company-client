import React from 'react';
import { Box, Link } from '@mui/material';
const Navbar = () => {
	return (
		<Box
			sx={{
				height: '60px',
				width: '100vw',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Box sx={{ height: '39px', width: '1200px', display: 'flex' }}>
				<Box sx={{ height: '39px', width: '300px', textAlign: 'start' }}>
					<Link href="#">
						<Box
							component="img"
							sx={{
								height: '39px',
								width: '131.887px',
							}}
							alt="Logo"
							src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"
						/>
					</Link>
				</Box>
				<Box>
					<Box
						sx={{
							height: '39px',
							width: '868px',
							display: 'flex',
							justifyContent: 'end',
							alignItems: 'center',
						}}
					>
						<Box
							sx={{
								marginRight: '32px',
								cursor: 'pointer',
								fontSize: '14px',
								lineHeight: '20px',
								height: '100%',
								fontWeight: 700,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Link sx={{ color: '#ffffff', textDecoration: 'none' }}>
								Blog
							</Link>
						</Box>
						<Box
							sx={{
								marginRight: '32px',
								cursor: 'pointer',
								fontSize: '14px',
								lineHeight: '20px',
								height: '100%',
								fontWeight: 700,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Link
								sx={{
									color: '#ffffff',
									textDecoration: 'none',
									borderBottom: ' 2px solid rgb(255, 255, 255)',
									height: '20px ',
								}}
							>
								Register As A Professional
							</Link>
						</Box>
						<Box
							sx={{
								marginRight: '32px',
								cursor: 'pointer',
								fontSize: '14px',
								lineHeight: '20px',
								height: '100%',
								fontWeight: 700,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								color: '#ffffff',
							}}
						>
							<Link sx={{ color: '#ffffff', textDecoration: 'none' }}>
								Login / Sign Up
							</Link>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Navbar;
