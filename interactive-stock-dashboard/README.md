# Interactive Stock Dashboard

This project is a React-based interactive stock dashboard that visualizes historical data for AAPL, GOOGL, and MSFT. Users can switch between companies, time ranges (1D, 1W, 1M, 1Y), and chart types (line, candlestick, area). It uses SVG for all visualizations and Tailwind CSS for styling.

## How to Run the Project

1. Extract the zip file.

2. Open a terminal in the extracted folder.

3. Install dependencies: "npm install"

4. Start the development server: "npm run dev"

5. Open your browser and navigate to: "http://localhost:5173" (or whichever port pops up on your terminal)

## Technologies Used

- React + Vite
- Tailwind CSS
- React Context API
- SVG (no external charting libraries)
- Local JSON file for stock data (`src/data/stockData.json`)

## Project Structure

- `src/components/`: Reusable components (charts, selectors, stats)
- `src/context/`: Context providers for shared state
- `src/data/`: JSON file with historical stock data

No external APIs are used — all data is loaded locally.
