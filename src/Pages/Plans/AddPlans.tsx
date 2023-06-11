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
                    <C.SubTitle>Link da Imagem</C.SubTitle>
                    <C.InputImage {...register("imageLink")} placeholder="Link da imagem" />

                    <C.SubTitle>Título do Card</C.SubTitle>
                    <C.InputTitle {...register("title")} placeholder="Título" />

                    <C.SubTitle>Cor do Título</C.SubTitle>
                    <C.InputTitleColor {...register("titleColor")} placeholder="Cor do título" />

                    <C.SubTitle>Valor do Plano</C.SubTitle>
                    <C.InputPlanValue {...register("planValue")} placeholder="Valor do plano" />

                    <C.SubTitle>Cor do Botão</C.SubTitle>
                    <C.InputButtonColor {...register("buttonColor")} placeholder="Cor do botão" />

                    <C.SubTitle>Cor do Texto</C.SubTitle>
                    <C.InputTextColor {...register("textColor")} placeholder="Cor do texto" />

                    <C.SubTitle>Cor do Ícone do Botão</C.SubTitle>
                    <C.InputButtonIconColor {...register("buttonIconColor")} placeholder="Cor do ícone do botão" />

                    <div>
                        <C.ButtonDelete type="button" onClick={handleDelete}>Limpar</C.ButtonDelete>
                        <C.ButtonSend type="submit">Enviar</C.ButtonSend>
                    </div>
                </C.FormPlan>
            </C.Frame>
        </C.AddPlansContainer>
    );
};

export default AddPlans;
