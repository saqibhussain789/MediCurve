import React from "react";
import { useNavigate } from "react-router-dom";

const Milestones = () => {


  const navigate = useNavigate();
  useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/"); 
  }
}, [navigate]);

  const milestones = [
    { title: "First Entry", date: "2024-01-15" },
    { title: "Lost 2 kg", date: "2024-03-22" },
    { title: "Maintained BP for 30 Days", date: "2024-05-10" },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
      <h4 className="text-lg font-semibold mb-4">Health Milestones</h4>
      <ul className="space-y-2">
        {milestones.map((item, idx) => (
          <li key={idx} className="flex justify-between text-sm">
            <span className="text-gray-700">{item.title}</span>
            <span className="text-gray-500">{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Milestones;
