import React from "react";
import { useForm } from "react-hook-form";
import * as C from './styled';
import { createPlan } from "../../services/PlansServices";



const AddPlans: React.FC = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data: any) => {
        try {
            await createPlan(data);
            reset();
            alert('Formulário enviado com sucesso!');
          } catch (error) {
            console.log(error);
            alert('Ocorreu um erro!');
          }
    };

    const handleDelete = () => {
        reset();
    };

    return (
        <>
        <C.AddPlansContainer>
            <C.Frame>
                <C.Title>Adicionar Plano</C.Title>

                <C.FormPlan onSubmit={handleSubmit(onSubmit)}>

                    <C.InputImage {...register("image", { required: true })} placeholder="Link da imagem" />


                    <C.InputTitle {...register("title", { required: true })} placeholder="Título" />


                    <C.InputTitleColor {...register("titleColor", { required: true })} placeholder="Cor do título" />


                    <C.InputPlanValue {...register("planValue", { required: true })} placeholder="Valor do plano" />


                    <C.InputButtonColor {...register("buttonColor", { required: true })} placeholder="Cor do botão" />

                    <C.InputTextColor {...register("buttonTextColor", { required: true })} placeholder="Cor do texto" />

                    <C.InputButtonIconColor {...register("buttonIconColor", { required: true })} placeholder="Cor do ícone do botão" />

                    <div>
                        <C.ButtonDelete type="button" onClick={handleDelete}>Limpar</C.ButtonDelete>
                        <C.ButtonSend type="submit">Salvar</C.ButtonSend>
                    </div>
                </C.FormPlan>
            </C.Frame>
        </C.AddPlansContainer>
        </>
    );
};

export default AddPlans;
