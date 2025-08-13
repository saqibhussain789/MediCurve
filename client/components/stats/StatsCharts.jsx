import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { useNavigate } from "react-router-dom";

const lineData = [
  { date: "Mon", weight: 67 },
  { date: "Tue", weight: 68 },
  { date: "Wed", weight: 68.5 },
  { date: "Thu", weight: 68.2 },
  { date: "Fri", weight: 68 },
];

const barData = [
  { date: "Mon", sugar: 108 },
  { date: "Tue", sugar: 112 },
  { date: "Wed", sugar: 105 },
  { date: "Thu", sugar: 109 },
  { date: "Fri", sugar: 111 },
];

const pieData = [
  { name: "Entries with Sugar", value: 30 },
  { name: "Without Sugar", value: 20 },
];

const COLORS = ["#4f46e5", "#f59e0b"];

const StatsCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Line Chart */}
      <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
        <h4 className="text-lg font-semibold mb-2">Weight Trend</h4>
        <LineChart width={300} height={200} data={lineData}>
          <Line type="monotone" dataKey="weight" stroke="#4f46e5" strokeWidth={2} />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" />
          <YAxis unit=" kg" />
          <Tooltip />
        </LineChart>
      </div>

      {/* Bar Chart */}
      <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
        <h4 className="text-lg font-semibold mb-2">Blood Sugar (mg/dL)</h4>
        <BarChart width={300} height={200} data={barData}>
          <Bar dataKey="sugar" fill="#f59e0b" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
        </BarChart>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
        <h4 className="text-lg font-semibold mb-2">Entry Distribution</h4>
        <PieChart width={300} height={200}>
          <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={70}>
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default StatsCharts;
