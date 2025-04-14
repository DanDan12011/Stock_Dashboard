import { createContext, useContext, useEffect, useState } from "react";
import stockData from "../data/stockData.json";
import { StockContext } from "../components/stockcontext";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const { selectedCompany, timePeriod } = useContext(StockContext);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const rawData = stockData[selectedCompany] || [];
    const allData = Array.isArray(rawData[0]) ? rawData[0] : rawData;

    const cleanedData = allData.map((d) => ({
      date: d.Date || d.date || "",

      open:
        d.Open !== undefined
          ? parseFloat((d.Open + "").replace("$", ""))
          : d.open !== undefined
          ? parseFloat((d.open + "").replace("$", ""))
          : null,

      close:
        d.Close !== undefined
          ? parseFloat((d.Close + "").replace("$", ""))
          : d["Close/Last"] !== undefined
          ? parseFloat((d["Close/Last"] + "").replace("$", ""))
          : d.close !== undefined
          ? parseFloat((d.close + "").replace("$", ""))
          : null,

      high:
        d.High !== undefined
          ? parseFloat((d.High + "").replace("$", ""))
          : d.high !== undefined
          ? parseFloat((d.high + "").replace("$", ""))
          : null,

      low:
        d.Low !== undefined
          ? parseFloat((d.Low + "").replace("$", ""))
          : d.low !== undefined
          ? parseFloat((d.low + "").replace("$", ""))
          : null,

      volume:
        d.Volume !== undefined
          ? parseInt((d.Volume + "").replace(/,/g, ""))
          : d.volume !== undefined
          ? parseInt((d.volume + "").replace(/,/g, ""))
          : null,
    }));

    const sortedData = [...cleanedData].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    const rangeMap = {
      "1D": 1,
      "1W": 5,
      "1M": 20,
      "1Y": 250,
    };

    const days = rangeMap[timePeriod] || 5;
    const filtered = sortedData.slice(-days);

    setFilteredData(filtered);
  }, [selectedCompany, timePeriod]);

  return (
    <DataContext.Provider value={{ filteredData }}>
      {children}
    </DataContext.Provider>
  );
}
