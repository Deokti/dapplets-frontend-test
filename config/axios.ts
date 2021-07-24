import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://dapplets-hiring-api.herokuapp.com/api/v1/',
});

export { instance as axios };