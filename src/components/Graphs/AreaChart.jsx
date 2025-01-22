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

const MultiColorAreaChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Segment 1",
        data: [10, 50, null, null, null, null], // Data for Jan - Feb
        borderColor: "rgba(255, 99, 132, 1)", // Red line
        backgroundColor: "rgba(255, 99, 132, 0.4)", // Red gradient
        fill: true,
        tension: 0.4,
      },
      {
        label: "Segment 2",
        data: [null, 50, 100, 150, null, null], // Data for Mar - Apr
        borderColor: "rgba(54, 162, 235, 1)", // Blue line
        backgroundColor: "rgba(54, 162, 235, 0.4)", // Blue gradient
        fill: true,
        tension: 0.4,
      },
      {
        label: "Segment 3",
        data: [null, null, null, 150, 200, 300], // Data for May - Jun
        borderColor: "rgba(75, 192, 192, 1)", // Green line
        backgroundColor: "rgba(75, 192, 192, 0.4)", // Green gradient
        fill: true,
        tension: 0.4,
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
            size: 12,
          },
          color: "#B0BEC5",
        },
      },
      y: {
        grid: {
          //   color: "rgba(176, 190, 197, 0.2)",
          display: false, // No Horizontal grid lines
        },
        ticks: {
          beginAtZero: true,
          font: {
            size: 12,
          },
          color: "#B0BEC5",
        },
      },
    },
  };

  return (
    <div className="bg-slate-100 h-screen flex justify-center items-center">
      <div
        style={{ width: "400px", height: "250px", margin: "auto" }}
        className="py-6"
      >
        <h3 className="text-black" style={{ textAlign: "center", marginBottom: "10px" }}>
          Test Scores
        </h3>
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default MultiColorAreaChart;
