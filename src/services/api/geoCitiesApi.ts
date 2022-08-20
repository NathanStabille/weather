export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd127631cbbmsh41bbf362729230dp1c27d0jsnc8e071459717',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));