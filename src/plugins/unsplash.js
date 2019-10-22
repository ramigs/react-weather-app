import Axios from 'axios';
const unsplash = Axios.create({
	baseURL : `https://api.unsplash.com/search/photos?count=1&client_id=${process.env
		.REACT_APP_UNSPLASH_API_ACCESS_KEY}`
});

export { unsplash };
