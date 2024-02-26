import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { path, apiEndpoints } from "../utils";

function LoginPage() {
  const navigate = useNavigate();
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);

  async function login(e) {
    e.preventDefault();
    const loginData = { id, name };

    const response = await fetch(apiEndpoints.employeeLogin, {
      body: JSON.stringify(loginData),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      const data = await response.json();

      localStorage.setItem("login", JSON.stringify(data));

      navigate(path.home, { replace: true });
    }
  }

  useEffect(() => {
    if (localStorage.getItem("login") != null) {
      navigate(path.home, { replace: true });
    }
  }, []);

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100 col-sm-12 col-md-10 col-lg-8 col-xl-6">
      <h1 className="text-center">Welcome to Office Lunch Tracker</h1>

      <Form onSubmit={login} className="align-self-stretch">
        <Form.Group className="mt-5 mb-4" controlId="id">
          <Form.Label>Employee Id</Form.Label>
          <Form.Control
            name="id"
            type="text"
            placeholder="Enter your employee id"
            onChange={(e) => {
              setId(e.target.value);
            }}
            />
        </Form.Group>
        <Form.Group className="mb-5" controlId="name">
          <Form.Label>Employee name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter your employee name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            />
        </Form.Group>
        <div className="cta d-flex justify-content-between">
          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
          <div className="me-3" />
          <Link to={path.admin} className="bg-primary btn text-light w-100">
            Go to Admin
          </Link>
        </div>
      </Form>
      
    </Container>
  );
}

export default LoginPage;
