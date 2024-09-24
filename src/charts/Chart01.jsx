import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const chartData = {
  labels: ["Label 1", "Label 2"],
  datasets: [
    {
      label: "",
      data: [72, 28],
      backgroundColor: ["rgba(0, 183, 195, 1)", "rgba(209, 209, 209, 1)"],
      circumference: 180,
      rotation: 270,
      hoverOffset: 4,
    },
  ],
};

function Chart01({ isItForMobile }) {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    cutout: "72%",
    layout: {
      padding: {
        left: 30,
        right: 40,
        bottom: 50,
      },
    },
    plugins: {
      legend: {
        display: isItForMobile ? false : true,
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "rect",
          color: "rgba(66, 66, 66, 1)",
          font: {
            size: 12,
            weight: "400",
          },
        },
      },
      middleText: {
        text: "72%",
      },
      leftText: {
        text: "0",
      },
      rightText: {
        text: "100",
      },
    },
  };

  const middleTextPlugin = {
    id: "middleText",
    beforeDraw: (chart) => {
      const { width, height, ctx } = chart;
      ctx.restore();
      ctx.font = isItForMobile ? "700 34px Segoe UI" : "600 32px Segoe UI";
      ctx.textBaseline = "bottom";
      const text = chart.config.options.plugins.middleText.text;
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = isItForMobile
        ? Math.round(height * 0.6)
        : Math.round(height * 0.53);
      ctx.fillStyle = isItForMobile
        ? "rgba(36, 36, 36, 1)"
        : "rgba(66, 66, 66, 1)";
      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  };
  const leftTextPlugin = {
    id: "leftText",
    beforeDraw: (chart) => {
      const { width, height, ctx } = chart;
      ctx.restore();
      ctx.font = `600 12px Segoe UI`;
      ctx.textBaseline = "bottom";
      const text = chart.config.options.plugins.leftText.text;
      const textX = isItForMobile
        ? Math.round(width * 0.07)
        : Math.round(width * 0.07);
      const textY = isItForMobile
        ? Math.round(height * 0.58)
        : Math.round(height * 0.51);
      ctx.fillStyle = isItForMobile
        ? "rgba(36, 36, 36, 1)"
        : "rgba(66, 66, 66, 1)";
      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  };
  const rightTextPlugin = {
    id: "rightText",
    beforeDraw: (chart) => {
      const { width, height, ctx } = chart;
      ctx.restore();
      ctx.font = `600 12px Segoe UI`;
      ctx.textBaseline = "bottom";
      const text = chart.config.options.plugins.rightText.text;
      const textX = isItForMobile
        ? Math.round(width * 0.86)
        : Math.round(width * 0.86);
      const textY = isItForMobile
        ? Math.round(height * 0.58)
        : Math.round(height * 0.51);
      ctx.fillStyle = isItForMobile
        ? "rgba(36, 36, 36, 1)"
        : "rgba(66, 66, 66, 1)";
      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  };

  return (
    <div
      style={isItForMobile ? { marginTop: "-54px", marginBottom: "-74px" } : {}}
      className={`${isItForMobile ? "w-64" : ""}`}
    >
      <Doughnut
        options={options}
        data={chartData}
        plugins={[middleTextPlugin, leftTextPlugin, rightTextPlugin]}
      />
    </div>
  );
}

export default Chart01;
