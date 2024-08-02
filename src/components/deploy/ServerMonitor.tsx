import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  PointElement,
  LinearScale,
  Title,
  LineElement,
  CategoryScale,
  Tooltip,
  Filler,
} from 'chart.js';

ChartJS.register(
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Filler,
  LineElement,
);

export default function ServerMonitor() {
  const sampleData = {
    labels: ['17:30', '17:35', '17:40', '17:45', '17:50', '17:55', '18:00'],
    datasets: [
      {
        label: 'CPU 사용량',
        data: [55, 34, 47, 59, 62, 54, 67],
        fill: true,
        backgroundColor: '#567ace75',
        borderColor: '#567ace',
      },
    ],
  };

  const options = {
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
    <div className="justift-evenly flex flex-row gap-8 p-8">
      <div>
        <div className="w-[540px] rounded-lg border-2 border-clove-light p-4 py-6">
          <div className="flex flex-row items-center justify-between px-4 pb-2">
            <h2 className="text-lg font-bold">CPU 사용량</h2>
            <div>30분 전</div>
          </div>
          <Line
            data={sampleData}
            options={options}
          />
        </div>
      </div>
    </div>
  );
}
