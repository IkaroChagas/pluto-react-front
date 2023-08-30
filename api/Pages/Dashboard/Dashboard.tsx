import React, { useEffect, useState } from 'react';
import * as C from './styled';
import Logo1 from '../../assets/dashboardicon1.png';
import Logo2 from '../../assets/dashboardicon2.png';
import Logo3 from '../../assets/dashboardicon3.png';
import { getAllPlans, IPlan } from "../../services/PlansServices";
import { getAllUnits } from '../../services/UnitsServices';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface DashboardProps {
  plans: IPlan[];
}

const Dashboard: React.FC<DashboardProps> = () => {
  const [plansCount, setPlansCount] = useState<number>(0);
  const [unitsCount, setUnitsCount] = useState<number>(0);

  const fetchUnits = async () => {
    try {
      const units = await getAllUnits();
      setUnitsCount(units.length);
    } catch (error) {
      alert("Erro ao buscar as unidades");
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

  const plansData = [
    { name: '', planos: plansCount },
    { name: '', unidades: unitsCount },
  ];

  const donationsData = [
    { name: 'Plano 1', doações: donationAmount },
    { name: 'Plano 2', doações2: 8000 },
  ];

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
  <C.HeaderMajorFrame>Planos e Unidades</C.HeaderMajorFrame>
  <BarChart style={{ marginTop: '5px' }} width={600} height={250} layout="vertical" data={plansData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis type="number" />
    <YAxis dataKey="name" type="category" />
    <Tooltip />
    <Legend />
    <Bar dataKey="planos" fill="#F5DF4D" stroke="rgba(255, 99, 132, 1)" />
    <Bar dataKey="unidades" fill="#FF6E80" stroke="rgba(75, 192, 192, 1)" />
  </BarChart>
</C.MajorFrame>

<C.MajorFrame2>
  <C.HeaderMajorFrame>Arrecadações por plano</C.HeaderMajorFrame>
  <BarChart style={{ marginTop: '5px' }} width={600} height={250} layout="vertical" data={donationsData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis type="number" />
    <YAxis dataKey="name" type="category" />
    <Tooltip />
    <Legend />
    <Bar dataKey="doações" fill="#FFB451" stroke="rgba(255, 99, 132, 1)" />
    <Bar dataKey="doações2" fill="#FF9EB1" stroke="rgba(255, 99, 132, 1)" />
  </BarChart>
</C.MajorFrame2>

</C.DashboardContainer>

);
};

export default Dashboard;
