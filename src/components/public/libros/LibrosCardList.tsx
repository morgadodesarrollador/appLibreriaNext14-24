

import { ILibro } from '@/interfaces/ILibros';
import Link from 'next/link';
import React, { FC } from 'react';
import { LibroCard } from './LibroCard';


interface Props {
    libros: ILibro[];
}

export const LibrosCardList:FC<Props> = ({libros}) => {
   return (
    <section className="flex flex-row flex-wrap">
      {
        libros.map( (libro) => (
          <article key={libro.isbn} className="basis-1/4 p-2">
            {/* <Link key={restaurant.id} href={`/${restaurant.id}`}>
                {restaurant.name}
              </Link> */}
             <Link key={libro.isbn } href ={`/public/libros/${libro.isbn}`}>
                <LibroCard  key={libro.isbn} libro = {libro }/>
             </Link>
          </article>
        ))
      }
    </section>
   ) 
}