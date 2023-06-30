import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table, { Column } from "../../../components/Table/Table";
import { getAllUnits, deleteUnit, Units } from "../../../services/UnitsServices";



const ListOfUnits: React.FC = () => {
    const navigate = useNavigate();
    const [unit, setUnits] = useState<Units[]>([]);

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

    const handleEdit = (unit: Units) => {
        navigate("/admin/listagem-de-unidades/editar", { state: unit })
    };

    const handleDelete = async (unit: Units) => {
        try {
            await deleteUnit(unit.id);
            fetchUnits()
            alert("Plano deletado com sucesso")
        } catch (error) {
            alert("Ocorreu um erro ao tentar excluir")
        }
    };

    const columns: Column<Units>[] = [
        { header: "Unidade", accessor: "unit" },
        { header: "Endereço", accessor: "address" },
        { header: "Cidade e Estado", accessor: "cityState" },
        { header: "Resposável", accessor: "responsible" },
        { header: "E-mail", accessor: "email" },
        { header: "Cor do título", accessor: "titleColor" },
        { header: "Cor do corpo", accessor: "bodyColor" },
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

