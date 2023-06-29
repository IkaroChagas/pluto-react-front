import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createOrUpdatePlan, IPlan, getAllPlans } from "../../../services/PlansServices";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

const ManipulatePlans: React.FC = () => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState<IPlan[]>();
  const { handleSubmit, register, reset } = useForm<IPlan>({});


  const initialValues: IPlan = {
    image: "",
    title: "",
    titleColor: "",
    planValue: "",
    buttonValue: "",
    buttonColor: "",
    buttonTextColor: "",
    buttonIconColor: "",
  };

  const fetchPlans = async () => {
    try {
        const plan = await getAllPlans();
        setPlans(plan);
    } catch (error) {
        if (error instanceof AxiosError) {
            if (error.response?.status !== 404) {
                console.error("Erro ao buscar informações", error)
            }
        } else {
            console.error("Ocorreu um erro desconhecido ao buscar informações", error)
        }
    }
};

useEffect(() => {
    fetchPlans();
}, [])



  const onSubmit = async (values: IPlan) => {
    try {
      await createOrUpdatePlan(values);
      reset(initialValues);
      navigate("/admin/listagem-de-planos/editar");
      alert("Formulário enviado com sucesso!");
    } catch (error) {
      console.log(error);
      alert("Ocorreu um erro!");
    }
  }
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="image">Imagem</label>
      <input type="text" id="image" {...register("image")} />

      <label htmlFor="title">Título</label>
      <input type="text" id="title" {...register("title")} />

      <label htmlFor="titleColor">Cor do Título</label>
      <input type="text" id="titleColor" {...register("titleColor")} />

      <label htmlFor="planValue">Valor do Plano</label>
      <input type="text" id="planValue" {...register("planValue")} />

      <label htmlFor="buttonValue">Texto do Botão</label>
      <input type="text" id="buttonValue" {...register("buttonValue")} />

      <label htmlFor="buttonColor">Cor do Botão</label>
      <input type="text" id="buttonColor" {...register("buttonColor")} />

      <label htmlFor="buttonTextColor">Cor do Texto do Botão</label>
      <input type="text" id="buttonTextColor" {...register("buttonTextColor")} />

      <label htmlFor="buttonIconColor">Cor do Ícone do Botão</label>
      <input type="text" id="buttonIconColor" {...register("buttonIconColor")} />

      <button type="submit">Salvar</button>
    </form>
  );
};

export default ManipulatePlans;
