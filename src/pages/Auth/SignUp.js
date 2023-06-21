import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./auth.css";

const SignUp = () => {
  const navigation = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (true) {
      try {
        const response = await axios.post("/api/users/register", {
          username,
          email,
          password,
        });
        console.log(response);
        const { token, role, message } = response.data;
        // toast.success(message);
        // localStorage.setItem("auth", JSON.stringify({ token, role }));
        navigation("/");
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
        <h3 className="form_heading">Signup </h3>
        <input
          type="text"
          placeholder="Username"
          className="input-field"
          onChange={(e) => setUsername(e.target.value)}
        />
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
          <span>
            <input type="checkbox" /> Remember me
          </span>
          <Link to="/">Login?</Link>
        </div>
        <button className="_btn" onClick={handleSubmit}>
          Signup
        </button>

        <p className="text-danger text-center py-3">{error}</p>
      </form>
    </div>
  );
};

export default SignUp;
