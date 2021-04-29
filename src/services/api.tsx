import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://private-eb4449-podcastr.apiary-mock.com',
});

export default instance;
