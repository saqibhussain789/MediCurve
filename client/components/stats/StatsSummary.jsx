import React from "react";

const StatsSummary = () => {
  const stats = [
    { label: "Avg Weight", value: "68.4 kg" },
    { label: "Avg Blood Sugar", value: "110 mg/dL" },
    { label: "Avg Blood Pressure", value: "120/80" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((item, idx) => (
        <div
          key={idx}
          className="bg-white p-4 rounded-xl shadow-md text-center border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-600">{item.label}</h3>
          <p className="text-2xl font-bold text-indigo-600">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSummary;
