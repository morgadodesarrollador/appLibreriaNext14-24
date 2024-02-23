import { IColumn, ILibro } from "@/interfaces/ILibros"
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import Image from "next/image";
import { FC } from "react"


interface Props {
    libros: ILibro[],
    columns: IColumn[]
}
export const DataGrid:FC<Props> = ({ libros, columns }) => {
  return (
    <table className="border-collapse border w-4/5">
        <thead> 
            {
                columns.map( (col) => (
                    <th key={col.label}
                        className="border border-slate-300">{ col.label }</th>
                ))
            }
        </thead>
        <tbody> 
            {
                libros.map( (libro) => (
                    <tr key={libro.isbn }
                        className="font-family:Cambria">
                        <td  className="font-family:Cambria">{ libro.isbn }</td>
                        <td>{ libro.title }</td>
                        <td>{ libro.pageCount }</td>
                        <td>{ libro.precio }</td>
                        {/* <td>{ libro.thumbnailUrl } </td> */}
                        <td>
                            <img className="h-20 w-20" src={ libro.thumbnailUrl } /></td>
                        <td> 
                            {/* <Image 
                                src={ libro.thumbnailUrl } 
                                height={100}
                                width={100}
                                alt="Picture of the author"
                            /> */}
                        </td>

                    </tr>
                ))
            }
        </tbody>
        
        
        
    </table>
  )
}

