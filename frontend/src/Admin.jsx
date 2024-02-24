import React, { useEffect, useState } from 'react'
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { apiEndpoints } from './utils/apiEndpoints';
import Loader from "./Loader.jsx"
import { getDate } from './utils/date.js';


function Admin() {

  const [employeeCount, setEmployeeCount] = useState(null)
  const [date, setDate] = useState(new Date());


  useEffect(() => {
    const getEmployeeCount = async () => {
      const response = await fetch(`${apiEndpoints.attendanceCount}?date=${getDate(date)}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.status === 200) {
        const data = await response.json();
        setEmployeeCount(data.count)
        console.log(data)
      }
    }
    
    getEmployeeCount()
  }, [date])

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100 w-25">
      <h1 className='welcomeMessage mb-5'>Welcome Admin</h1>
      <h3>Date: <span className="currentDate">{date.toLocaleString().slice(0, 10)}</span></h3>

      {
        employeeCount === null ? <Loader /> : <p><span className="employeeCount">{employeeCount}</span> people {date.toLocaleDateString() >= new Date().toLocaleDateString() ? "are coming" : "came"} to Office {date.toLocaleDateString() === new Date().toLocaleDateString() ? "today" : `on ${date.toLocaleDateString()}`}</p>
      }

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
  )
}

export default Admin