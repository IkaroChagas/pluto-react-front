import React, { useEffect, useState } from 'react';
import { StyledCard, StyledTitle, StyledInfo, GridContainer } from './styled';
import CardContent from '@mui/material/CardContent';
import { IUnits, getAllUnits } from '../../services/UnitsServices';

const AddressCard: React.FC = () => {
  const [units, setUnits] = useState<IUnits[]>([]);

  const fetchUnits = async () => {
      try {
          const units = await getAllUnits();
       setUnits(units)
      } catch (error) {
          alert("Erro ao buscar os unidades");
      }
  };

  useEffect(() => {
      fetchUnits()
  }, []);



  return (
    <GridContainer>
      {units.map(unit => (
         <StyledCard>
         <CardContent>
           <StyledTitle variant="h4" gutterBottom>
             {unit.citystate}
             <h6>{unit.name}</h6>
           </StyledTitle>
           <StyledInfo variant="subtitle1" gutterBottom>
             <h4>Endereço:</h4> 
             {unit.address}
           </StyledInfo>
           <StyledTitle variant="h6" gutterBottom>
             Responsável pela unidade:
           </StyledTitle>
           <StyledInfo variant="body1" gutterBottom>
           {unit.responsiblename}
             {unit.responsibleemail}
           </StyledInfo>
         </CardContent>
       </StyledCard>
 
      ))}
    </GridContainer>
  );
}

export default AddressCard;
