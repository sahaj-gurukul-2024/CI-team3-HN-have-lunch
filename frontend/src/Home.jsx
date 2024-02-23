import React from "react"
import {useNavigate} from "react-router-dom"
import { UrlContext } from "./context/UrlContext"
import { useContext, useEffect, useState } from "react"

function Home() {
    const baseUrl = useContext(UrlContext)
    const navigate = useNavigate()
    const [date, setDate] = useState("")
    const [lunchStatus, setLunchStatus] = useState("")

    const [employeeData, setEmployeeData] = useState("")
    
    async function updateChoice(e) {
        e.preventDefault();
        const isoDate = new Date(date).toISOString();
        const response = await fetch(
          `${baseUrl}/attendance`,
          {
            body: JSON.stringify({
              employee: employeeData,
              date: isoDate,
              status: lunchStatus,
            }),
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            }
          }
        );

        if(response.status === 200) {
          navigate("/", {replace: true})
        }
      };

      function logout() {
        localStorage.removeItem("login");
        navigate("/", {replace: true})
      };

    useEffect(()=> {
        if (localStorage.getItem("login") == null) {
            navigate("/", { replace: true });
        }

        setEmployeeData(JSON.parse(localStorage.getItem("login")))
    }, [])
      
    return (
      <>
        <h1 id="name">Welcome {employeeData.name}</h1>
        <button id="logout" onClick={logout}>Logout</button>
        <form onSubmit={updateChoice}>
            <div>
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" onChange={(e) => setDate(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="yes">Yes</label>
                <input type="radio" name="choice" id="yes" required onChange={(e)=>setLunchStatus("yes")}/> 
                <label htmlFor="no">No</label>
                <input type="radio" name="choice" id="no" required onChange={(e)=>setLunchStatus("no")}/>
            </div>
            <button>Submit</button>
        </form>
      </>
    )
}
  
export default Home
  