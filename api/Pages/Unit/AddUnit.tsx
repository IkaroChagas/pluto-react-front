import React from "react";
import { useForm } from "react-hook-form";
import * as C from './styled'
import { createUnit } from "../../services/UnitsServices";


const AddUnit: React.FC = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data: any) => {
        try {
            await createUnit(data);
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
        <C.AddUnitContainer>
            <C.Frame>
                <C.Title>Adicionar Unidade</C.Title>

                <C.FormUnit onSubmit={handleSubmit(onSubmit)}>

                    <C.InputUnit
                        {...register("name", { required: true })}
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
                        {...register("responsibleName", { required: true })}
                        placeholder="Responsável"
                    />


                    <C.InputEmail
                        {...register("responsibleEmail", { required: true })}
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
