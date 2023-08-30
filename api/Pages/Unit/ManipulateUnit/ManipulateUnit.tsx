import React from 'react';
import { useForm } from 'react-hook-form';
import { createOrUpdateUnit, IUnits } from '../../../services/UnitsServices';
import { useNavigate } from 'react-router-dom';
import * as C from './styled'

const ManipulateUnit: React.FC = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, reset } = useForm<IUnits>();


  const onSubmit = async (values: IUnits) => {
    try {
      await createOrUpdateUnit(values);
      reset()
      navigate('/admin/listagem-das-unidades');
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
                <C.Title>Editar Unidade</C.Title>

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
                        {...register("citystate", { required: true })}
                        placeholder="Cidade - Estado"
                    />


                    <C.InputResponsible
                        {...register("responsiblename", { required: true })}
                        placeholder="Responsável"
                    />


                    <C.InputEmail
                        {...register("responsibleemail", { required: true })}
                        placeholder="E-mail do responsável"
                    />

                    <C.InputTitleColor
                        {...register("titlecolor", { required: true })}
                        placeholder="Cor dos títulos"
                    />


                    <C.InputBodyColor
                        {...register("bodycolor", { required: true })}
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

export default ManipulateUnit;
