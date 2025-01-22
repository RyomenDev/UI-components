import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ["Interviews Given", "Results Received", "Pending Interviews"],
    datasets: [
      {
        data: [234, 234, 234],
        backgroundColor: ["#7B2CBF", "#FF595E", "#FFCA3A"],
        hoverBackgroundColor: ["#6A21A7", "#E04850", "#E2B32E"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%", // Creates the donut effect
    plugins: {
      tooltip: { enabled: true },
      legend: {
        display: true,
        position: "bottom",
        align: "center",
        fullSize: true,
        labels: {
          color: "#333",
          font: { size: 12 },
          boxWidth: 10, // Adjust the size of the legend box
        },
      },
    },
  };

  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <div style={{ width: "300px", height: "300px" }}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DonutChart;
