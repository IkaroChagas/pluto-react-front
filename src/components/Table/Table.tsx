import { ReactNode } from 'react';
import * as C from './styles'


export interface Column<T> {
    header: string;
    accessor: keyof T;
}

interface TableProps<T> {
    columns: Column<T>[];
    data: T[];
    handleEdit?: (item: T) => void;
    handleDelete?: (item: T) => void;
}

export const Table = <T,>({ columns, data, handleEdit, handleDelete }: TableProps<T>): JSX.Element => {

    return (
        <C.Table>
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <C.th key={index}>{column.header}</C.th>
                    ))}
                    {(handleEdit || handleDelete) &&
                        <C.th>Ações</C.th>
                    }
                </tr>
            </thead>

            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {columns.map((column, columnIndex) => (
                            column.accessor === "image" ?
                                <C.td key={columnIndex}>
                                    <img src={item[column.accessor] as string} alt='Imagem' />
                                </C.td>
                                :
                                <C.td key={columnIndex}>{item[column.accessor] as ReactNode}</C.td>
                        ))}

                        {(handleEdit || handleDelete) && (
                            <C.td>
                                {handleEdit && <button onClick={() => handleEdit(item)}>Editar</button>}
                                {handleDelete && <button onClick={() => handleDelete(item)}>Deletar</button>}
                            </C.td>
                        )}
                    </tr>
                ))}
            </tbody>
        </C.Table>
    );

};

export default Table;