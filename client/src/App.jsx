import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Layout from '../components/layout/Layout';
import Dashboard from '../pages/Dashboard';
import AddEntry from "../pages/AddEntry";
import History from "../pages/History";
import StatsSummary from '../components/stats/StatsSummary';
import Profile from "../pages/Profile";
import PrivateRoute from '../components/PrivateRoutes'

function App() {
  return (
    <>
      <ToastContainer position="top-right" />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-entry" element={<AddEntry />} />
          <Route path="/history" element={<History />} />
          <Route path="/stats" element={<StatsSummary />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
