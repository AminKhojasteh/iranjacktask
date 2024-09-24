import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "", ""],
  datasets: [
    {
      label: "Line 1",
      data: [50000, 58000, 49000, 40000, 50000, 54000, 58000, 68000],
      borderColor: "rgba(0, 183, 195, 1)",
      backgroundColor: "rgba(0, 183, 195, 0.3)",
      fill: true,
      pointRadius: 0,
    },
    {
      label: "Line 2",
      data: [70000, 83000, 96000, 89000, 20000, 82000, 46000, 10000],
      borderColor: "rgba(177, 70, 194, 1)",
      backgroundColor: "rgba(207, 135, 218, 0.5)",
      fill: true,
      pointRadius: 0,
    },
  ],
};

const customLegendPlugin = {
  id: "customLegend",
  afterDraw(chart) {
    const {
      ctx,
      data,
      chartArea: { bottom, left },
    } = chart;
    const legends = data.datasets.map((dataset) => ({
      text: dataset.label,
      color: dataset.borderColor,
    }));
    ctx.save();
    ctx.fillStyle = legends[0].color;
    ctx.fillRect(left - 10, bottom + 60, 10, 10);
    ctx.fillStyle = legends[1].color;
    ctx.fillRect(left + 50, bottom + 60, 10, 10);
    ctx.font = `400 12px Segoe UI`;
    ctx.textBaseline = "bottom";
    ctx.fillStyle = "rgba(66, 66, 66, 1)";
    ctx.fillText(legends[0].text, left + 5, bottom + 70);
    ctx.fillText(legends[1].text, left + 65, bottom + 70);
    ctx.restore();
  },
};

function Chart03({ isItForMobile }) {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: isItForMobile ? 1.5 : 2.1,
    layout: {
      padding: {
        bottom: 20,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "X-axis title",
          color: "rgba(66, 66, 66, 1)",
          font: {
            size: 10,
            weight: "600",
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "Y-axis title",
          color: "rgba(66, 66, 66, 1)",
          font: {
            size: 10,
            weight: "600",
          },
        },
        ticks: {
          stepSize: 20000,
          min: 0,
          max: 100000,
          callback: (value) => {
            if (value === 0) return 0;
            return `${Math.round(value / 1000)}K`;
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
      customLegend: isItForMobile ? false : true,
    },
  };

  return (
    <div
      style={isItForMobile ? { marginTop: "", marginBottom: "-10px" } : {}}
      className={`${isItForMobile ? "w-full" : ""}`}
    >
      <Line options={options} data={chartData} plugins={[customLegendPlugin]} />
    </div>
  );
}

export default Chart03;
