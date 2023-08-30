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
        { header: "Cor do titulo", accessor: "titlecolor" },
        { header: "Valor do plano", accessor: "planvalue" },
        { header: "Cor do botão", accessor: "buttoncolor" },
        { header: "Cor do texto do botão", accessor: "buttontextcolor" },
        { header: "Cor do ícone botão", accessor: "buttoniconcolor" },
    ];

    return (
      <>
      <Table
        columns={columns}
        data={plans}
        handleEdit={handleEdit}
        handleDelete={handleDelete} />
      </>
    )

}

export default ListOfPlans;

