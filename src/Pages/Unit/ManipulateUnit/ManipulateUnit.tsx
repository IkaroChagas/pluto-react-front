import React from 'react';
import { useForm } from 'react-hook-form';
import { createOrUpdateUnit, IUnits } from '../../../services/UnitServices';
import { useNavigate } from 'react-router-dom';

const ManipulateUnit: React.FC = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, reset } = useForm<IUnits>();

  const initialValues: IUnits = {
    unit: '',
    address: '',
    cityState: '',
    responsible: '',
    email: '',
    titleColor: '',
    bodyColor: '',
  };

  const onSubmit = async (values: IUnits) => {
    try {
      await createOrUpdateUnit(values);
      reset(initialValues);
      navigate('/admin/listagem-das-unidades');
      alert('Formulário enviado com sucesso!');
    } catch (error) {
      console.log(error);
      alert('Ocorreu um erro!');
    }
  };

  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="unit">Unidade:</label>
      <input type="text" id="unit" {...register('unit')} />

      <label htmlFor="address">Endereço:</label>
      <input type="text" id="address" {...register('address')} />

      <label htmlFor="cityState">Cidade e Estado:</label>
      <input type="text" id="cityState" {...register('cityState')} />

      <label htmlFor="responsible">Responsável:</label>
      <input type="text" id="responsible" {...register('responsible')} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" {...register('email')} />

      <label htmlFor="titleColor">Cor do Título:</label>
      <input type="text" id="titleColor" {...register('titleColor')} />

      <label htmlFor="bodyColor">Cor do Corpo:</label>
      <input type="text" id="bodyColor" {...register('bodyColor')} />

      <button type="submit">Salvar</button>
    </form>
  );
};

export default ManipulateUnit;
