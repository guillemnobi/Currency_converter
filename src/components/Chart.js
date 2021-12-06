import { Bar } from "react-chartjs-2";

const Chart = ({ chartData }) => {
  return (
    <div className="chart">
      <Bar data={{ labels: ["red", "blue"] }} height={400} width={600} />
    </div>
  );
};

export default Chart;
