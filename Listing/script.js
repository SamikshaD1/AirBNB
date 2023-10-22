async function apiCall() {
    const url = 'https://airbnb13.p.rapidapi.com/search-location?location=Nagpur&checkin=2023-10-25&checkout=2023-10-27&adults=1&children=0&infants=0&pets=0&page=1&currency=USD';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0f42447eabmshcc0e9b18ff75f1ep1cca6djsnfe69c62bad3c',
            'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
        }
    };

try {
	const response = await fetch(url, options);
	const result = await response.text();
    console.log(JSON.parse(result));
    
} catch (error) {
	console.error(error);
}
}

apiCall();