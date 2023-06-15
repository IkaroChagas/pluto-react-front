import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../../components/Table/Table";


const ListOfPlans: React.FC = () => {
    const navigate = useNavigate();
    const [plans, setPlans] = useState<Plans[]>([]);

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

    const handleEdit = (plans: Plans) => {
        navigate("/admin/listagem-de-planos/editar", { state: plans })
    };

    const handleDelete = async (plans: Plans) => {
        try {
            await deletePlans(plans.id);
            fetchExperiencia()
            alert("Plano deletado com sucesso")
        } catch (error) {
            alert("Ocorreu um erro ao tentar excluir")
        }
    };

    const columns: Column<Plans>[] = [
        { header: "Imagem", accessor: "imagem" },
        { header: "Titulo", accessor: "titulo" },
        { header: "Cor do titulo", accessor: "corDoTitulo" },
        { header: "Valor do plano", accessor: "valorDoPlano" },
        { header: "Cor do botão", accessor: "corDoBotao" },
        { header: "Cor do texto do botão", accessor: "corDoTextoDoBotao" },
        { header: "Cor do ícone botão", accessor: "corDoIconeBotao" },
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

