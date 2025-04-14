import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function AreaChart() {
  const { filteredData } = useContext(DataContext);
  if (!filteredData.length) return null;

  const width = 600;
  const height = 300;
  const padding = 40;

  const prices = filteredData.map((d) => d.close);
  const dates = filteredData.map((d) => d.date);
  const rawMax = Math.max(...prices);
  const rawMin = Math.min(...prices);
  const buffer = rawMax === rawMin ? 1 : 0;

  const max = rawMax + buffer;
  const min = rawMin - buffer;

  const scaleY = (price) =>
    height - ((price - min) / (max - min)) * (height - 2 * padding) - padding;

  const scaleX = (i) =>
    prices.length === 1
      ? width / 2
      : (i / (prices.length - 1)) * (width - 2 * padding) + padding;

  const points = prices.map((p, i) => [scaleX(i), scaleY(p)]);

  const yTicks = Array.from(
    { length: 5 },
    (_, i) => min + ((max - min) * i) / 4
  ).reverse();

  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-2 ">Area Chart</h2>
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
            {dates[i].slice(5)}
          </text>
        ))}

        {prices.length === 1 ? (
          <circle cx={scaleX(0)} cy={scaleY(prices[0])} r={4} fill="green" />
        ) : (
          <path
            d={[
              `M ${points[0][0]} ${height - padding}`,
              ...points.map(([x, y]) => `L ${x} ${y}`),
              `L ${points[points.length - 1][0]} ${height - padding}`,
              "Z",
            ].join(" ")}
            fill="rgba(116, 235, 105, 0.4)"
            stroke="green"
            strokeWidth="2"
          />
        )}
      </svg>
    </div>
  );
}
