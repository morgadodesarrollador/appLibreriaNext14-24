
import { ILibro } from '@/interfaces/ILibros';
import ColumLibro from '@/interfaces/ILibros';

import { getLibros } from "@/model/libros/datalibro";
import { Tabla } from "@/components/commons/Tabla/Tabla";
import { LibrosCardList } from '@/components/public/libros/LibrosCardList';
import { DataGrid } from '@/components/public/libros/DataGrid/DataGrid';
import Link from 'next/link';
import apiLibros from '@/model/libros/apiLibros';

const LibrosPage = async () => {

  // const libros: ILibro[] = await getLibros()
  const libros = await apiLibros.listar();
  
  console.log (libros);

  return (
    <section className='flex flex-col items-center'>
        <h2 className='text-4xl m-8'>Sección de Libros</h2>
        {/* <Tabla  
            rows={libros} 
            columns={ColumLibro}
            key='isbn' /> */}

        <LibrosCardList libros={libros} />
        {/* <DataGrid libros={libros} columns={ColumLibro} /> */}
    </section>
  )
}

export default  LibrosPage
