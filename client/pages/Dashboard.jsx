import React, { useEffect, useState } from "react";
import { getEntries } from "../services/api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [entries, setEntries] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/"); // Redirect to login page if no token
    }
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getEntries(token);
        const sorted = res.data.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        setEntries(sorted);
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    };
    fetchData();
  }, [token]);

  const processedEntries = entries.map((entry) => {
    const [systolic, diastolic] = entry.bloodPressure
      ?.split("/")
      .map(Number) || [0, 0];
    return {
      ...entry,
      systolic,
      diastolic,
    };
  });

  const average = (key) =>
    Math.round(
      entries.reduce((a, b) => a + Number(b[key]), 0) / entries.length || 0
    );

  const avgBP = (() => {
    const bp = entries.map((e) => e.bloodPressure.split("/").map(Number));
    const sysAvg = Math.round(bp.reduce((a, b) => a + b[0], 0) / bp.length || 0);
    const diaAvg = Math.round(bp.reduce((a, b) => a + b[1], 0) / bp.length || 0);
    return `${sysAvg}/${diaAvg}`;
  })();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard Analytics</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded shadow text-center">
          <h3 className="text-sm text-gray-600">Average Weight</h3>
          <p className="text-xl font-bold">{average("weight")} kg</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow text-center">
          <h3 className="text-sm text-gray-600">Average Blood Sugar</h3>
          <p className="text-xl font-bold">{average("bloodSugar")} mg/dL</p>
        </div>
        <div className="bg-red-100 p-4 rounded shadow text-center">
          <h3 className="text-sm text-gray-600">Average Blood Pressure</h3>
          <p className="text-xl font-bold">{avgBP}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weight Chart */}
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold mb-2">Weight Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={entries}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="weight" stroke="#3b82f6" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Blood Sugar Chart */}
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold mb-2">Blood Sugar Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={entries}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="bloodSugar" stroke="#10b981" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Blood Pressure Trend */}
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold mb-2">Blood Pressure Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={processedEntries}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="systolic" stroke="#ef4444" name="Systolic" />
              <Line type="monotone" dataKey="diastolic" stroke="#6366f1" name="Diastolic" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Entries Count */}
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold mb-2">Entries per Day</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={entries}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="weight" fill="#6366f1" name="Weight (proxy for count)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
