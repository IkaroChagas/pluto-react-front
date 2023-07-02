import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as C from './styled';
import Hands from '../../assets/hands2.png';
import { User, login as loginService } from '../../services/AuthServices';
import { useAuth } from '../../contexts/AuthContext';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<User>();

  useAuth();

  const onSubmit: SubmitHandler<User> = async (values) => {
    try {
      const data = await loginService({ email: values.email, password: values.password });
      navigate('/admin/dashboard');
    } catch (error) {
      alert("Erro ao realizar o login");
    }
  };
  

  return (
    <C.FormContainer>
      <C.FormBackground></C.FormBackground>
      <C.FrameForm></C.FrameForm>

      <C.FormContainer2>
        <C.FormLogo>pluto</C.FormLogo>
        <C.Welcome>Seja bem vindo!</C.Welcome>
        <C.Message>Realize o login para prosseguir</C.Message>

        <C.Form onSubmit={handleSubmit(onSubmit)}>
          <C.Input type="text" placeholder="E-mail" {...register('email', { required: true, maxLength: 60 })} />
          {errors.email && <C.ErrorMessage>E-mail é obrigatório</C.ErrorMessage>}

          <C.Input type="password" placeholder="Senha" {...register('password', { required: true, min: 4, maxLength: 12 })} />
          {errors.password && <C.ErrorMessage>Senha é obrigatória</C.ErrorMessage>}

          <C.SubmitButton type="submit">Entrar</C.SubmitButton>
        </C.Form>
        <C.ForgotPassword>Esqueci minha senha</C.ForgotPassword>
        <C.CreateAccount>Não possui uma conta ainda? <span>Registrar-se</span></C.CreateAccount>
      </C.FormContainer2>
      <C.FrameText> A partir da doação podemos fazer com que <span>não</span> haja mais <span>fome</span> amanhã</C.FrameText>
      <C.Hands src={Hands} />
    </C.FormContainer>
  );
};

export default Login;
