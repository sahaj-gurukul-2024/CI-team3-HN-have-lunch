import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { apiEndpoints } from "./utils/apiEndpoints";
import Loader from "./Loader.jsx";
import { getDate } from "./utils/date.js";
import CustomModal from "./Modal.jsx";

function Admin() {
  const [employeeCount, setEmployeeCount] = useState(null);
  const [date, setDate] = useState(new Date());
  const [modalShow, setModalShow] = useState(false);
  const [employeesDetail, setEmployeesDetail] = useState([]);

  const detailedView = async () => {
    const response = await fetch(
      `${apiEndpoints.attendanceList}?date=${getDate(date)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (response.status === 200) {
      const data = await response.json();
      setEmployeesDetail(data);
    }
    setModalShow(true);
  };

  useEffect(() => {
    const getEmployeeCount = async () => {
      const response = await fetch(
        `${apiEndpoints.attendanceCount}?date=${getDate(date)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (response.status === 200) {
        const data = await response.json();
        setEmployeeCount(data.count);
        console.log(data);
      }
    };

    getEmployeeCount();
  }, [date]);

  return (
    <>
      <CustomModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        heading={`Employee Details for ${
          date.toLocaleDateString() === new Date().toLocaleDateString()
            ? "today"
            : `${date.toLocaleDateString()}`
        }`}
      >
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S/No.</th>
              <th>Id</th>
              <th>Employee Name</th>
            </tr>
          </thead>
          <tbody>
            {employeesDetail.map(({ name, id }, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{id}</td>
                  <td>{name}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </CustomModal>
      <Container className="d-flex flex-column align-items-center justify-content-center vh-100 w-25">
        <h1 className="welcomeMessage mb-5">Welcome Admin</h1>
        <h3>
          Date:{" "}
          <span className="currentDate">
            {date.toLocaleString().slice(0, 10)}
          </span>
        </h3>

        {employeeCount === null ? (
          <Loader />
        ) : (
          <p>
            <span className="employeeCount">{employeeCount}</span>{" "}
            {employeeCount === 1 ? "person" : "people"}{" "}
            {date.toLocaleDateString() >= new Date().toLocaleDateString()
              ? "are coming"
              : "came"}{" "}
            to Office{" "}
            {date.toLocaleDateString() === new Date().toLocaleDateString()
              ? "today"
              : `on ${date.toLocaleDateString()}`}
          </p>
        )}

        <Button
          variant="primary"
          type="submit"
          className="submitPreferance w-100 mt-2"
          onClick={detailedView}
          disabled={employeeCount === 0}
        >
          Detailed View
        </Button>

        <Form.Group className="mt-4 align-self-stretch" controlId="datePicker">
          <Form.Label>Check for some other Dates</Form.Label>
          <Form.Control
            className="datePicker"
            name="date"
            type="date"
            required
            value={date.toLocaleDateString().split("/").reverse().join("-")}
            onChange={(e) => {
              setDate(new Date(e.target.value));
            }}
          />
        </Form.Group>
      </Container>
    </>
  );
}

export default Admin;
