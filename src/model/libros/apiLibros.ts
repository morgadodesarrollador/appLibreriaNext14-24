import { ILibro } from '../../interfaces/ILibros';

const apiBD = 'http://localhost:3001/api';
const apiLibros = {

    listar: async (): Promise<ILibro[]> => {
        const ruta = `${apiBD}/libros`;
        const libros = await fetch(`${ruta}`, { cache: 'no-store' }) 
            .then((res) => res.json())
        return libros
    },

    detalle: async (id: ILibro["isbn"]): Promise<ILibro> => {
        const ruta = `${apiBD}/libros/${id}`;
        const libro = await fetch(`${ruta}`, { cache: 'no-store' }) 
            .then((res) => res.json())
        return libro
    }

}


export default apiLibros;

