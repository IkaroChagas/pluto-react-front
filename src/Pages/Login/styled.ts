import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ErrorMessage = styled.span`
  color: red;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #f6f6e9;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
`;
