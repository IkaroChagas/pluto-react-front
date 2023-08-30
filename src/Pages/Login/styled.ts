import styled from 'styled-components';
import FormBackgroundImg from '../../assets/loginbackground.png';
import Frame from '../../assets/framebackground.png'


export const FormContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
`;


export const FormContainer2 = styled.div`
  display: flex;
  width: 809px;
  height: 100%;
  background: #F5F5F5;
  border-radius: 4px;
`;

export const FormBackground = styled.div`
    width: 1111px;
    height: 100%;
    background-image: url(${FormBackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
`;

export const FrameForm = styled.img`
    position: absolute;
    width: 871px;
    height: 472px;
    left: 120px;
    top: calc(50% - 472px/2);
    background-image: url(${Frame});
    background-size: cover;
    background-repeat: no-repeat;
`;

export const FrameText = styled.p`
    position: absolute;
    width: 782px;
    height: 225px;
    left: 164px;
    top: 300px;
    font-family: 'Prata';
    font-style: normal;
    font-weight: 400;
    font-size: 55px;
    line-height: 75px;
    color: #007A46;

    span {
    color: #F8475E;
  }
`;

export const Hands = styled.img`
    position: absolute;
    width: 150px;
    height: 150px;
    left: 721px;
    top: 550px;
`;

export const FormLogo = styled.p`
    position: absolute;
    width: 184px;
    height: 70px;
    left: 1424px;
    top: 150px;
    font-family: 'Secular One', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 72px;
    margin-top: 5px;
    color: #007A46;
`;

export const Welcome = styled.p`
    position: absolute;
    width: 188px;
    height: 28px;
    left: 1201px;
    top: 300px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 10px;
    letter-spacing: 0.15px;
    color: #007A46; 
    white-space: nowrap;
`;

export const Message = styled.p`
    position: absolute;
    width: 226px;
    height: 28px;
    left: 1201px;
    top: 333px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 35px;
    letter-spacing: 0.15px;
    color: #606060;
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  margin-top: 70px;
  margin-left: 180px;
  left: 400px;
  padding: 40px;
  background: #F5F5F5;
  border-radius: 4px;
`;


export const Input = styled.input`
  display: flex;
  font-family: "Roboto", sans-serif;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px 10px 16px;
  width: 629px;
  height: 40px;
  margin: 25px;
  background: #F5F5F5;
  border: 1px solid #92DFBF;
  border-radius: 4px;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-family: "Roboto";
  font-size: 12px;
`;

export const SubmitButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  margin-top: 20px;
  width: 630px;
  font-size: 20px;
  color: #fff;
  height: 55px;
  border: none;
  cursor: pointer;
  background: #00C172;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  &:hover {
    background-color: #007A50;
  }
`;

export const ForgotPassword = styled.p`
    position: absolute;
    width: 199px;
    height: 25px;
    left: 1201px;
    top: 705px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #007A46;
`;

export const CreateAccount = styled.p`
    position: absolute;
    width: 255px;
    height: 50px;
    left: 1575px;
    top: 705px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 25px;
    align-items: center;
    text-align: right;
    color: #606060;

    span {
    cursor: pointer;
    color: #007A46;
  }
`;

