import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Test Scores",
        data: [10, 50, 100, 150, 200, 300],
        backgroundColor: "rgba(255, 99, 132, 0.2)", // Light red fill
        borderColor: "rgba(255, 99, 132, 1)", // Red line
        borderWidth: 2,
        tension: 0.4, // Smooth curve
        fill: true, // Area fill under the line
        pointRadius: 0, // No points
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hides legend
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
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
