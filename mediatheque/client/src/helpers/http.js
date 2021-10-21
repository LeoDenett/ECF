import axios from 'axios';

const instance = axios.create({
    baseUrl: 'http://localhost:3004/'
});

instance.defaults.headers.post['Content-Type'] = 'aplication/json';

export default instance;