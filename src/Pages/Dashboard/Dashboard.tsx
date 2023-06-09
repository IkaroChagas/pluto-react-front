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
                A partir desse sistema você consegue gerenciar informações a serem exibidas no site do seu projeto. Dê uma olhada em alguns dados gerenciais que coletamos .
            </C.DashboardText>
            <C.FrameDashboard>
                <img src={Logo1} />
            </C.FrameDashboard>
            <C.FrameDashboard2>
                <img src={Logo2} />
            </C.FrameDashboard2>
            <C.FrameDashboard3>
                <img src={Logo3} />
            </C.FrameDashboard3>

        </C.DashboardContainer>

    );
}

export default Dashboard;
