import { Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import { FC } from 'react';
import { ILibro } from '@/interfaces/ILibros';
// import Image from 'next/image'


interface Props {
    libro: ILibro
}

export const LibroDetail:FC<Props> = ({ libro }) => {
    
    return(
        <Card className="py-4 flex flex-row flex-nowrap">
            <CardHeader className="pb-0 pt-2 px-4 basis-1/3">
                <Image 
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={libro.thumbnailUrl}
                    width={270} 
                    />
            </CardHeader>
            <CardBody className="overflow-visible py-2 basis-1/3">
                <h2>{ libro.title }</h2>
                <h3> {libro.categoria.name}</h3>
            </CardBody>
            <CardFooter>
                <h3>{libro.precio}</h3>
            </CardFooter>
        </Card>
    )
}