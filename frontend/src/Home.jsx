import React from "react"
import {useNavigate} from "react-router-dom"
import { UrlContext } from "./context/UrlContext"
import { useContext, useEffect, useState } from "react"

function Home() {
    const baseUrl = useContext(UrlContext)
    const navigate = useNavigate()

    const [employeeData, setEmployeeData] = useState("")

    async function updateChoice(event) {
        event.preventDefault();
        const date = new Date(
          document.getElementById("date").value
        ).toLocaleDateString();
        const no = document.getElementById("no");
        let status = "yes";
        if (no.checked) status = "no";
        const response = await fetch(
          `${baseUrl}attendance`,
          {
            body: JSON.stringify({
              employee: employeeData,
              date,
              status,
            }),
            method:"POST"
          }
        );
      
        console.log(JSON.stringify({
            employee: employeeData,
            date,
            status,
          }));
        console.log(await response.json());
      };

      function logout() {
        localStorage.removeItem("login");
        window.location.href = "index.html";
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
                <input type="date" id="date"/>
            </div>
            <div>
                <label htmlFor="yes">Yes</label>
                <input type="radio" name="choice" id="yes" required/> 
                <label htmlFor="no">No</label>
                <input type="radio" name="choice" id="no" required/>
            </div>
            <button>Submit</button>
        </form>
      </>
    )
}
  
export default Home
  