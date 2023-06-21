import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './auth.css'

const Login = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    setError('')
    e.preventDefault();
    if (true) {
      try {
        const response = await axios.post("/api/users/login", {
          email,
          password,
        });
        console.log(response);
        const { token, role, message } = response.data;
        // toast.success(message);
        localStorage.setItem("auth", JSON.stringify({ token, role }));
        console.log(role);
        if(role == 'local') {
          navigation("/municipality-adminstration-dashboard");
        }

        if(role == "central"){
          navigation("/central-adminstration-dashboard");
        }

        if(role == "regional"){
          navigation("/regional-adminstration-dashboard");
        }

    window.location.reload()

      } catch (error) {
        console.log("Login failed", error);
        setError(error.response.data.message);
      }
    } else {
      setError("Please Fill All Fields");
    }
  };


  return (
    <div className="form_container">
      <form>
        <h3 className="form_heading">Login </h3>
        <input
          type="email"
          placeholder="Email"
          className="input-field"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="privacy">
            <span><input type="checkbox" /> Remember me</span>
            <Link to="/signup">Signup?</Link>
        </div>
        <button className="_btn" onClick={handleSubmit}>LogIn</button>

        <p className="text-danger text-center py-3">{error}</p>

      </form>
    </div>
  );
}

export default Login;
