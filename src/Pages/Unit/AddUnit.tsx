import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as C from './styled'

interface FormValues {
    unit: string;
    address: string;
    cityState: string;
    responsible: string;
    email: string;
    titleColor: string;
    bodyColor: string;
}

const AddUnit: React.FC = () => {
    const { register, handleSubmit, reset } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
        reset();
    };

    const handleDelete = () => {
        reset();
    };

    return (
        <C.AddUnitContainer>
            <C.Frame>
                <C.Title>Adicionar Unidade</C.Title>

                <C.FormUnit onSubmit={handleSubmit(onSubmit)}>
                    <C.InputUnit
                        {...register("unit", { required: true })}
                        placeholder="Nome da unidade"
                    />


                    <C.InputAddress
                        {...register("address", { required: true })}
                        placeholder="Endereço"
                    />


                    <C.InputCityState
                        {...register("cityState", { required: true })}
                        placeholder="Cidade - Estado"
                    />


                    <C.InputResponsible
                        {...register("responsible", { required: true })}
                        placeholder="Responsável"
                    />


                    <C.InputEmail
                        {...register("email", { required: true })}
                        placeholder="E-mail do responsável"
                    />

                    <C.InputTitleColor
                        {...register("titleColor", { required: true })}
                        placeholder="Cor dos títulos"
                    />


                    <C.InputBodyColor
                        {...register("bodyColor", { required: true })}
                        placeholder="Cor do corpo do texto"
                    />

                    <div>
                        <C.ButtonDelete type="button" onClick={handleDelete}>Limpar</C.ButtonDelete>
                        <C.ButtonSend type="submit">Salvar</C.ButtonSend>
                    </div>
                </C.FormUnit>
            </C.Frame>
        </C.AddUnitContainer>
    );
};

export default AddUnit;
