import React from "react";
import * as C from "./styled";
import Hands from '../../../assets/hands.png';
import World from '../../../assets/world.png';
import Ellipsered from '../../../assets/ellipsered.png';
import Card1 from '../../../assets/Card1.png';
import Card2 from '../../../assets/Card2.png';
import Andress from '../../../assets/andresscard.png';
import MapImage from '../../../assets/map.png';
import Maps from "../../MapContainer/Maps";


const Main: React.FC = () => {


    return (

        <C.MainContainer>
            <C.HeaderH1>Nosso Propósito</C.HeaderH1>

            <C.ContainerImages>
                <C.HandsImage src={Hands} />
                <C.WorldImage src={World} />
            </C.ContainerImages>

            <C.TextContainer>
                <C.TextHands>
                    Nós acreditamos que toda criança merece uma refeição nutritiva. Ajude-nos a tornar isso realidade!
                </C.TextHands>

                <C.TextWorld>
                    Somos um projeto que usa a prática da agricultura sustentável para a produção de alimentos.
                </C.TextWorld>
            </C.TextContainer>

            <C.Rectangle>
                <C.EllipseredImage src={Ellipsered} />
                <C.RectangleText>
                    Quer ser um apoiador nessa causa?
                </C.RectangleText>
                <C.RectangleText2>
                    Faça a sua doação e experimente o prazer de impactar vidas todos os dias
                </C.RectangleText2>
                <C.RectangleCards>
                    <C.FirstCard src={Card1} />
                    <C.SecondCard src={Card2} />
                </C.RectangleCards>
            </C.Rectangle>

            <C.TextContainer2>
                <C.Header2>
                    Nossas unidades
                </C.Header2>
                <C.Text2>
                    Caso prefira levar a doação até a gente ou conhecer nosso projeto!
                </C.Text2>
            </C.TextContainer2>

            <C.AndressContainer>
                <C.AndressImage src={Andress} />
                <C.AndressImage src={Andress} />
                <C.AndressImage src={Andress} />
                <C.AndressImage src={Andress} />
            </C.AndressContainer>

            <C.MapContainer>
                <Maps />
            </C.MapContainer>


        </C.MainContainer>
    )
};

export default Main;