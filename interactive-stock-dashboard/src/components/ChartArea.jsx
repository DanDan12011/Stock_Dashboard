import React, { useContext } from "react";
import { StockContext } from "../components/stockcontext";
import LineChart from "./LineChart";
import AreaChart from "./AreaChart";
import CandlestickChart from "./CandlestickChart";

export default function ChartArea() {
  const { chartType } = useContext(StockContext);

  return (
    <div className="p-6">
      {chartType === "Line" && <LineChart />}
      {chartType === "Area" && <AreaChart />}
      {chartType === "Candlestick" && <CandlestickChart />}
    </div>
  );
}
