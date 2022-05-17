import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { register } from "./redux/Action/authaction";

const Register = () => {
  const [name, setname] = useState("");
  const [role, setrole] = useState("");
  const [email, setemail] = useState("");
  const [motpasse, setmotpasse] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleregister = (e) => {
    e.preventDefault();
    dispatch(register({ name, role, email, motpasse }, navigate));
  };
  return (
    <div>
      {" "}
      <Card
        className="text-center"
        border="info"
        style={{
          width: "20rem",
          margin: " 4rem auto ",
        }}
      >
        <Card.Header>creat account</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="Name"
                placeholder="Enter Full Name"
                onChange={(e) => setname(e.target.value)}
                value={name}
              />
            </Form.Group>
            <Form.Label>Role</Form.Label>
            <Form.Select onChange={(e) => setrole(e.target.value)} value={role}>
              <option>choose your role</option>
              <option>user</option>
              <option>enseignant</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setemail(e.target.value)}
                value={email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setmotpasse(e.target.value)}
                value={motpasse}
              />
            </Form.Group>
            <Button
              style={{
                width: "15rem",
              }}
              variant="success"
              onClick={handleregister}
            >
              sign up
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Register;
