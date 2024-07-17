import {
  Chart as ChartJS, LineElement, PointElement, LinearScale, Title,
  CategoryScale,
  Tooltip,
  Filler,
} from 'chart.js';
import { callback } from 'chart.js/dist/helpers/helpers.core';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Filler);

export default function Dashboard() {
  const SampleData = {
    labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00'],
    datasets: [
      {
        label: 'CPU 사용량',
        data: [55, 34, 47, 59, 62, 54],
        fill: true,
        backgroundColor: 'rgba(134, 138, 254, 0.3)',
        borderColor: 'rgba(134, 138, 254, 0.7)',
        tension: 0.2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'CPU 사용량',
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          callback: (value) => `${value} %`,
        },
      },
    },
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
  };

  return (
    <div>
      <Line data={SampleData} options={options} />
    </div>
  );
}
