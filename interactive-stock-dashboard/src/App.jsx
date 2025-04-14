import CompanySelector from "./components/companyselector";
import TimePeriodSelector from "./components/TimePeriodSelector";
import ChartTypeSelector from "./components/ChartTypeSelector";
import ChartArea from "./components/ChartArea";
import KeyStats from "./components/KeyStats";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <CompanySelector />
      <TimePeriodSelector />
      <ChartTypeSelector />
      <ChartArea />
      <KeyStats />
      {/* Chart + stats will go here next */}
    </div>
  );
}

export default App;
