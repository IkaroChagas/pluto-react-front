import React from "react";
import * as C from "./styled";
import Hands from '../../../assets/hands.png';
import World from '../../../assets/world.png';
import Maps from "../../MapContainer/Maps";
import AddressCard from "../../CardAddress/CardAddress";
import PlanCard from "../../PlanCard/PlanCard";


const Main: React.FC = () => {


    return (

        <C.MainContainer>
            <section>
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
            </section>
                <PlanCard />

            <C.TextContainer2>
                <section>
                    <C.Header2>
                        Nossas unidades
                    </C.Header2>
                    <C.Text2>
                        Caso prefira levar a doação até a gente ou conhecer nosso projeto!
                    </C.Text2>
                </section>
            </C.TextContainer2>

            <C.AndressContainer>
                <AddressCard/>
            </C.AndressContainer>

            <C.MapContainer>
                <Maps />
            </C.MapContainer>

        </C.MainContainer>
    )
};

export default Main;