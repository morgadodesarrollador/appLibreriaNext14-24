// 'use client'

import { Tabla } from "@/components/commons/Tabla/Tabla";
import ColumCategoria, { ICategoria } from '@/interfaces/ICategoria';
import { getCategorias } from "@/model/generos/datageneros";

const GenerosPage = async () => {
  const categorias: ICategoria[] = await getCategorias()

  return (
    <>
        <h2>Sección de Generos</h2>
        <Tabla 
              rows={categorias} 
              columns={ColumCategoria}
              key='id' />
    </>
  )
}

export default GenerosPage
