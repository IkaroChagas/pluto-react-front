import { Bar } from 'react-chartjs-2';

export const PlansUnitsChart = () => {
  const data = {
    labels: ['Plano 1', 'Plano 2', 'Plano 3'],
    datasets: [
      {
        label: 'Unidades',
        data: [10, 15, 20],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y', 
  };

  return (
    <div>
      <h2>Planos e Unidades</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export const DonationChart = () => {
  const data = {
    labels: ['Mês 1', 'Mês 2', 'Mês 3'],
    datasets: [
      {
        label: 'Arrecadações',
        data: [5000, 8000, 10000],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
  };

  return (
    <div>
      <h2>Arrecadações</h2>
      <Bar data={data} options={options} />
    </div>
  );
};
