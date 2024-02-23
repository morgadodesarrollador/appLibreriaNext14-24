
import axios from 'axios';

const libreriaApi = axios.create({
    baseURL: 'http://localhost:3001/api'
});

export default libreriaApi