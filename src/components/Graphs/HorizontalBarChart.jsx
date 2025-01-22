import React from "react";

const data = [
  { label: "UPSC", value: 75 },
  { label: "CAT", value: 50 },
  { label: "CLAT", value: 40 },
  { label: "CLAT", value: 20 },
  { label: "CLAT", value: 20 },
  { label: "CLAT", value: 20 },
  { label: "NEET", value: 20 },
];

const HorizontalBarChart = () => {
  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow w-3/4">
        <h2 className="text-lg font-semibold mb-4">Average Score</h2>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              {/* Label */}
              <span className="text-sm text-gray-800 w-20">{item.label}</span>
              {/* Bar */}
              <div className="flex-1 bg-red-100 h-2.5 rounded-full relative">
                <div
                  className="absolute h-2.5 bg-red-500 rounded-full"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
              {/* Percentage */}
              <span className="text-sm text-gray-500">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalBarChart;
