import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as C from './styled';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
        // Lógica de autenticação aqui
        navigate('/admin/dashboard'); // Navegar para a página de dashboard após o login
    };

    return (
        <C.Form onSubmit={handleSubmit(onSubmit)}>
            <C.Input type="text" placeholder="E-mail" {...register('email', { required: true, maxLength: 40 })} />
            {errors.email && <C.ErrorMessage>E-mail é obrigatório</C.ErrorMessage>}
            <C.Input type="password" placeholder="Senha" {...register('password', { required: true, min: 4, maxLength: 12 })} />
            {errors.password && <C.ErrorMessage>Senha é obrigatória</C.ErrorMessage>}

            <C.SubmitButton type="submit">Entrar</C.SubmitButton>
        </C.Form>
    );
};

export default Login;
