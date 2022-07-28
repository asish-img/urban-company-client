import React from 'react';

const CurrentLocation = () => {
	const [latitude, setLatitude] = React.useState('');
	const [longitude, setLongitude] = React.useState('');
	const [currentLocation, setCurrentLocation] = React.useState('');
	const geoUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}longitude=${longitude}&localityLanguage=en`;

	async function postData(url = '') {
		// Default options are marked with *
		const response = await fetch(url);
		return response.json(); // parses JSON response into native JavaScript objects
	}
	React.useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			console.log(position.coords);
			setLatitude(position.coords.latitude);
			setLongitude(position.coords.longitude);

			postData(geoUrl).then((data) => {
				console.log(data); // JSON data parsed by `data.json()` call
				setCurrentLocation(data.principalSubdivision);
			});
		});
	}, []);

	console.log(latitude);
	console.log(longitude);
	return <div>{currentLocation}</div>;
};

export default CurrentLocation;
