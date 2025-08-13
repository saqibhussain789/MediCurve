import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getEntries } from "../services/api";
import { toast } from "react-toastify";

const History = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const fetchEntries = async () => {
    try {
      const response = await getEntries(token);
      setEntries(response.data);
    } catch (error) {
      toast.error("Failed to fetch entries");
      console.error("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const columns = [
    {
      name: "Date",
      selector: (row) => row.date.split("T")[0],
      sortable: true,
    },
    {
      name: "Weight (kg)",
      selector: (row) => row.weight,
      sortable: true,
    },
    {
      name: "Blood Pressure",
      selector: (row) => row.bloodPressure,
    },
    {
      name: "Blood Sugar (mg/dL)",
      selector: (row) => row.bloodSugar,
    },
    {
      name: "Notes",
      selector: (row) => row.notes || "—",
      wrap: true,
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#006e94",
        color: "#ffffff",
        fontWeight: "600",
        fontSize: "14px",
      },
    },
    rows: {
      style: {
        fontSize: "14px",
        minHeight: "48px",
      },
      highlightOnHoverStyle: {
        backgroundColor: "#e5f3ff",
        borderBottomColor: "#FFFFFF",
        outline: "1px solid #d1d5db",
      },
    },
    pagination: {
      style: {
        borderTop: "1px solid #d1d5db",
        paddingTop: "10px",
      },
    },
  };

  return (
    <div className="p-4 md:p-10">
      <h2 className="text-2xl font-bold mb-4">Entry History</h2>
      <DataTable
        columns={columns}
        data={entries}
        pagination
        highlightOnHover
        striped
        customStyles={customStyles}
      />
    </div>
  );
};

export default History;
