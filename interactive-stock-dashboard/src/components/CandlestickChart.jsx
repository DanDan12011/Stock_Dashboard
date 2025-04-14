import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function CandlestickChart() {
  const { filteredData } = useContext(DataContext);
  if (!filteredData.length) return null;

  const width = 600;
  const height = 300;
  const padding = 40;
  const candleWidth = 10;

  const max = Math.max(...filteredData.map((d) => d.high));
  const min = Math.min(...filteredData.map((d) => d.low));
  const dates = filteredData.map((d) => d.date);

  const scaleY = (price) =>
    height - ((price - min) / (max - min)) * (height - 2 * padding) - padding;

  const scaleX = (i) =>
    filteredData.length === 1
      ? width / 2
      : (i / (filteredData.length - 1)) * (width - 2 * padding) + padding;

  const yTicks = Array.from(
    { length: 5 },
    (_, i) => min + ((max - min) * i) / 4
  ).reverse();

  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-2">Candlestick Chart</h2>
      <svg
        width={width}
        height={height}
        className="border border-gray-300 bg-white"
      >
        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={height - padding}
          stroke="gray"
        />
        <line
          x1={padding}
          y1={height - padding}
          x2={width - padding}
          y2={height - padding}
          stroke="gray"
        />

        {yTicks.map((v, i) => {
          const y = scaleY(v);
          return (
            <g key={i}>
              <line x1={padding - 5} y1={y} x2={padding} y2={y} stroke="gray" />
              <text x={padding - 10} y={y + 4} textAnchor="end" fontSize="10">
                ${v.toFixed(2)}
              </text>
            </g>
          );
        })}

        {[0, Math.floor(dates.length / 2), dates.length - 1].map((i) => (
          <text
            key={i}
            x={scaleX(i)}
            y={height - padding + 15}
            textAnchor="middle"
            fontSize="10"
          >
            {dates[i]
              ? new Date(dates[i]).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              : ""}
          </text>
        ))}

        {filteredData.map((d, i) => {
          const x = scaleX(i);
          const yHigh = scaleY(d.high);
          const yLow = scaleY(d.low);
          const yOpen = scaleY(d.open);
          const yClose = scaleY(d.close);
          const isGain = d.close >= d.open;
          const color = isGain ? "green" : "red";

          return (
            <g key={i}>
              <line x1={x} y1={yHigh} x2={x} y2={yLow} stroke={color} />
              <rect
                x={x - candleWidth / 2}
                y={Math.min(yOpen, yClose)}
                width={candleWidth}
                height={Math.max(Math.abs(yClose - yOpen), 1)}
                fill={color}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
