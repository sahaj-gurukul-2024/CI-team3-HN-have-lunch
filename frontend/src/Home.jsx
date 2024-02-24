import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Toast from 'react-bootstrap/Toast';
import { path } from "./utils/constants";
import {apiEndpoints} from "./utils/apiEndpoints";

function Home() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [date, setDate] = useState("");
  const [lunchStatus, setLunchStatus] = useState("");
  const [employeeData, setEmployeeData] = useState("");

  async function updateChoice(e) {
    e.preventDefault();
    const isoDate = new Date(date).toISOString();
    const response = await fetch(apiEndpoints.attendance, {
      body: JSON.stringify({
        employee: employeeData,
        date: isoDate,
        status: lunchStatus,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      setShow(true)
    }
  }

  function logout() {
    localStorage.removeItem("login");
    navigate(path.login, { replace: true });
  }

  useEffect(() => {
    if (localStorage.getItem("login") == null) {
      navigate(path.login, { replace: true });
    }

    setEmployeeData(JSON.parse(localStorage.getItem("login")));
  }, []);

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100 w-50">
      <Toast onClose={() => setShow(false)} show={show} className="position-absolute top-0 end-0" animation autohide delay={1000}>
          <Toast.Header>
            <strong>Preferance Noted</strong>
            <small> </small>
          </Toast.Header>
          <Toast.Body>Successfully submitted the status for {date} as {lunchStatus.toUpperCase()}</Toast.Body>
      </Toast>

      <h1 id="name">
        Welcome <span className="userName">{employeeData.name}{" "}</span>
        <span>
          <Button id="logout" onClick={logout}>
            Logout
          </Button>
        </span>
      </h1>

      <Form onSubmit={updateChoice}>
        <Form.Group className="mb-3" controlId="datePicker">
          <Form.Label>Select Date</Form.Label>
          <Form.Control
            className="datePicker"
            name="date"
            type="date"
            min={new Date().toLocaleString().slice(0, 10).split("/").reverse().join("-")}
            required
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Select Status of your presence: </Form.Label>
          <Form.Check
            inline
            label="Yes"
            id="yes"
            name="choice"
            type="radio"
            required
            className="preferanceStatus"
            onChange={(e) => setLunchStatus("yes")}
          />
          <Form.Check
            inline
            label="No"
            id="no"
            name="choice"
            type="radio"
            required
            className="preferanceStatus"
            onChange={(e) => setLunchStatus("no")}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submitPreferance w-100">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Home;
