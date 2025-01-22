import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

const LineChartCurve = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // Months
    datasets: [
      {
        label: "Previous 6 months",
        data: [50, 150, 100, 75, 125, 200], // Example data for previous 6 months
        borderColor: "purple",
        backgroundColor: "rgba(128, 0, 128, 0.1)", // Light fill color for the line
        borderWidth: 2,
        tension: 0.4, // Smooth line
        pointBackgroundColor: "white",
        pointBorderColor: "purple",
        pointRadius: 4,
      },
      {
        label: "Recent 6 months",
        data: [100, 75, 50, 100, 150, 125], // Example data for recent 6 months
        borderColor: "red",
        backgroundColor: "transparent",
        borderWidth: 2,
        borderDash: [5, 5], // Dotted line
        tension: 0.4, // Smooth line
        pointBackgroundColor: "white",
        pointBorderColor: "red",
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#333", // Legend text color
          font: {
            size: 12,
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical grid lines
        },
        ticks: {
          color: "#666", // X-axis labels color
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          color: "rgba(176, 190, 197, 0.2)", // Light horizontal grid lines
        },
        ticks: {
          beginAtZero: true,
          stepSize: 50, // Set the step size explicitly
          color: "#666", // Y-axis labels color
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <div className="w-3/4 border-4 bg-white rounded-lg shadow-md h-96 px-10 pb-16 pt-10">
        <h2 className="text-lg font-semibold mb-4">Learning activity</h2>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChartCurve;
