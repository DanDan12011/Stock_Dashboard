import React, { useContext } from "react";
import { StockContext } from "./stockcontext";

const timeRanges = ["1D", "1W", "1M", "1Y"];

export default function TimePeriodSelector() {
  const { timePeriod, setTimePeriod } = useContext(StockContext);

  return (
    <div className="w-full bg-gray-100 ">
      <div className="flex justify-center gap-4">
        {timeRanges.map((range) => (
          <button
            key={range}
            onClick={() => setTimePeriod(range)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              timePeriod === range
                ? "bg-green-600 text-white"
                : "bg-gray-300 hover:bg-green-300 text-black"
            }`}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  );
}
