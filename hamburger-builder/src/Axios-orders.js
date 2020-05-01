import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://hamburger-builder-22d16.firebaseio.com/'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;