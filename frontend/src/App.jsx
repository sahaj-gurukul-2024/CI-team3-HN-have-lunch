import { Link, useNavigate } from "react-router-dom";
import { UrlContext } from "./context/UrlContext";
import { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function App() {
  const navigate = useNavigate();
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);

  const baseUrl = useContext(UrlContext);

  async function login(e) {
    e.preventDefault();
    const loginData = { id, name };

    const response = await fetch(`${baseUrl}/login`, {
      body: JSON.stringify(loginData),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      const data = await response.json();

      localStorage.setItem("login", JSON.stringify(data));

      navigate("/home", { replace: true });
    }
  }

  return (
    <Container>
      <h1>Welcome to Office Lunch Tracker</h1>
      <Link to="/admin">Go to Admin</Link>
      <Form onSubmit={login}>
        <Form.Group className="mb-3" controlId="employeeId">
          <Form.Label>Employee Id</Form.Label>
          <Form.Control
            id="id"
            name="id"
            type="text"
            placeholder="Enter your employee id"
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="employeeName">
          <Form.Label>Employee name</Form.Label>
          <Form.Control
            id="name"
            name="name"
            type="text"
            placeholder="Enter your employee name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default App;
