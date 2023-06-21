import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Routes, Route, useParams } from "react-router-dom";
import axios from "axios";
const ReportForm = () => {
  let { id } = useParams();
  console.log(id);

  const [loading, setLoading] = useState(false);
  const [isFound, setIsFound] = useState(true);
  const [formData, setFormData] = useState(null);
  useEffect(() => {
    setLoading(true);
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/report//single-report/${id}`
        );
        console.log(response.data.data.data[0]);
        setFormData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
        setIsFound(false);
      }
    };
    fetchUserData();
  }, []);

  return (
    <Container className=" my-5" style={{ minHeight: "76vh" }}>
      {loading ? (
        <div >
          <h1>Loading.....</h1>
        </div>
      ) : (

        isFound?
        <div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: "2rem",
              gap: "2rem",
            }}
          >
            <p className="h6">
              Region:
              <input
                type="text"
                value={formData?.region}
                readOnly
                style={{ border: 0, outline: 0 }}
              />
            </p>
            <p className="h6">
              Municipality :
              <input
                type="text"
                value={formData?.municipality}
                readOnly
                style={{ border: 0, outline: 0 }}
              />
            </p>
            <p className="h6">
              Month :{" "}
              <input
                type="text"
                value={formData?.month}
                readOnly
                style={{ border: 0, outline: 0 }}
              />
            </p>
            <p className="h6">
              Year :{" "}
              <input
                type="text"
                value={formData?.year}
                readOnly
                style={{ border: 0, outline: 0 }}
              />
            </p>
          </div>

          <Table responsive className="table-bordered table-light  mt-3">
            <thead>
              <tr className="thead">
                <td style={{ width: "300px" }}>I. Movimiento de referidosre</td>
                <td>Familias</td>
                <td>Total niños</td>
                <td>Negligencia</td>
                <td>Abuso Sexual</td>
                <td>Explotación</td>
                <td>Físico</td>
                <td>Emocional</td>
                <td>Múltiple</td>
                <td>Institucional</td>
              </tr>
            </thead>
            <tbody>
              {formData?.data[0]["I. Movimiento de referidosre"].map(
                (v, rowIndex) => {
                  return (
                    <tr key={rowIndex}>
                      <td>{v.rowName}</td>
                      <td>
                        <input
                          type="number"
                          value={v.familias || ""}
                          readOnly
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          value={v.totalNinos || ""}
                          readOnly
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          value={v.negligencia || ""}
                          readOnly
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          value={v.abusoSexual || ""}
                          readOnly
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          value={v.explotacion || ""}
                          readOnly
                        />
                      </td>
                      <td>
                        <input type="number" value={v.fisico || ""} readOnly />
                      </td>

                      <td>
                        <input
                          type="number"
                          value={v.emocional || ""}
                          readOnly
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          value={v.multiple || ""}
                          readOnly
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          value={v.institucional || ""}
                          readOnly
                        />
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </Table>

          <Table responsive className="table-bordered table-light  mt-3">
            <thead>
              <tr className="thead">
                <td style={{ width: "300px" }}>II. Movimiento de casos</td>
                <td>Familias</td>
                <td>Total niños</td>
                <td>Negligencia</td>
                <td>Abuso Sexual</td>
                <td>Explotación</td>
                <td>Físico</td>
                <td>Emocional</td>
                <td>Múltiple</td>
                <td>Institucional</td>
              </tr>
            </thead>
            <tbody>
              {formData?.data[0]["II. Movimiento de casos"].map(
                (v, rowIndex) => {
                  return (
                    <tr key={rowIndex}>
                      <td>{v.rowName}</td>
                      <td>
                        <input
                          type="number"
                          value={v.familias || ""}
                          readOnly
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          value={v.totalNinos || ""}
                          readOnly
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          value={v.negligencia || ""}
                          readOnly
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          value={v.abusoSexual || ""}
                          readOnly
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          value={v.explotacion || ""}
                          readOnly
                        />
                      </td>
                      <td>
                        <input type="number" value={v.fisico || ""} readOnly />
                      </td>

                      <td>
                        <input
                          type="number"
                          value={v.emocional || ""}
                          readOnly
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          value={v.multiple || ""}
                          readOnly
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          value={v.institucional || ""}
                          readOnly
                        />
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </Table>

          <Table responsive className="table-bordered table-light  mt-3">
            <thead>
              <tr className="thead">
                <td style={{ width: "300px" }}>III. Movimiento de custodias</td>
                <td>Ley 75</td>
                <td>Ley 140</td>
                <td>Otros</td>
              </tr>
            </thead>
            <tbody>
              {formData?.data[0]["III. Movimiento de custodias"].map(
                (v, rowIndex) => {
                  return (
                    <tr key={rowIndex}>
                      <td>{v.rowName}</td>
                      <td>
                        <input type="number" value={v.ley75 || ""} readOnly />
                      </td>
                      <td>
                        <input type="number" value={v.ley140 || ""} readOnly />
                      </td>
                      <td>
                        <input type="number" value={v.otros || ""} readOnly />
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </Table>

          <Table
            responsive
            className="table-bordered table-light  mt-3"
            style={{ width: "50%" }}
          >
            <thead>
              <tr className="thead">
                <td style={{ width: "400px" }}>IV. Labor Realizada</td>
                <td>Total</td>
              </tr>
            </thead>
            <tbody>
              {formData?.data[0]["IV. Labor Realizada"].map((v, rowIndex) => {
                return (
                  <tr key={rowIndex}>
                    <td>{v.rowName}</td>
                    <td>
                      <input type="number" value={v.total || ""} readOnly />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div> :
        <div>
            <h1>No Record Found</h1>
        </div>
      )}
    </Container>
  );
};

export default ReportForm;
