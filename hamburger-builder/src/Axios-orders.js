import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://hamburger-builder-22d16.firebaseio.com/'
});

export default instance;