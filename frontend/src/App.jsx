import { useNavigate } from "react-router-dom"
import { UrlContext } from "./context/UrlContext"
import { useContext } from "react"


function App() {
  const navigate = useNavigate()

  const baseUrl = useContext(UrlContext)

  async function login(e) {
    const env = import.meta.env
    console.log(env)
    e.preventDefault()
    const id = document.getElementById("id").value
    const name = document.getElementById("name").value

    const loginData = {
        id,
        name
    }
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
      
      navigate("/login", { replace: true })
    }
  }

  return (
    <>
      <h1>Welcome</h1>
      <a>Go to Admin</a>
      <div>
        <form onSubmit={login}>
          <div>
            <input id="id" name="id" />
          </div>
          <div>
            <input id="name" name="name" />
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
