import React, { useContext } from "react";
import { StockContext } from "./stockcontext";

const chartTypes = ["Line", "Candlestick", "Area"];

export default function ChartTypeSelector() {
  const { chartType, setChartType } = useContext(StockContext);

  return (
    <div className="w-full bg-gray-100 py-4">
      <div className="flex justify-center gap-4">
        {chartTypes.map((type) => (
          <button
            key={type}
            onClick={() => setChartType(type)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              chartType === type
                ? "bg-green-600 text-white"
                : "bg-gray-300 hover:bg-green-300 text-black"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}
