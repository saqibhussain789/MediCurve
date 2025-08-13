import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const AddEntry = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: "",
    weight: "",
    bloodPressure: "",
    bloodSugar: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem("token");

  try {
    const res = await axios.post(
      "http://localhost:5000/api/entries",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    toast.success("Entry added successfully!");

    setFormData({
      date: "",
      weight: "",
      bloodPressure: "",
      bloodSugar: "",
      notes: "",
    });
  } catch (error) {
    console.error(error);
    toast.error(error.response?.data?.message || "Failed to add entry");
  }
};

useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/"); 
  }
}, [navigate]);



  return (
    <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-md">
      <Toaster position="top-right" />
      <h2 className="text-2xl font-bold mb-6 text-center">Add Health Entry</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border border-gray-200 p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Weight (kg)</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
            className="w-full border border-gray-200 p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Blood Pressure</label>
          <input
            type="text"
            name="bloodPressure"
            value={formData.bloodPressure}
            onChange={handleChange}
            className="w-full border border-gray-200 p-2 rounded"
            placeholder="e.g. 120/80"
          />
        </div>

        <div>
          <label className="block font-medium">Blood Sugar (mg/dL)</label>
          <input
            type="number"
            name="bloodSugar"
            value={formData.bloodSugar}
            onChange={handleChange}
            className="w-full border border-gray-200 p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Notes</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full border border-gray-200 p-2 rounded"
            rows="3"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit Entry
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEntry;
