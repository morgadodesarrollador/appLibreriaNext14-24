'use client';
import React, { FC } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import { ILibro,  IColumn } from '@/interfaces/ILibros';
import { ICategoria } from "@/interfaces/ICategoria";
import { Libro } from '../../../../../api-libreria/src/modulos/libros/entities/libro.entity';

type filas = ICategoria | ILibro;
interface Props {
    rows    :filas[] ,
    columns :IColumn[],
    key     :string;
}

export const Tabla:FC<Props> = ({rows, columns, key}) => {
  console.log(rows)
  const renderCell = React.useCallback((libro: Libro, columnKey: React.Key) => {
  //  const cellValue = libro[columnKey];
    switch (columnKey) {

      case "thumbnailUrl":
        return (
          <h2>imagen</h2>
        );
      
        }
      
  },[]);

  return (

    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={`item.${key}`}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
