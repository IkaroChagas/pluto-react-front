import React from 'react';
import * as C from './styled';
import Logo1 from '../../assets/dashboardicon1.png';
import Logo2 from '../../assets/dashboardicon2.png';
import Logo3 from '../../assets/dashboardicon3.png';

const Dashboard: React.FC = () => {

    return (
        <C.DashboardContainer>
            <C.DashboardHeader>
                Olá, Seja bem vindo!
            </C.DashboardHeader>
            <C.DashboardText>
                A partir desse sistema você consegue gerenciar informações a serem exibidas no site do seu projeto. Dê uma olhada em alguns dados gerenciais que coletamos.
            </C.DashboardText>

            <C.FrameDashboard>
                <C.FrameImg src={Logo1} />
                <div>
                    <C.FrameText>Quantidade de planos ofertados</C.FrameText>
                    <C.FrameData>7 Planos</C.FrameData>
                </div>
            </C.FrameDashboard>
            <C.FrameDashboard2>
                <C.FrameImg src={Logo2} />
                <div>
                    <C.FrameText>Unidades do projeto cadastradas</C.FrameText>
                    <C.FrameData>3 Unidades</C.FrameData>
                </div>
            </C.FrameDashboard2>

            <C.FrameDashboard3>
                <C.FrameImg src={Logo3} />
                <div>
                    <C.FrameText>Valor total de doações arrecadadas</C.FrameText>
                    <C.FrameData>R$550,00</C.FrameData>
                </div>
            </C.FrameDashboard3>

            <C.MajorFrame>

            </C.MajorFrame>

            <C.MajorFrame2>

            </C.MajorFrame2>

        </C.DashboardContainer>

    );
}

export default Dashboard;
