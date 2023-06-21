import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import Logo from "./../../assets/logo.png";
const Header = ({ name, isLogin }) => {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
    window.location.reload();
  };
  return (
    <Navbar className="bg-body-tertiary p-0" sticky="top">
      <Container>
        <Navbar.Brand>
          <img src={Logo} alt="logo" style={{maxWidth: '200px'}}/>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {isLogin && (
            <>
              <Navbar.Text>
                <p className="text-decoration-none text-capitalize m-0 p-0">
                  {name}
                </p>
              </Navbar.Text>

              <button
                className="btn btn-danger ms-3"
                onClick={() => onLogout()}
              >
                Logout
              </button>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
