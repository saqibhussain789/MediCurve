import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Layout from '../components/layout/Layout';
import Dashboard from '../pages/Dashboard';
import AddEntry from "../pages/AddEntry";
import History from "../pages/History";
import Stats from "../pages/Stats";
import Profile from "../pages/Profile";

function App() {
  return (
    <>
    <ToastContainer position="top-right" />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-entry" element={<AddEntry />} />
        <Route path="/history" element={<History />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
