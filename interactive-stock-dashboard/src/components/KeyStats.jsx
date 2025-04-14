import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function KeyStats() {
  const { filteredData } = useContext(DataContext);

  if (!filteredData.length) return null;

  const latest = filteredData[filteredData.length - 1];

  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-100 p-6 rounded-lg shadow ">
      <h2 className="text-xl font-semibold mb-4">Key Statistics</h2>
      <div className="grid grid-cols-2 gap-4 text-lg">
        <div>
          <strong>Open:</strong> ${latest.open.toFixed(2)}
        </div>
        <div>
          <strong>Close:</strong> ${latest.close.toFixed(2)}
        </div>
        <div>
          <strong>High:</strong> ${latest.high.toFixed(2)}
        </div>
        <div>
          <strong>Low:</strong> ${latest.low.toFixed(2)}
        </div>
        <div>
          <strong>Volume:</strong> {Intl.NumberFormat().format(latest.volume)}
        </div>
      </div>
    </div>
  );
}
