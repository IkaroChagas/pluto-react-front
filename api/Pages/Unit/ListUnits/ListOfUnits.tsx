import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table, { Column } from "../../../components/Table/Table";
import { getAllUnits, deleteUnit, IUnits } from "../../../services/UnitsServices";



const ListOfUnits: React.FC = () => {
    const navigate = useNavigate();
    const [unit, setUnits] = useState<IUnits[]>([]);

    const fetchUnits = async () => {
        try {
            const units = await getAllUnits();
         setUnits(units)
        } catch (error) {
            alert("Erro ao buscar os unidades");
        }
    };

    useEffect(() => {
        fetchUnits()
    }, []);

    const handleEdit = (unit: IUnits) => {
        navigate("/admin/listagem-de-unidades/editar", { state: unit })
    };

    const handleDelete = async (unit: IUnits) => {
        try {
            await deleteUnit(unit.id);
            fetchUnits()
            alert("Plano deletado com sucesso")
        } catch (error) {
            alert("Ocorreu um erro ao tentar excluir")
        }
    };

    const columns: Column<any>[] = [
        { header: "Unidade", accessor: "name" },
        { header: "Endereço", accessor: "address" },
        { header: "Cidade e Estado", accessor: "citystate" },
        { header: "Resposável", accessor: "responsiblename" },
        { header: "E-mail", accessor: "responsibleemail" },
        { header: "Cor do título", accessor: "titlecolor" },
        { header: "Cor do corpo", accessor: "bodycolor" },
    ];

    return (
        <Table
            columns={columns}
            data={unit}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )

}

export default ListOfUnits;

