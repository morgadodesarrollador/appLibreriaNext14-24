import React, { FC } from "react";
import {Card, CardHeader, CardBody, CardFooter, Image} from "@nextui-org/react";
import { ILibro } from "@/interfaces/ILibros";
// import Image from 'next/image'


interface Props {
    libro: ILibro;
}
export const LibroCard:FC<Props> = ({libro}) => {
  return (
    <Card className="py-4 min-h-72 max-h-72">
       <CardHeader className="pb-0 pt-2 px-4 h-10 flex-col items-start">
          <h5 className="font-bold text-sm">{libro.title}</h5>
       </CardHeader>
       <CardBody className="overflow-visible h-48 py-2 flex flex-row flex-wrap justify-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl max-h-44"
          src={libro.thumbnailUrl}
        />
      </CardBody>
      <CardFooter className="pb-0 pt-2 px-4 h-10 flex-col items-start">
        <p className="text-tiny uppercase font-bold">
          {libro.categoria.name}
        </p>
       
      </CardFooter>
     
    </Card>
  );
}
