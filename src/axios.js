import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://flowrspot-api.herokuapp.com/api/v1/'
});

export default instance;