import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { StockProvider } from "./components/stockcontext";
import { DataProvider } from "./context/DataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StockProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </StockProvider>
  </React.StrictMode>
);
