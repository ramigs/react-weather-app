import Axios from 'axios';
const axios = Axios.create({
	baseURL : `https://api.openweathermap.org/data/2.5/weather?appid=${process.env
		.REACT_APP_WEATHER_API_KEY}&units=metric`
});

export { axios };
