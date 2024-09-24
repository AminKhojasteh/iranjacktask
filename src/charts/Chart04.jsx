import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const chartData = {
  labels: ["Label 1", "Label 2"],
  datasets: [
    {
      label: "Time Spent",
      data: [35, 245],
      backgroundColor: ["rgba(245, 245, 245, 1)", "rgba(85, 85, 85, 1)"],
      circumference: 270,
      rotation: 90,
      borderWidth: 4,
      barThickness: 0,
    },
    {
      label: "Time Spent",
      data: [45, 225],
      backgroundColor: ["rgba(245, 245, 245, 1)", "rgba(37, 99, 235, 1)"],
      circumference: 270,
      rotation: 90,
      borderWidth: 4,
    },
    {
      label: "Time Spent",
      data: [70, 190],
      backgroundColor: ["rgba(245, 245, 245, 1)", "rgba(59, 130, 246, 1)"],
      circumference: 270,
      rotation: 90,
      borderWidth: 4,
    },
    {
      label: "Time Spent",
      data: [120, 140],
      backgroundColor: ["rgba(245, 245, 245, 1)", "rgba(170, 170, 170, 1)"],
      circumference: 270,
      rotation: 90,
      borderWidth: 4,
    },
    {
      label: "Time Spent",
      data: [35, 235],
      backgroundColor: ["rgba(245, 245, 245, 1)", "rgba(96, 165, 250, 1)"],
      circumference: 270,
      rotation: 90,
      borderWidth: 4,
    },
    {
      label: "Time Spent",
      data: [100, 170],
      backgroundColor: ["rgba(245, 245, 245, 1)", "rgba(29, 78, 216, 1)"],
      circumference: 270,
      rotation: 90,
      borderWidth: 4,
    },
    {
      label: "Time Spent",
      data: [70, 200],
      backgroundColor: ["rgba(245, 245, 245, 1)", "rgba(30, 58, 138, 1)"],
      circumference: 270,
      rotation: 90,
      borderWidth: 4,
    },
    {
      label: "Time Spent",
      data: [90, 180],
      backgroundColor: ["rgba(245, 245, 245, 1)", "rgba(191, 219, 254, 1)"],
      circumference: 270,
      rotation: 90,
      borderWidth: 4,
    },
  ],
};

function Chart04({ isItForMobile }) {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    cutout: "5%",
    plugins: {
      legend: {
        display: false,
      },
      customLegend: true,
    },
  };

  const customLegendPlugin = {
    id: "customLegend",
    afterDraw(chart) {
      const {
        ctx,
        data,
        chartArea: { top, bottom, left, right },
      } = chart;

      ctx.save();
      ctx.textBaseline = "bottom";
      data.datasets.forEach((dataset, index) => {
        ctx.fillStyle = dataset.backgroundColor[1];
        ctx.fillRect((left + right + 30) / 2, top + 5 + index * 13.5, 8, 8);
        ctx.fillStyle = "rgba(85, 85, 85, 1)";
        ctx.font = `400 10px Segoe UI`;
        ctx.fillText("30%", (left + right + 50) / 2, top + 15 + index * 13.5);
      });
      ctx.restore();
    },
  };

  return (
    <div
      style={isItForMobile ? { marginTop: "", marginBottom: "10px" } : {}}
      className={`${isItForMobile ? "w-64" : "mt-6"}`}
    >
      <Doughnut
        options={options}
        data={chartData}
        plugins={[customLegendPlugin]}
      />
    </div>
  );
}

export default Chart04;
