import React from "react";
import { HeaderH1, MainContainer, HandsImage, ContainerImages, WorldImage, TextHands, TextWorld } from "./styled";
import Hands from '../../assets/hands.png'
import World from '../../assets/world.png'


const Main: React.FC = () => {


    return (

        <MainContainer>
            <HeaderH1>Nosso Propósito</HeaderH1>
            <ContainerImages>
                <HandsImage src={Hands}></HandsImage>
                <WorldImage src={World}></WorldImage>
            </ContainerImages>

            <TextHands>
                Nós acreditamos que toda criança merece uma refeição nutritiva. Ajude-nos a tornar isso realidade!
            </TextHands>

            <TextWorld>
                Somos um projeto que usa a prática da agricultura sustentável para a produção de alimentos.
            </TextWorld>

        </MainContainer>
    )
};

export default Main;