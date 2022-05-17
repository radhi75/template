import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "./redux/Action/authaction";

const Login = () => {
  const [email, setemail] = useState("");
  const [motpasse, setmotpasse] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, motpasse }, navigate));
    return (
      <div>
        <Card
          className="text-center"
          border="info"
          style={{
            width: "30rem",

            height: "30rem",
          }}
        >
          <Card.Header>Welcome</Card.Header>
          <Card.Body>
            <Form>
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
                  width: "20rem",
                }}
                variant="success"
                onClick={handleLogin}
              >
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  };
};
export default Login;
