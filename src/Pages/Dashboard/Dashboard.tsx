import React, { useEffect, useState } from 'react';
import * as C from './styled';
import Logo1 from '../../assets/dashboardicon1.png';
import Logo2 from '../../assets/dashboardicon2.png';
import Logo3 from '../../assets/dashboardicon3.png';
import { getAllPlans, IPlan } from "../../services/PlansServices";
import { DonationChart, PlansUnitsChart } from '../../components/GraphicChart/GraphicChart';

interface DashboardProps {
  plans: IPlan[];
}


const Dashboard: React.FC<DashboardProps> = () => {
  const [plansCount, setPlansCount] = useState<number>(0);
  const [unitsCount, setUnitsCount] = useState<number>(0);


  const fetchUnits = async () => {
    try {
        const plans = await getAllPlans(); // TODO trocar getAllPlans por getAllUnits
        setUnitsCount(plans.length);
    } catch (error) {
        alert("Erro ao buscar os planos");
    }
};

    const fetchPlans = async () => {
        try {
            const plans = await getAllPlans();
            setPlansCount(plans.length);
        } catch (error) {
            alert("Erro ao buscar os planos");
        }
    };

    useEffect(() => {
        fetchPlans();
        fetchUnits();
    }, []);



  const donationAmount = 'R$550,00';

  return (
    <C.DashboardContainer>
      <C.DashboardHeader>
        Olá, seja bem-vindo!
      </C.DashboardHeader>
      <C.DashboardText>
        A partir deste sistema, você pode gerenciar as informações exibidas no site do seu projeto. Aqui estão alguns dados gerenciais que coletamos:
      </C.DashboardText>

      <C.FrameDashboard>
        <C.FrameImg src={Logo1} />
        <div>
          <C.FrameText>Quantidade de planos ofertados</C.FrameText>
          <C.FrameData>{plansCount} {plansCount > 1 ? "planos" : "plano"}</C.FrameData>
        </div>
      </C.FrameDashboard>
      <C.FrameDashboard2>
        <C.FrameImg src={Logo2} />
        <div>
          <C.FrameText>Unidades do projeto cadastradas</C.FrameText>
          <C.FrameData>{unitsCount} {unitsCount > 1 ? "unidades" : "unidade"}</C.FrameData>
        </div>
      </C.FrameDashboard2>
      <C.FrameDashboard3>
        <C.FrameImg src={Logo3} />
        <div>
          <C.FrameText>Valor total de doações arrecadadas</C.FrameText>
          <C.FrameData>{donationAmount}</C.FrameData>
        </div>
      </C.FrameDashboard3>

      <C.MajorFrame>
      {/* <PlansUnitsChart /> */}
      </C.MajorFrame>

      <C.MajorFrame2>
      {/* <DonationChart /> */}
      </C.MajorFrame2>
    </C.DashboardContainer>
  );
};

export default Dashboard;
