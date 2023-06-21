import React, {useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import {AiOutlineCaretDown} from 'react-icons/ai'
import {Link} from "react-router-dom"
import axios from "axios"
const MADashboard = () => {
  const [data, setData] = useState([]);

useEffect(() => {
const getReports =async () => {
  try {
    const response = await axios.get("api/report/get");
    setData(response.data.data);
  } catch (error) {
    console.log("Login failed", error);
  }
}
getReports()
}, [])

  return (
    <Container className="my-5" style={{minHeight:"75vh"}}>
        <p className="p-0 m-0">Region: <span>All</span></p> 
        <p className="p-0 m-0 pb-3">Municipality:  <span>All</span> </p>
      <Link to='/reportform'
        style={{
          width: "200px",
          backgroundColor: "#008fb3",
          borderRadius: "0", 
          marginTop: "-1px",
          padding: '8px',
          color: '#fff',
          textDecoration: 'none'
        }}>
         Create New Report
      </Link>
      <Table
        responsive="md"
        className="table table-light table-hover my-4 container-md  table-bordered"
      >
        <thead>
          <tr >
          <th >Filter <AiOutlineCaretDown style={{float: "right"}} /></th>
          <th >Filter <AiOutlineCaretDown style={{float: "right"}} /></th>
          <th >Filter <AiOutlineCaretDown style={{float: "right"}} /></th>
          <th >Filter <AiOutlineCaretDown style={{float: "right"}} /></th>
          <th >Filter <AiOutlineCaretDown style={{float: "right"}} /></th>
          </tr>
          <tr className="table-dark" >
            <td >Action</td>
            <td>Year</td>
            <td>Month</td>
            <td>Created By</td>
            <td>Approval Status</td>
          </tr>
        </thead>
        <tbody>
         {
          data.map((v,i)=>{
            return <tr key={i}>
            <td>
            <Link to={`/view/${v._id}`} className="view-link">
                    [View]
                  </Link>
            <button className="btn p-0 m-0">Edit</button></td>
            <td>{v.year}</td>
            <td>{v.month}</td>
            <td>{v.creator.username}</td>
            <td className="text-capitalize">{v.status}</td>
          </tr>
          })
        }
        </tbody>
      </Table>
    </Container>
  );
};

export default MADashboard;
