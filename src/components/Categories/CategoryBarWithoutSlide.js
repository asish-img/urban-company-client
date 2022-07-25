import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const CategoryBarWithoutSlide = (props) => {
	console.log(props);
	// const data = props.data;
	const [propData, setPropData] = React.useState([]);

	// console.log('>>>>', props.data);
	useEffect(() => {
		if (props.data) {
			setPropData(props.data);
		}
	}, [props.data]);
	console.log(propData);

	return (
		<Box
			sx={{
				width: '100vw',
				height: '489px',
				// border: '1px solid red',
				// overflow: 'hidden',
			}}
		>
			<Box
				sx={{
					width: '100vw',
					height: '489px',
					borderTop: '16px solid #f2f4f6 ',
					display: 'flex',
					flexDirection: 'column',
					// overflow: 'hidden',
				}}
			>
				<Box
					sx={{
						height: '140px',
						padding: '60px 60px 0 64px',
					}}
				>
					<Typography
						sx={{
							fontWeight: '700',
							fontSize: '32px',
							lineHeight: ' 48px',
							margin: '0',
							color: '#212121',
						}}
					>
						{props.heading.heading}
					</Typography>
					<Typography
						sx={{
							color: '#757575',
							margin: ' 4px 0 0 0',
							fontSize: '18px',
							lineHeight: '28px',
						}}
					>
						{props.heading.subHeading}
					</Typography>
				</Box>
				<Box
					sx={{
						// width: '100vw',
						width: '1172px',
						// backgroundColor: 'lightcyan',
						height: '229px',
						margin: '44px auto 60px auto',
						// boxSizing: 'border-box',
					}}
				>
					<Box sx={{ height: '100%', margin: '0 auto' }}>
						<Box sx={{ width: '1172px' }}>
							<Box component="ul" sx={{ width: '1465px', display: 'flex' }}>
								{propData.map((obj) => (
									<Box
										component="li"
										sx={{
											width: '293px',
											height: '229px',
											paddingTop: '16px',
											display: 'flex',
											alignItems: 'center',
											justifyContent: ' center',
										}}
									>
										<Box
											sx={{
												width: '266px',
												height: '213px',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'start',
												flexDirection: 'column',
											}}
										>
											<Box
												sx={{
													width: '266px',
													height: '149px',
												}}
											>
												<Box
													component="img"
													sx={{
														height: '100%',
														width: '100%',
														borderRadius: '4px',
														cursor: 'pointer',
													}}
													alt="The house from the offer."
													src={obj.link}
													className="card-img "
												></Box>

												<Typography
													sx={{
														marginTop: '20px',
														fontSize: '14px',
														fontWeight: 500,
														lineHeight: '20px',
														color: '#212121',
														textAlign: ' center',
														height: '20px',
													}}
												>
													{obj.title}
												</Typography>

												<Typography
													sx={{
														lineHeight: '18px',
														fontSize: '12px',
														color: '#757575',
														margin: '2px',
														height: '18px',
													}}
												>
													{obj.subtitle}
												</Typography>
											</Box>
										</Box>
									</Box>
								))}
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default CategoryBarWithoutSlide;
