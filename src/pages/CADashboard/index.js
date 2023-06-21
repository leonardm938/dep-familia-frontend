import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { Table } from "react-bootstrap";
import { AiOutlineCaretDown } from "react-icons/ai";
import axios from "axios";
import {Link} from "react-router-dom"
const CADashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getReports = async () => {
      try {
        const response = await axios.get("api/report/get");
        setData(response.data.data);
      } catch (error) {
        console.log("Login failed", error);
      }
    };
    getReports();
  }, []);
  return (
    <Container className=" my-5" style={{minHeight:'76vh'}}>
      <p>
        <b>Puerto Rico Aggregated Report :</b> <span>ABCD</span>
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "-1rem",
          gap: "1rem",
        }}
      >
        <Dropdown>
          <Dropdown.Toggle
            style={{
              backgroundColor: "white",
              color: "black",
              width: "160px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Region
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>12344343</Dropdown.Item>
            <Dropdown.Item>ABCDEF</Dropdown.Item>
            <Dropdown.Item>Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            style={{
              backgroundColor: "white",
              color: "black",
              width: "160px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Month
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>May</Dropdown.Item>
            <Dropdown.Item>June</Dropdown.Item>
            <Dropdown.Item>July</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            style={{
              backgroundColor: "white",
              color: "black",
              width: "160px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Year
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>2023</Dropdown.Item>
            <Dropdown.Item>2024</Dropdown.Item>
            <Dropdown.Item>2025</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Table
        responsive="md"
        className="table table-light table-hover my-4 container-md  table-bordered"
      >
        <thead>
          <tr>
            <th>
              Filter <AiOutlineCaretDown style={{ float: "right" }} />
            </th>
            <th>
              Filter <AiOutlineCaretDown style={{ float: "right" }} />
            </th>
            <th>
              Filter <AiOutlineCaretDown style={{ float: "right" }} />
            </th>
          </tr>
          <tr className="table-dark">
            <td>Action</td>
            <td>Year</td>
            <td>Month</td>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={i}>
                <td>
                <Link to={`/view/${v._id}`} className="view-link">
                    [View]
                  </Link>
                [PDF]
                </td>
                <td>{v.year}</td>
                <td>{v.month}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* -----------------------second table  */}

      <p>
        <b>Region Aggregated Report :</b> <span>ABCD</span>
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "-1rem",
          gap: "1rem",
        }}
      >
        <Dropdown>
          <Dropdown.Toggle
            style={{
              backgroundColor: "white",
              color: "black",
              width: "160px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Region
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>12344343</Dropdown.Item>
            <Dropdown.Item>ABCDEF</Dropdown.Item>
            <Dropdown.Item>Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            style={{
              backgroundColor: "white",
              color: "black",
              width: "160px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Month
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>May</Dropdown.Item>
            <Dropdown.Item>June</Dropdown.Item>
            <Dropdown.Item>July</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            style={{
              backgroundColor: "white",
              color: "black",
              width: "160px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Year
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>2023</Dropdown.Item>
            <Dropdown.Item>2024</Dropdown.Item>
            <Dropdown.Item>2025</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Table
        responsive="md"
        className="table table-light table-hover my-4 container-md  table-bordered"
      >
        <thead>
          <tr>
            <th>
              Filter <AiOutlineCaretDown style={{ float: "right" }} />
            </th>
            <th>
              Filter <AiOutlineCaretDown style={{ float: "right" }} />
            </th>
            <th>
              Filter <AiOutlineCaretDown style={{ float: "right" }} />
            </th>
            <th>
              Filter <AiOutlineCaretDown style={{ float: "right" }} />
            </th>
          </tr>
          <tr className="table-dark">
            <td>Action</td>
            <td>Region</td>
            <td>Year</td>
            <td>Month</td>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={i}>
                <td>  <Link to={`/view/${v._id}`} className="view-link">
                    [View]
                  </Link> [PDF]</td>
                <td>{v.region}</td>
                <td>{v.year}</td>
                <td>{v.month}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* ----------------------- third table  */}

      <p>
        <b>Municipality Reports :</b> <span>ABCD</span>
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "-1rem",
          gap: "1rem",
        }}
      >
        <Dropdown>
          <Dropdown.Toggle
            style={{
              backgroundColor: "white",
              color: "black",
              width: "160px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Municipality
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>12344343</Dropdown.Item>
            <Dropdown.Item>ABCDEF</Dropdown.Item>
            <Dropdown.Item>Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            style={{
              backgroundColor: "white",
              color: "black",
              width: "160px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Month
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>May</Dropdown.Item>
            <Dropdown.Item>June</Dropdown.Item>
            <Dropdown.Item>July</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            style={{
              backgroundColor: "white",
              color: "black",
              width: "160px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Year
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>2023</Dropdown.Item>
            <Dropdown.Item>2024</Dropdown.Item>
            <Dropdown.Item>2025</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Table
        responsive="md"
        className="table table-light table-hover my-4 container-md  table-bordered"
      >
        <thead>
          <tr>
            <th>
              Filter <AiOutlineCaretDown style={{ float: "right" }} />
            </th>
            <th>
              Filter <AiOutlineCaretDown style={{ float: "right" }} />
            </th>
            <th>
              Filter <AiOutlineCaretDown style={{ float: "right" }} />
            </th>
            <th>
              Filter <AiOutlineCaretDown style={{ float: "right" }} />
            </th>
            <th>
              Filter <AiOutlineCaretDown style={{ float: "right" }} />
            </th>
            <th>
              Filter <AiOutlineCaretDown style={{ float: "right" }} />
            </th>
            <th>
              Filter <AiOutlineCaretDown style={{ float: "right" }} />
            </th>
          </tr>
          <tr className="table-dark">
            <td>Action</td>
            <td>Municipality</td>
            <td>Year</td>
            <td>Month</td>
            <td>Created By</td>
            <td>Status</td>
            <td>Approved By</td>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={i}>
                <td>
                  <button className="btn p-0 m-0">[Edit] [PDF]</button>
                </td>
                <td>{v.municipality}</td>
                <td>{v.year}</td>
                <td>{v.month}</td>
                <td>{v.creator.username}</td>
                <td className="text-capitalize">{v.status}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default CADashboard;
