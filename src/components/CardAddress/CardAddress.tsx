import React from 'react';
import { StyledCard, StyledTitle, StyledInfo, GridContainer } from './styled';
import CardContent from '@mui/material/CardContent';

const AddressCard: React.FC = () => {
  return (
    <GridContainer>
      <StyledCard>
        <CardContent>
          <StyledTitle variant="h4" gutterBottom>
            Fortaleza-CE
            <h6>unidade Ubirajara</h6>
          </StyledTitle>
          <StyledInfo variant="subtitle1" gutterBottom>
            <h4>Endereço:</h4> 
            Rua dos pracinhas, 324, Passaré<br />
            61090130
          </StyledInfo>
          <StyledTitle variant="h6" gutterBottom>
            Responsável pela unidade:
          </StyledTitle>
          <StyledInfo variant="body1" gutterBottom>
            José de Alencar<br />
            josedealen@gmail.com
          </StyledInfo>
        </CardContent>
      </StyledCard>

      <StyledCard>
        <CardContent>
          <StyledTitle variant="h4" gutterBottom>
            Fortaleza-CE
            <h6>unidade Ubirajara</h6>
          </StyledTitle>
          <StyledInfo variant="subtitle1" gutterBottom>
            <h4>Endereço:</h4> 
            Rua dos pracinhas, 324, Passaré<br />
            61090130
          </StyledInfo>
          <StyledTitle variant="h6" gutterBottom>
            Responsável pela unidade:
          </StyledTitle>
          <StyledInfo variant="body1" gutterBottom>
            José de Alencar<br />
            josedealen@gmail.com
          </StyledInfo>
        </CardContent>
      </StyledCard>

      <StyledCard>
        <CardContent>
          <StyledTitle variant="h4" gutterBottom>
            Fortaleza-CE
            <h6>unidade Ubirajara</h6>
          </StyledTitle>
          <StyledInfo variant="subtitle1" gutterBottom>
            <h4>Endereço:</h4> 
            Rua dos pracinhas, 324, Passaré<br />
            61090130
          </StyledInfo>
          <StyledTitle variant="h6" gutterBottom>
            Responsável pela unidade:
          </StyledTitle>
          <StyledInfo variant="body1" gutterBottom>
            José de Alencar<br />
            josedealen@gmail.com
          </StyledInfo>
        </CardContent>
      </StyledCard>

      <StyledCard>
        <CardContent>
          <StyledTitle variant="h4" gutterBottom>
            Fortaleza-CE
            <h6>unidade Ubirajara</h6>
          </StyledTitle>
          <StyledInfo variant="subtitle1" gutterBottom>
            <h4>Endereço:</h4> 
            Rua dos pracinhas, 324, Passaré<br />
            61090130
          </StyledInfo>
          <StyledTitle variant="h6" gutterBottom>
            Responsável pela unidade:
          </StyledTitle>
          <StyledInfo variant="body1" gutterBottom>
            José de Alencar<br />
            josedealen@gmail.com
          </StyledInfo>
        </CardContent>
      </StyledCard>
    </GridContainer>
  );
}

export default AddressCard;
