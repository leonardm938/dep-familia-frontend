import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
      <Container fluid  style={{display: "flex", justifyContent: "center", backgroundColor: "#F8F9FA", padding: "20px"}}>
            &copy;  2023 
            <a href="#login" className="text-decoration-none" style={{color: "black"}}> 
              Copyright: Family Department POC App
            </a>
      </Container>
  );
};

export default Footer;
