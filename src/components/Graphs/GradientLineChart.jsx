import { Line } from "react-chartjs-2";
import { useRef } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Filler);

const GradientLineChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Test Scores",
        data: [10, 50, 100, 150, 200, 300],
        borderColor: "rgba(255, 99, 132, 1)", // Line color
        borderWidth: 2,
        tension: 0.4, // Smooth curve
        fill: true, // Enable the gradient fill
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null; // Wait for chart area to be ready
          }

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(255, 99, 132, 0.4)"); // Top color
          gradient.addColorStop(1, "rgba(255, 99, 132, 0)"); // Bottom transparent

          return gradient;
        },
        pointRadius: 0, // No points
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // No vertical grid lines
        },
        ticks: {
          font: {
            size: 12, // Adjust font size
          },
          color: "#B0BEC5", // Light grey ticks
        },
      },
      y: {
        grid: {
          color: "rgba(176, 190, 197, 0.2)", // Light horizontal grid lines
        },
        ticks: {
          beginAtZero: true,
          font: {
            size: 12, // Adjust font size
          },
          color: "#B0BEC5", // Light grey ticks
        },
      },
    },
  };

  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <div style={{ width: "400px", height: "250px", margin: "auto" }}>
        <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
          Test Scores
        </h3>
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default GradientLineChart;
