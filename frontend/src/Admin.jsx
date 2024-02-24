import React, { useEffect, useState } from 'react'
import Container from "react-bootstrap/Container";
import { apiEndpoints } from './utils/apiEndpoints';
import Loader from "./Loader.jsx"


function Admin() {

  const [employeeCount, setEmployeeCount] = useState(null)

  useEffect(() => {
    const date = new Date().toISOString()
    const getEmployeeCount = async () => {
      const response = await fetch(`${apiEndpoints.attendanceCount}/${date}`, {
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
  }, [])

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100 w-50">
      <h1 className='welcomeMessage'>Welcome Admin</h1>
      <h2>Date: <span className="currentDate">{new Date().toLocaleString().slice(0, 10)}</span></h2>

      {
        employeeCount === null ? <Loader /> : <p><span className="employeeCount">{employeeCount}</span> people are coming to Office today</p>
      }
      
    </Container>
  )
}

export default Admin