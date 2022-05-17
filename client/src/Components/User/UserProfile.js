import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import EnseignantCard from "./EnseignantCard";
const UserProfile = () => {
  const user = useSelector((state) => state.authreducer.user);

  const { users } = useSelector((state) => state.authreducer);
  const enseignants = users.filter((item) => item.role === "enseignant");
  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>{user && user.name}</Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>
      {enseignants.map((enseignant) => (
        <EnseignantCard key={enseignant._id} enseignant={enseignant} />
      ))}
    </div>
  );
};

export default UserProfile;
