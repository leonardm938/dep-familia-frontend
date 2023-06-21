import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MADashboard from "./pages/MADashboard";
import ReportForm from "./pages/ReportForm";
import CADashboard from "./pages/CADashboard";
import RADashboard from "./pages/RADashboard";
import Unauthorized from "./pages/unauthorized";
import PrivateRoute from "./config/PrivateRoute";
import ViewReport from "./pages/ViewReport"
import axios from "axios"
import "./App.css";

function App() {
const [name, setName] =useState("");
const [isLogin, setIsLogin] =useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const value = localStorage.getItem('auth'); // Get the access token from storage
        let a = JSON.parse(value)
        setIsLogin(a)
        const response = await axios.get('http://localhost:8080/api/users/me', {
          headers: { Authorization: `Bearer ${a.token}`},
        });
        console.log(response.data.user.username)
        setName(response.data.user.username);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, [])
  
  return (
    <Router>
      <Header name={name} isLogin={isLogin}/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<PrivateRoute allowedRoles={["local"]} />}>
          <Route exact path="/reportform" element={<ReportForm />} />
        </Route>
        <Route element={<PrivateRoute allowedRoles={["local"]} />}>
          <Route exact path="/municipality-adminstration-dashboard" element={<MADashboard />} />
        </Route>
      
   

        <Route element={<PrivateRoute allowedRoles={["regional"]} />}>
          <Route exact path="/regional-adminstration-dashboard" element={<RADashboard />} />
        </Route>
      

        <Route element={<PrivateRoute allowedRoles={["central"]} />}>
          <Route exact path="/central-adminstration-dashboard" element={<CADashboard />} />
        </Route>
      
        <Route element={<PrivateRoute allowedRoles={["local","regional","central"]} />}>
          <Route exact path="/view/:id" element={<ViewReport />} />
        </Route>
        
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
