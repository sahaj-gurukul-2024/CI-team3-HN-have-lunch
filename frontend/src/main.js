import {config} from "dotenv"
config()
const env = import.meta.env

console.log("Hello")

async function login(event) {
    event.preventDefault()
    const id = document.getElementById("id").value
    const name = document.getElementById("name").value

    const loginData = {
        id,
        name
    }
    const response = await fetch(`http://3.88.227.174:8080/uat`,{
        body : JSON.stringify(loginData),
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        }
    })

    const data = await response.json()

    console.log(loginData)
}