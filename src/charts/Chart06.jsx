import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const chartData = {
  labels: ["XS", "S", "M", "L", "XL", "XXL", ""],
  datasets: [
    {
      label: "Sales 1",
      data: [68, 68, 68, 68, 68, 68],
      backgroundColor: "rgba(147, 197, 253, 1)",
    },
    {
      label: "Sales 3",
      data: [83, 83, 83, 83, 83, 83],
      backgroundColor: "rgba(29, 78, 216, 1)",
    },
    {
      label: "Sales 3",
      data: [30, 30, 30, 30, 30, 30],
      backgroundColor: "rgba(136, 136, 136, 1)",
    },
  ],
};

function Chart06({ isItForMobile }) {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: isItForMobile ? 1.5 : 1.65,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 10,
          min: 0,
          max: 100,
          callback: (value) => {
            return value;
          },
          color: "rgba(66, 66, 66, 1)",
          font: {
            size: 12,
            weight: "400",
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div
      style={isItForMobile ? { marginTop: "", marginBottom: "" } : {}}
      className={`${isItForMobile ? "w-full" : ""}`}
    >
      <Bar options={options} data={chartData} />
    </div>
  );
}

export default Chart06;
