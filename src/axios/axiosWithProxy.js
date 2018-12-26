import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://flowrspot-api.herokuapp.com/api/v1/'
});

export default instance;