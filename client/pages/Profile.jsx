import React, { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../services/api";

const Profile = ({ token }) => {
  const [profile, setProfile] = useState({});
  const [form, setForm] = useState({});
  const [editing, setEditing] = useState(false);

  useEffect(() => {
  getProfile(token)
    .then(data => {
      console.log("Profile data from backend:", data);
      setProfile(data);
    })
    .catch(err => console.error("Error fetching profile:", err));
}, [token]);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setForm(profile);
    setEditing(true);
  };

  const handleSave = async () => {
    const updated = await updateProfile(token, form);
    setProfile(updated);
    setEditing(false);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        User Profile
      </h2>

      {!editing ? (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <p>
              <span className="font-semibold text-gray-700">Name:</span>{" "}
              {profile.name}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Email:</span>{" "}
              {profile.email}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Age:</span>{" "}
              {profile.age}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Gender:</span>{" "}
              {profile.gender}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Phone:</span>{" "}
              {profile.phone}
            </p>
          </div>

          <div className="text-center mt-6">
            <button
              onClick={handleEdit}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
            >
              Edit Profile
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <input
            name="name"
            value={form.name || ""}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
          />
          <input
            name="age"
            value={form.age || ""}
            onChange={handleChange}
            placeholder="Age"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
          />
          <input
            name="gender"
            value={form.gender || ""}
            onChange={handleChange}
            placeholder="Gender"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
          />
          <input
            name="phone"
            value={form.phone || ""}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
          />

          <div className="flex justify-center space-x-4 mt-6">
            <button
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition"
            >
              Save
            </button>
            <button
              onClick={() => setEditing(false)}
              className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-md transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
