import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as C from './styled';

interface FormValues {
    imageLink: string;
    title: string;
    titleColor: string;
    planValue: string;
    buttonColor: string;
    textColor: string;
    buttonIconColor: string;
}

const AddPlans: React.FC = () => {
    const { register, handleSubmit, reset } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
        reset();
    };

    const handleDelete = () => {
        reset();
    };

    return (
        <C.AddPlansContainer>
            <C.Frame>
                <C.Title>Adicionar Plano</C.Title>

                <C.FormPlan onSubmit={handleSubmit(onSubmit)}>

                    <C.InputImage {...register("imageLink", { required: true })} placeholder="Link da imagem" />


                    <C.InputTitle {...register("title", { required: true })} placeholder="Título" />


                    <C.InputTitleColor {...register("titleColor", { required: true })} placeholder="Cor do título" />


                    <C.InputPlanValue {...register("planValue", { required: true })} placeholder="Valor do plano" />


                    <C.InputButtonColor {...register("buttonColor", { required: true })} placeholder="Cor do botão" />

                    <C.InputTextColor {...register("textColor", { required: true })} placeholder="Cor do texto" />


                    <C.InputButtonIconColor {...register("buttonIconColor", { required: true })} placeholder="Cor do ícone do botão" />

                    <div>
                        <C.ButtonDelete type="button" onClick={handleDelete}>Limpar</C.ButtonDelete>
                        <C.ButtonSend type="submit">Salvar</C.ButtonSend>
                    </div>
                </C.FormPlan>
            </C.Frame>
        </C.AddPlansContainer>
    );
};

export default AddPlans;
