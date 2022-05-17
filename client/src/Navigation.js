import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "./redux/Action/authaction";

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.authreducer.user);
  const token = localStorage.getItem("token");
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">V V</Navbar.Brand>
          <Nav className="me-auto">
            {token && user && user.role == "user" && (
              <>
                <Navbar.Brand as={Link} to="profile">
                  Home
                </Navbar.Brand>
                <Nav.Link as={Link} to="profile/Articles">
                  articles
                </Nav.Link>
                <Nav.Link as={Link} to={`profile/updateuser/${user._id}`}>
                  settings
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    dispatch(logout());
                    navigate("/");
                  }}
                >
                  LOGOUT
                </Nav.Link>
              </>
            )}
            {token && user && user.role == "enseignant" && (
              <>
                <Navbar.Brand as={Link} to="enseignant">
                  Home
                </Navbar.Brand>
                <Nav.Link as={Link} to="enseignant/Articles">
                  commandes
                </Nav.Link>
                <Nav.Link as={Link} to={`enseignant/updateuser/${user._id}`}>
                  settings
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    dispatch(logout());
                    navigate("/");
                  }}
                >
                  LOGOUT
                </Nav.Link>
              </>
            )}
            {token && user && user.role == "admin" && (
              <>
                <Nav.Link
                  onClick={() => {
                    dispatch(logout());
                    navigate("/");
                  }}
                >
                  LOGOUT
                </Nav.Link>
              </>
            )}

            {!token && (
              <>
                <Nav.Link as={Link} to="/Login">
                  login in
                </Nav.Link>
                <Nav.Link as={Link} to="/Register">
                  Sign up
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
