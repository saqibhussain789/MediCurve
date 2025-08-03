import React, { useEffect, useState } from "react";
import { getStats } from "../../services/api";
import { useSelector } from "react-redux";

const StatsSummary = () => {
  const { token } = useSelector((state) => state.auth);
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchStats = async () => {
    const token = localStorage.getItem("token");
    const res = await getStats(token); // ✅ pass token
    setStats(res.data);
    setLoading(false);
  };

  fetchStats();
}, []);
if (error) return <div>{error}</div>;

  if (!stats) {
    return <div>Loading stats...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-blue-100 p-4 rounded-xl shadow">
        <h4 className="text-sm font-medium text-gray-600">Total Entries</h4>
        <p className="text-2xl font-bold text-blue-700">{stats.totalEntries}</p>
      </div>
      <div className="bg-green-100 p-4 rounded-xl shadow">
        <h4 className="text-sm font-medium text-gray-600">Avg Weight</h4>
        <p className="text-2xl font-bold text-green-700">{stats.averageWeight} kg</p>
      </div>
      <div className="bg-red-100 p-4 rounded-xl shadow">
        <h4 className="text-sm font-medium text-gray-600">Avg Blood Sugar</h4>
        <p className="text-2xl font-bold text-red-700">{stats.averageBloodSugar} mg/dL</p>
      </div>
    </div>
  );
};

export default StatsSummary;
