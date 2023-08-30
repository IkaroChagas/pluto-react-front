import styled from "styled-components";

export const AddUnitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;  
`;

export const Frame = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 764px;
  height: 679px;
  left: 726px;
  top: 200px;
  background: #F5F5F5;
  border: 5px solid rgba(49, 203, 138, 0.5);
  box-shadow: 0px 4px 4px rgba(49, 203, 138, 0.25);
  border-radius: 10px;
`;


export const Title = styled.h1`
  position: absolute;
  width: 229px;
  height: 38px;
  left: 50px;
  top: 2rem;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #00C172;
  white-space: nowrap;  
`;

export const FormUnit = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.7rem;
  margin-left: 2rem;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-family: "Roboto";
  font-size: 15px;
`;

export const InputUnit = styled.input`
  box-sizing: border-box;
  display: flex;
  margin: auto;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px 10px 16px;
  margin-top: 8rem;
  margin-left: 1rem;
  width: 644px;
  height: 44px;
  background: #F9F9F9;
  border: 1px solid #D9D9D9;
  border-radius: 4px;
  order: 0;
`;

export const InputAddress = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px 10px 16px;
  gap: 10px;
  margin-left: 1rem;
  width: 644px;
  height: 44px;
  background: #F9F9F9;
  border: 1px solid #D9D9D9;
  border-radius: 4px;
`;

export const InputCityState = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px 10px 16px;
  margin-left: 1rem;
  margin-top: -0.45rem;
  width: 307px;
  height: 44px;
  background: #F9F9F9;
  border: 1px solid #D9D9D9;
  border-radius: 4px;
`;

export const InputResponsible = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px 10px 16px;
  gap: 10px;
  width: 307px;
  height: 44px;
  background: #F9F9F9;
  border: 1px solid #D9D9D9;
  border-radius: 4px;
  margin-top: -5.47rem;
  margin-left: 22.2rem; 
`;

export const InputEmail = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px 10px 16px;
  width: 644px;
  height: 44px;
  margin-left: 1rem;
  margin-top: -0.10rem;
  background: #F9F9F9;
  border: 1px solid #D9D9D9;
  border-radius: 4px;
`;

export const InputTitleColor = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px 10px 16px;
  margin-left: 1rem;
  margin-top: -0.6rem;
  width: 307px;
  height: 44px;
  background: #F9F9F9;
  border: 1px solid #D9D9D9;
  border-radius: 4px;
`;

export const InputBodyColor = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px 10px 16px;
  width: 307px;
  height: 44px;
  margin-left: 22.2rem;
  margin-top: -5.47rem;
  background: #F9F9F9;
  border: 1px solid #D9D9D9;
  border-radius: 4px;
`;

export const ButtonDelete = styled.button`
  display: flex;
  justify-content: center;
  width: 80px;
  height: 40px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 36px;
  align-items: center;
  padding: 10px 15px;
  gap: 10px;
  position: absolute;
  left: 3.5rem;
  right: 54.53%;
  top: 35rem;
  background: #F8475E;
  color: #F6F6E9;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ButtonSend = styled.button`
   display: flex;
  justify-content: center;
  width: 80px;
  height: 40px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 36px;
  align-items: center;
  padding: 10px 15px;
  gap: 10px;
  position: absolute;
  left: 38.5rem;
  right: 54.53%;
  top: 35rem;
  background: #F8475E;
  color: #F6F6E9;
  border: none;
  cursor: pointer;
  background: #00C172;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;
