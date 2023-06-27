import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table, { Column } from "../../../components/Table/Table";
import { getAllPlans, deletePlan, IPlan } from "../../../services/PlansServices";


const ListOfPlans: React.FC = () => {
    const navigate = useNavigate();
    const [plans, setPlans] = useState<IPlan[]>([]);

    const fetchPlans = async () => {
        try {
            const plans = await getAllPlans();
         setPlans(plans)
        } catch (error) {
            alert("Erro ao buscar os planos");
        }
    };

    useEffect(() => {
        fetchPlans()
    }, []);

    const handleEdit = (plans: IPlan) => {
        navigate("/admin/listagem-de-planos/editar", { state: plans })
    };

    const handleDelete = async (plans: IPlan) => {
        try {
            await deletePlan(plans.id);
            fetchPlans()
            alert("Plano deletado com sucesso")
        } catch (error) {
            alert("Ocorreu um erro ao tentar excluir")
        }
    };

    const columns: Column<IPlan>[] = [
        { header: "Imagem", accessor: "image" },
        { header: "Titulo", accessor: "title" },
        { header: "Cor do titulo", accessor: "titleColor" },
        { header: "Valor do plano", accessor: "planValue" },
        { header: "Cor do botão", accessor: "buttonColor" },
        { header: "Cor do texto do botão", accessor: "buttonTextColor" },
        { header: "Cor do ícone botão", accessor: "buttonIconColor" },
    ];

    return (
        <Table
            columns={columns}
            data={plans}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )

}

export default ListOfPlans;

