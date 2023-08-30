import { Typography, Card } from '@mui/material';
import styled from "styled-components";


export const GridContainer = styled.div`
&& {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10rem; 
    margin: auto;
}
`;


export const StyledCard = styled(Card)`
&& { // especificando as propriedades CSS que vão estilizar o card
    background: #F6F6E9;
    border-radius: 20px;
    box-sizing: border-box;
    width: 595px;
    height: 342px; 
  }
`;

export const StyledTitle = styled(Typography)`
  && {font-family: "Prata";
  color: #007A46;
  background-color: #F6F6E9;}

  h6 {
    color: #373734;
    font-size: 15px;
    margin-top: 20px;
  }
  
`;

export const StyledInfo = styled(Typography)`
 && { color: #373734;

  h4 {
    font-family: 'Roboto';
    color: #007A46;
  }
}
`;