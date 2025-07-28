import React from "react";
import StatsSummary from "../components/stats/StatsSummary";
import StatsCharts from "../components/stats/StatsCharts";
import DateFilter from "../components/stats/DateFilter";
import Milestones from "../components/stats/Milestones";

const Stats = () => {
  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold text-gray-800">Health Stats Overview</h2>
      <DateFilter />
      <StatsSummary />
      <StatsCharts />
      <Milestones />
    </div>
  );
};

export default Stats;
