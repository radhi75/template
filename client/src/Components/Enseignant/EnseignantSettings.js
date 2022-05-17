import React, { useState } from "react";
import { Button, Card, Form, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteuser, updateuser } from "../../redux/Action/authaction";

const EnseignantSettings = () => {
  const user = useSelector((state) => state.authreducer.user);
  const [name, setname] = useState(user.name);
  const [email, setemail] = useState(user.email);
  const [motpasse, setmotpasse] = useState(user.motpasse);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <Card border="primary" style={{ width: "18rem", margin: " 5rem auto " }}>
        <Card.Header>settings</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                onChange={(e) => setname(e.target.value)}
                value={name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setemail(e.target.value)}
                value={email}
              />
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

            <ListGroup.Item
              border="none"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button
                onClick={() => {
                  dispatch(
                    updateuser(user._id, {
                      name,
                      email,
                      motpasse,
                    }),
                    navigate("/EnseignantProfile")
                  );
                }}
              >
                EDIT
              </Button>
              <Button
                variant="danger"
                onClick={() => dispatch(deleteuser(user._id), navigate("/"))}
              >
                DELETE
              </Button>
            </ListGroup.Item>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EnseignantSettings;
