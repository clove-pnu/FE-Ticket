import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  PointElement,
  LinearScale,
  Title,
  BarElement,
  CategoryScale,
  Tooltip,
  Filler,
  ArcElement,
  Legend,
} from 'chart.js';

ChartJS.register(
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Filler,
  BarElement,
  ArcElement,
  Legend,
);

export default function PlayMonitor() {
  const barSampleData = {
    labels: ['08.01', '08.02', '08.03', '08.04', '08.05', '08.06', '08.07'],
    datasets: [
      {
        label: '기간 별 예매 현황',
        data: [55, 34, 47, 59, 62, 54, 88],
        fill: true,
        backgroundColor: '#567ace',
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
      },
    },
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
  };

  const doughnutSampleData = {
    labels: ['R석', 'S석', 'A석'],
    datasets: [
      {
        label: '좌석 별 예매 현황',
        data: [138, 176, 227],
        backgroundColor: ['#567ace', '#ff7070', '#94f692'],
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
    },
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    radius: '85%',
  };

  return (
    <div className="flex flex-row justify-evenly gap-8 p-8">
      <div>
        <div className="w-[540px] rounded-lg border-2 border-clove-light p-4 py-6">
          <div className="flex flex-row items-center justify-between px-4 pb-2">
            <h2 className="text-lg font-bold">기간별 예매 현황</h2>
            <div>2024.08.01~2024.08.06</div>
          </div>
          <Bar
            data={barSampleData}
            options={barOptions}
          />
        </div>
      </div>
      <div>
        <div className="w-[400px] rounded-lg border-2 border-clove-light p-4 py-6">
          <div className="flex flex-row items-center justify-between px-4 pb-2">
            <h2 className="text-lg font-bold">좌석 등급 별 예매 현황</h2>
            <div>전체</div>
          </div>
          <Pie
            data={doughnutSampleData}
            options={doughnutOptions}
          />
        </div>
      </div>
    </div>
  );
}
