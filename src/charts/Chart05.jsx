import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const chartData = {
  labels: ["Facebook", "Instagram", "Twitter", "YouTube", "LinkedIn"],
  datasets: [
    {
      label: "Time Spent",
      data: [130, 70, 55, 30, 75],
      backgroundColor: [
        "rgba(166, 233, 237, 1)",
        "rgba(0, 102, 109, 1)",
        "rgba(0, 91, 112, 1)",
        "rgba(0, 183, 195, 1)",
        "rgba(245, 245, 245, 1)",
      ],
      hoverOffset: 4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: true,
  cutout: "75%",
  plugins: {
    legend: {
      display: false,
    },
    middleText: {
      text: "1000",
    },
  },
  layout: {
    padding: {
      left: 25,
      right: 25,
    },
  },
};

const middleTextPlugin = {
  id: "middleText",
  beforeDraw: (chart) => {
    const { width, height, ctx } = chart;
    ctx.restore();
    ctx.font = `600 28px Segoe UI`;
    ctx.textBaseline = "middle";
    const text = chart.config.options.plugins.middleText.text;
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = Math.round(height / 2);
    ctx.fillStyle = "rgba(66, 66, 66, 1)";
    ctx.fillText(text, textX, textY);
    ctx.save();
  },
};

function Chart05({ isItForMobile }) {
  return (
    <div
      style={
        isItForMobile
          ? { marginTop: "-10px", marginBottom: "-10px" }
          : { marginTop: "", marginBottom: "-10px" }
      }
      className={`${isItForMobile ? "w-64" : ""}`}
    >
      <Doughnut
        options={options}
        data={chartData}
        plugins={[middleTextPlugin]}
      />
    </div>
  );
}

export default Chart05;
