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
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Sales 1",
      data: [72000, 80000, 65000, 72000, 65000, 92000],
      backgroundColor: "rgba(0, 183, 195, 1)",
    },
  ],
};

function Chart02({ isItForMobile }) {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1.3,
    layout: {
      padding: {
        right: 10,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "X-axis title",
          color: isItForMobile
            ? "rgba(128, 128, 128, 1)"
            : "rgba(66, 66, 66, 1)",
          font: {
            size: 10,
            weight: "600",
          },
        },
        ticks: {
          color: isItForMobile
            ? "rgba(128, 128, 128, 1)"
            : "rgba(66, 66, 66, 1)",
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "Y-axis title",
          color: isItForMobile
            ? "rgba(128, 128, 128, 1)"
            : "rgba(66, 66, 66, 1)",
          font: {
            size: 10,
            weight: "600",
          },
        },
        ticks: {
          color: isItForMobile
            ? "rgba(128, 128, 128, 1)"
            : "rgba(66, 66, 66, 1)",
          font: {
            size: 12,
            weight: "400",
          },
          callback: (value) => {
            return `${Math.round(value / 1000)}K`; // Custom format for tick labels
          },
        },
      },
    },
  };

  return (
    <div
      style={isItForMobile ? { marginTop: "-38px", marginBottom: "8px" } : {}}
      className={`${isItForMobile ? "w-64" : ""}`}
    >
      <Bar options={options} data={chartData} />
    </div>
  );
}

export default Chart02;
