import React from "react";

const DateFilter = () => {
  return (
    <div className="flex items-center gap-4">
      <label className="text-sm text-gray-600">From:</label>
      <input
        type="date"
        className="border rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <label className="text-sm text-gray-600">To:</label>
      <input
        type="date"
        className="border rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 text-sm">
        Filter
      </button>
    </div>
  );
};

export default DateFilter;
