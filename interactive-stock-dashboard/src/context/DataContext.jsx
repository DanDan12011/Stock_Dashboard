import { createContext, useContext, useEffect, useState } from "react";
import stockData from "../data/stockData.json";
import { StockContext } from "../components/stockcontext"; // update if path differs

export const DataContext = createContext();

export function DataProvider({ children }) {
  const { selectedCompany, timePeriod } = useContext(StockContext);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const allData = stockData[selectedCompany] || [];

    // Reverse data if needed (depends on format)
    const sortedData = [...allData].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    // How many days to include
    const rangeMap = {
      "1D": 1,
      "1W": 5,
      "1M": 20,
      "1Y": 250,
    };

    const days = rangeMap[timePeriod] || 5;

    // Get the last `days` worth of data
    const filtered = sortedData.slice(-days);

    setFilteredData(filtered);
  }, [selectedCompany, timePeriod]);

  return (
    <DataContext.Provider value={{ filteredData }}>
      {children}
    </DataContext.Provider>
  );
}
