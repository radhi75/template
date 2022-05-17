import React from "react";
import { Card } from "react-bootstrap";

const EnseignantCard = ({ enseignant }) => {
  return (
    <div>
      <Card
        style={{
          width: "20rem",
          margin: " 4rem auto ",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Card.Header>enseignant</Card.Header>
        <Card.Body>
          <Card.Title>{enseignant.name}</Card.Title>
          <Card.Text>{enseignant.phone}</Card.Text>
          <Card.Text>{enseignant.email}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EnseignantCard;
