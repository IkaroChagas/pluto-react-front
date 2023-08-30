import React from "react";
import { useForm } from "react-hook-form";
import { createOrUpdatePlan, IPlan } from "../../../services/PlansServices";
import { useNavigate } from "react-router-dom";
import * as C from './styled'

const ManipulatePlans: React.FC = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, reset } = useForm<IPlan>({});


  const onSubmit = async (values: IPlan) => {
    try {
      await createOrUpdatePlan(values);
      navigate("/admin/listagem-de-planos/editar");
      alert("Formulário enviado com sucesso!");
    } catch (error) {
      console.log(error);
      alert("Ocorreu um erro!");
    }
  }

  const handleDelete = () => {
      reset();
  };


  return (
    <C.AddPlansContainer>
    <C.Frame>
        <C.Title>Editar Plano</C.Title>

        <C.FormPlan onSubmit={handleSubmit(onSubmit)}>

            <C.InputImage {...register("image", { required: true })} placeholder="Link da imagem" />


            <C.InputTitle {...register("title", { required: true })} placeholder="Título" />


            <C.InputTitleColor {...register("titlecolor", { required: true })} placeholder="Cor do título" />


            <C.InputPlanValue {...register("planvalue", { required: true })} placeholder="Valor do plano" />


            <C.InputButtonColor {...register("buttoncolor", { required: true })} placeholder="Cor do botão" />

            <C.InputTextColor {...register("buttontextcolor", { required: true })} placeholder="Cor do texto" />

            <C.InputButtonIconColor {...register("buttoniconcolor", { required: true })} placeholder="Cor do ícone do botão" />

            <div>
                <C.ButtonDelete type="button" onClick={handleDelete}>Limpar</C.ButtonDelete>
                <C.ButtonSend type="submit">Salvar</C.ButtonSend>
            </div>
        </C.FormPlan>
    </C.Frame>
</C.AddPlansContainer>
  );
};

export default ManipulatePlans;
