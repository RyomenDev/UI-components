import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5", "Thing 6"],
  datasets: [
    {
      label: "# of Votes",
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

// export function RadarChart() {
//   return <Radar data={data} />;
// }

const RadarChart = () => {
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center border-4 bg-slate-50">
        <div className=" w-2/3 h-2/3">
          <Radar data={data} />
        </div>
      </div>
    </>
  );
};

export default RadarChart;
