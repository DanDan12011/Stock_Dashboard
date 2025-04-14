import { createContext, useState } from "react";

export const StockContext = createContext();

export function StockProvider({ children }) {
  const [selectedCompany, setSelectedCompany] = useState("AAPL");
  const [timePeriod, setTimePeriod] = useState("1W");
  const [chartType, setChartType] = useState("Line"); // default

  return (
    <StockContext.Provider
      value={{
        selectedCompany,
        setSelectedCompany,
        timePeriod,
        setTimePeriod,
        chartType,
        setChartType,
      }}
    >
      {children}
    </StockContext.Provider>
  );
}
