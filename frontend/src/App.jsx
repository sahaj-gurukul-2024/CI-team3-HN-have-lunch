import { useNavigate, Link } from "react-router-dom"
import { UrlContext } from "./context/UrlContext"
import { useContext, useState } from "react"


function App() {
  const navigate = useNavigate()
  const [id, setId] = useState(null)
  const [name, setName] = useState(null)

  const baseUrl = useContext(UrlContext)

  async function login(e) {
    e.preventDefault()
    const loginData = {id, name}

    const response = await fetch(`${baseUrl}login`,{
        body : JSON.stringify(loginData),
        method : "POST",
        headers: {
            "Content-Type":"application/json"
        }
    })

    if(response.status === 200) {
      const data = await response.json()
  
      localStorage.setItem("login",JSON.stringify(data)) 
      
      navigate("/home", { replace: true })
    }
  }

  return (
    <>
      <h1>Welcome</h1>
      
      <Link to={"/admin"}>Go to Admin</Link>
      <div>
        <form onSubmit={login}>
          <div>
            <input id="id" name="id" onChange={(event) =>{
              setId(event.target.value)
            }} />
          </div>
          <div>
            <input id="name" name="name" onChange={(event) =>{
              setName(event.target.value)
            }} />
          </div>
          <br />
          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
