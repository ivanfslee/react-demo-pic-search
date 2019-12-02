import axios from 'axios';
import key from '../config/keys';

//customized instance of axios request with some default values implemented

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${key.unsplashAPIKEY}`
    }
});