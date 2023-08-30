import React from 'react';
import { HeaderContainer, TextContainer, ContainerFood, FoodImage } from './styled'
import textImg from '../../../assets/text.png';
import foodImg from '../../../assets/feeding.png';

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <TextContainer>
                <img src={textImg} />
            </TextContainer>
            <ContainerFood>
                <FoodImage src={foodImg} />
            </ContainerFood>
        </HeaderContainer>
    );
}

export default Header;
