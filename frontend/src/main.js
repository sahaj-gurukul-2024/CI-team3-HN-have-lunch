const env = import.meta.env

async function login(event) {
    event.preventDefault()
    const id = document.getElementById("id").value
    const name = document.getElementById("name").value

    const loginData = {
        id,
        name
    }
    const response = await fetch(`http://${env.VITE_BACKEND_SERVER_URL}:${env.VITE_BACKEND_SERVER_PORT}/login`,{
        body : JSON.stringify(loginData),
        method : "POST",
        headers: {
            "Content-Type":"application/json"
        }
    })

    const data = await response.json()

    localStorage.setItem("login",JSON.stringify(data))
    
    window.location.href="home.html"
}

document.getElementsByTagName("form")[0].onsubmit = login

