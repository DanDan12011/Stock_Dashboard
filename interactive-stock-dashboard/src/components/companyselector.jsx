import React, { useContext } from "react";
import { StockContext } from "./stockcontext";

const companies = ["AAPL", "GOOGL", "MSFT"];

export default function CompanySelector() {
  const { selectedCompany, setSelectedCompany } = useContext(StockContext);

  return (
    <div className="w-full py-6 bg-gray-100">
      <div className="flex justify-center gap-6">
        {companies.map((company) => (
          <button
            key={company}
            onClick={() => setSelectedCompany(company)}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              selectedCompany === company
                ? "bg-green-600 text-white"
                : "bg-gray-300 text-black hover:bg-green-300"
            }`}
          >
            {company}
          </button>
        ))}
      </div>
    </div>
  );
}
