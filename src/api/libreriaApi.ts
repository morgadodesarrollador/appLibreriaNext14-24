
import { ILogin, IRespLogin } from '@/context/auth/interfaces/ILogin';
import axios from 'axios';

// const libreriaApi = axios.create({
//     baseURL: 'http://localhost:3001/api'
// });

// export default libreriaApi

const apiBD = 'http://localhost:3001/api';

const apiAuthAxios = {

    login: async (login:ILogin): Promise<IRespLogin> => {
        const ruta = `${apiBD}/auth/login`;
        const {data} = await axios.post(`${ruta}`, {...login }) 
        return data
    }
}

export default apiAuthAxios;