import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        // Lógica de autenticação aqui ainda vai ser implementada
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Email</label>
                <input type="email" {...register('email', { required: true })} />
                {errors.email && <span>Email é obrigatório</span>}
            </div>
            <div>
                <label>Senha</label>
                <input type="password" {...register('password', { required: true })} />
                {errors.password && <span>Senha é obrigatória</span>}
            </div>
            <button type="submit">Entrar</button>
        </form>
    );
};

export default Login;
