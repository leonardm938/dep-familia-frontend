import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const ReportForm = () => {
  const navigation = useNavigate()
  var today = new Date();
  var mon = today.toLocaleString("default", { month: "long" });
  const [showConfirm, setShowConfirm] = useState(false);
  const [region, setRegion] = useState("");
  const [munciplity, setMunciplity] = useState("");
  const [month, setMonth] = useState(mon);
  const [year, setYear] = useState(String(today.getFullYear()));

  const [tableData, setTableData] = useState([
    {
      rowName: "A. Pendientes al iniciar el mes",
      familias: "",
      totalNinos: "",
      negligencia: "",
      abusoSexual: "",
      explotacion: "",
      fisico: "",
      emocional: "",
      multiple: "",
      institucional: "",
    },
    {
      rowName: "B. Recibidas en el mes",
      familias: "",
      totalNinos: "",
      negligencia: "",
      abusoSexual: "",
      explotacion: "",
      fisico: "",
      emocional: "",
      multiple: "",
      institucional: "",
    },
    {
      rowName: "C. Total (a+b)",
      familias: "",
      totalNinos: "",
      negligencia: "",
      abusoSexual: "",
      explotacion: "",
      fisico: "",
      emocional: "",
      multiple: "",
      institucional: "",
    },
    {
      rowName: "D. Atendidas en el mes",
      familias: "",
      totalNinos: "",
      negligencia: "",
      abusoSexual: "",
      explotacion: "",
      fisico: "",
      emocional: "",
      multiple: "",
      institucional: "",
    },
    {
      rowName: "1. Con fundamento",
      familias: "",
      totalNinos: "",
      negligencia: "",
      abusoSexual: "",
      explotacion: "",
      fisico: "",
      emocional: "",
      multiple: "",
      institucional: "",
    },
    {
      rowName: "2. Sin fundamento",
      familias: "",
      totalNinos: "",
      negligencia: "",
      abusoSexual: "",
      explotacion: "",
      fisico: "",
      emocional: "",
      multiple: "",
      institucional: "",
    },
    {
      rowName: "1. Otra acción",
      familias: "",
      totalNinos: "",
      negligencia: "",
      abusoSexual: "",
      explotacion: "",
      fisico: "",
      emocional: "",
      multiple: "",
      institucional: "",
    },
    {
      rowName: "E. Pendientes fin de mes (c-d)",
      familias: "",
      totalNinos: "",
      negligencia: "",
      abusoSexual: "",
      explotacion: "",
      fisico: "",
      emocional: "",
      multiple: "",
      institucional: "",
    },
    {
      rowName: "1. Asignados",
      familias: "",
      totalNinos: "",
      negligencia: "",
      abusoSexual: "",
      explotacion: "",
      fisico: "",
      emocional: "",
      multiple: "",
      institucional: "",
    },
    {
      rowName: "2. Sin asignar",
      familias: "",
      totalNinos: "",
      negligencia: "",
      abusoSexual: "",
      explotacion: "",
      fisico: "",
      emocional: "",
      multiple: "",
      institucional: "",
    },
  ]);

  const [tableData1, setTableData1] = useState([
    {
      rowName: "A. Activos al iniciar el mes",
      familias: "",
      totalNinos: "",
      negligencia: "",
      abusoSexual: "",
      explotacion: "",
      fisico: "",
      emocional: "",
      multiple: "",
      institucional: "",
    },
    {
      rowName: "B. Aceptados (1+2+3)",
      familias: "",
      totalNinos: "",
      negligencia: "",
      abusoSexual: "",
      explotacion: "",
      fisico: "",
      emocional: "",
      multiple: "",
      institucional: "",
    },
    {
      rowName: "1. Nuevos",
      familias: "",
      totalNinos: "",
      negligencia: "",
      abusoSexual: "",
      explotacion: "",
      fisico: "",
      emocional: "",
      multiple: "",
      institucional: "",
    },
    {
      rowName: "2. Re-abiertos",
      familias: "",
      totalNinos: "",
      negligencia: "",
      abusoSexual: "",
      explotacion: "",
      fisico: "",
      emocional: "",
      multiple: "",
      institucional: "",
    },
    {
      rowName: "3. Transferidos de otras O.S.S.",
      familias: "",
      totalNinos: "",
      negligencia: "",
      abusoSexual: "",
      explotacion: "",
      fisico: "",
      emocional: "",
      multiple: "",
      institucional: "",
    },
    {
      rowName: "C. Total durante el mes (A+B)",
      familias: "",
      totalNinos: "",
      negligencia: "",
      abusoSexual: "",
      explotacion: "",
      fisico: "",
      emocional: "",
      multiple: "",
      institucional: "",
    },
    {
      rowName: "D. Dados de Baja (1+2)",
      familias: "",
      totalNinos: "",
      negligencia: "",
      abusoSexual: "",
      explotacion: "",
      fisico: "",
      emocional: "",
      multiple: "",
      institucional: "",
    },
    {
      rowName: "1. Cerrados",
      familias: "",
      totalNinos: "",
      negligencia: "",
      abusoSexual: "",
      explotacion: "",
      fisico: "",
      emocional: "",
      multiple: "",
      institucional: "",
    },
    {
      rowName: "2. Transferidos a otras O.S.S.",
      familias: "",
      totalNinos: "",
      negligencia: "",
      abusoSexual: "",
      explotacion: "",
      fisico: "",
      emocional: "",
      multiple: "",
      institucional: "",
    },
    {
      rowName: "E. Activos al fin de mes (C-D)",
      familias: "",
      totalNinos: "",
      negligencia: "",
      abusoSexual: "",
      explotacion: "",
      fisico: "",
      emocional: "",
      multiple: "",
      institucional: "",
    },
    {
      rowName: "1. Asignados",
      familias: "",
      totalNinos: "",
      negligencia: "",
      abusoSexual: "",
      explotacion: "",
      fisico: "",
      emocional: "",
      multiple: "",
      institucional: "",
    },
    {
      rowName: "2. Sin Asignar",
      familias: "",
      totalNinos: "",
      negligencia: "",
      abusoSexual: "",
      explotacion: "",
      fisico: "",
      emocional: "",
      multiple: "",
      institucional: "",
    },
  ]);

  const [tableData2, setTableData2] = useState([
    {
      rowName: "A. Solicitadas",
      ley75: "",
      ley140: "",
      otros: "",
    },
    {
      rowName: "1. Provisionales",
      ley75: "",
      ley140: "",
      otros: "",
    },
    {
      rowName: "2. Permanentes",
      ley75: "",
      ley140: "",
      otros: "",
    },
    {
      rowName: "B. Otorgadas",
      ley75: "",
      ley140: "",
      otros: "",
    },
    {
      rowName: "1. Provisionales",
      ley75: "",
      ley140: "",
      otros: "",
    },
    {
      rowName: "2. Permanentes",
      ley75: "",
      ley140: "",
      otros: "",
    },
    {
      rowName: "C. Devueltas a Padres o Encargados",
      ley75: "",
      ley140: "",
      otros: "",
    },
    {
      rowName: "1. Provisionales",
      ley75: "",
      ley140: "",
      otros: "",
    },
    {
      rowName: "2. Permanentes",
      ley75: "",
      ley140: "",
      otros: "",
    },
    {
      rowName: "D. Pendientes a fin de mes",
      ley75: "",
      ley140: "",
      otros: "",
    },
    {
      rowName: "1. Provisionales",
      ley75: "",
      ley140: "",
      otros: "",
    },
    {
      rowName: "2. Permanentes",
      ley75: "",
      ley140: "",
      otros: "",
    },
  ]);

  const [tableData3, setTableData3] = useState([
    {
      rowName: "A. Situaciones de emergencia trabajadas",
      total: "",
    },
    {
      rowName: "1. En horas laborales",
      total: "",
    },
    {
      rowName: "2. Fuera de horas laborales",
      total: "",
    },
    {
      rowName: "B. Remociones Efectuadas",
      total: "",
    },
  ]);

  const handleInputChange = (value, rowIndex, columnName) => {
    setTableData((prevTableData) => {
      const updatedData = [...prevTableData];
      updatedData[rowIndex] = {
        ...updatedData[rowIndex],
        [columnName]: value,
      };
      return updatedData;
    });

    setTableData((prevArr) => {
      const updatedArr = [...prevArr];
      const thirdObject = updatedArr[2];
      const firstObject = updatedArr[0];
      const secondeObject = updatedArr[1];
      thirdObject.familias = Number(firstObject.familias) +  Number(secondeObject.familias);
      thirdObject.totalNinos = Number(firstObject.totalNinos) +  Number(secondeObject.totalNinos);
      thirdObject.negligencia = Number(firstObject.negligencia) +  Number(secondeObject.negligencia);
      thirdObject.abusoSexual = Number(firstObject.abusoSexual) +  Number(secondeObject.abusoSexual);
      thirdObject.explotacion = Number(firstObject.explotacion) +  Number(secondeObject.explotacion);
      thirdObject.fisico = Number(firstObject.fisico) +  Number(secondeObject.fisico);
      thirdObject.emocional = Number(firstObject.emocional) +  Number(secondeObject.emocional);
      thirdObject.multiple = Number(firstObject.multiple) +  Number(secondeObject.multiple);
      thirdObject.institucional = Number(firstObject.institucional) +  Number(secondeObject.institucional);

      const fourObject = updatedArr[3];
      const eightObject = updatedArr[7];
      // const secondeObject = updatedArr[1];
      eightObject.familias =  Number(thirdObject.familias) - Number(fourObject.familias);
      eightObject.totalNinos = Number(thirdObject.totalNinos) -  Number(fourObject.totalNinos);
      eightObject.negligencia = Number(thirdObject.negligencia) -  Number(fourObject.negligencia);
      eightObject.abusoSexual = Number(thirdObject.abusoSexual) -  Number(fourObject.abusoSexual);
      eightObject.explotacion = Number(thirdObject.explotacion) -  Number(fourObject.explotacion);
      eightObject.fisico = Number(thirdObject.fisico) -  Number(fourObject.fisico);
      eightObject.emocional = Number(thirdObject.emocional) -  Number(fourObject.emocional);
      eightObject.multiple = Number(thirdObject.multiple) -  Number(fourObject.multiple);
      eightObject.institucional = Number(thirdObject.institucional) -  Number(fourObject.institucional);
      return updatedArr;
    });
    
  };

  const handleInputChange1 = (value, rowIndex, columnName) => {
    setTableData1((prevTableData) => {
      const updatedData = [...prevTableData];
      updatedData[rowIndex] = {
        ...updatedData[rowIndex],
        [columnName]: value,
      };
      return updatedData;
    });
  };

  const handleInputChange2 = (value, rowIndex, columnName) => {
    setTableData2((prevTableData) => {
      const updatedData = [...prevTableData];
      updatedData[rowIndex] = {
        ...updatedData[rowIndex],
        [columnName]: value,
      };
      return updatedData;
    });
  };

  const handleInputChange3 = (value, rowIndex, columnName) => {
    setTableData3((prevTableData) => {
      const updatedData = [...prevTableData];
      updatedData[rowIndex] = {
        ...updatedData[rowIndex],
        [columnName]: value,
      };
      return updatedData;
    });
  };

  const handlesubmit = async (event) => {
    setShowConfirm(true);
  };

  const handleConfirm = async () => {
    try {
      const response = await axios.post("api/report/create", {
        region: region,
        municipality: munciplity,
        month: month,
        year: year,
        creator: "648f06d350a7f7f4e9aa5e22",
        data: [
          {
            "I. Movimiento de referidosre": tableData,
            "II. Movimiento de casos": tableData1,
            "III. Movimiento de custodias": tableData2,
            "IV. Labor Realizada": tableData3,
          },
        ],
      });
      console.log(response);
      alert("Success");
      navigation("/municipality-adminstration-dashboard")
    } catch (error) {
      console.log("Login failed", error);
    }
    setShowConfirm(false);
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  return (
    <Container className=" my-5">
      <Link
        to="/municipality-adminstration-dashboard"
        style={{
          width: "200px",
          backgroundColor: "#008fb3",
          borderRadius: "0",
          marginTop: "-1px",
          padding: "8px 40px",
          color: "#fff",
          textDecoration: "none",
        }}
      >
        Back
      </Link>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "2rem",
          gap: "2rem",
        }}
      >
        <p className="h6">
          Region:{" "}
          <input
            type="text"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          />
        </p>
        <p className="h6">
          Municipality :{" "}
          <input
            type="text"
            value={munciplity}
            onChange={(e) => setMunciplity(e.target.value)}
          />
        </p>
        <p className="h6">
          Month :{" "}
          <input
            type="text"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            readOnly
          />
        </p>
        <p className="h6">
          Year :{" "}
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            readOnly
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
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}   >
              <td>{row.rowName}</td>
              <td>
                <input
                  type="number"
                  value={row.familias || ""}
                  onChange={(e) => {
                    handleInputChange(e.target.value, rowIndex, "familias");
                  }}
                 readOnly={rowIndex == 2 || rowIndex == 7}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.totalNinos || ""}
                  onChange={(e) =>
                    handleInputChange(e.target.value, rowIndex, "totalNinos")
                  }
                 readOnly={rowIndex == 2 || rowIndex == 7}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.negligencia || ""}
                  onChange={(e) =>
                    handleInputChange(e.target.value, rowIndex, "negligencia")
                  }
                 readOnly={rowIndex == 2 || rowIndex == 7}

                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.abusoSexual || ""}
                  onChange={(e) =>
                    handleInputChange(e.target.value, rowIndex, "abusoSexual")
                  }
                 readOnly={rowIndex == 2 || rowIndex == 7}

                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.explotacion || ""}
                  onChange={(e) =>
                    handleInputChange(e.target.value, rowIndex, "explotacion")
                  }
                 readOnly={rowIndex == 2 || rowIndex == 7}

                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.fisico || ""}
                  onChange={(e) =>
                    handleInputChange(e.target.value, rowIndex, "fisico")
                  }
                 readOnly={rowIndex == 2 || rowIndex == 7}

                />
              </td>

              <td>
                <input
                  type="number"
                  value={row.emocional || ""}
                  onChange={(e) =>
                    handleInputChange(e.target.value, rowIndex, "emocional")
                  }
                 readOnly={rowIndex == 2 || rowIndex == 7}

                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.multiple || ""}
                  onChange={(e) =>
                    handleInputChange(e.target.value, rowIndex, "multiple")
                  }
                 readOnly={rowIndex == 2 || rowIndex == 7}

                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.institucional || ""}
                  onChange={(e) =>
                    handleInputChange(e.target.value, rowIndex, "institucional")
                  }
                  readOnly={rowIndex == 2 || rowIndex == 7}

                />
              </td>
            </tr>
          ))}
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
          {tableData1.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{row.rowName}</td>
              <td>
                <input
                  type="number"
                  value={row.familias || ""}
                  onChange={(e) =>
                    handleInputChange1(e.target.value, rowIndex, "familias")
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.totalNinos || ""}
                  onChange={(e) =>
                    handleInputChange1(e.target.value, rowIndex, "totalNinos")
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.negligencia || ""}
                  onChange={(e) =>
                    handleInputChange1(e.target.value, rowIndex, "negligencia")
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.abusoSexual || ""}
                  onChange={(e) =>
                    handleInputChange1(e.target.value, rowIndex, "abusoSexual")
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.explotacion || ""}
                  onChange={(e) =>
                    handleInputChange1(e.target.value, rowIndex, "explotacion")
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.fisico || ""}
                  onChange={(e) =>
                    handleInputChange1(e.target.value, rowIndex, "fisico")
                  }
                />
              </td>

              <td>
                <input
                  type="number"
                  value={row.emocional || ""}
                  onChange={(e) =>
                    handleInputChange1(e.target.value, rowIndex, "emocional")
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.multiple || ""}
                  onChange={(e) =>
                    handleInputChange1(e.target.value, rowIndex, "multiple")
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.institucional || ""}
                  onChange={(e) =>
                    handleInputChange1(
                      e.target.value,
                      rowIndex,
                      "institucional"
                    )
                  }
                />
              </td>
            </tr>
          ))}
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
          {tableData2.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{row.rowName}</td>
              <td>
                <input
                  type="number"
                  value={row.ley75 || ""}
                  onChange={(e) =>
                    handleInputChange2(e.target.value, rowIndex, "ley75")
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.ley140 || ""}
                  onChange={(e) =>
                    handleInputChange2(e.target.value, rowIndex, "ley140")
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.otros || ""}
                  onChange={(e) =>
                    handleInputChange2(e.target.value, rowIndex, "otros")
                  }
                />
              </td>
            </tr>
          ))}
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
          {tableData3.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{row.rowName}</td>
              <td>
                <input
                  type="number"
                  value={row.total || ""}
                  onChange={(e) =>
                    handleInputChange3(e.target.value, rowIndex, "total")
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button
        onClick={handlesubmit}
        variant="primary"
        type="submit"
        style={{
          width: "150px",
          backgroundColor: "#036078",
          borderRadius: "0",
        }}
      >
        Submit
      </Button>

      <Modal show={showConfirm} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to submit?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ReportForm;
