import React, { useState } from "react";
import { Button, Card, Form, ListGroup, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { delete_articles, update_articles } from "../../redux/Action/articles";

const ArticlesCard = ({ articles }) => {
  const { user } = useSelector((state) => state.authreducer);
  const [title, settitle] = useState(articles.title);

  const [description, setdescription] = useState(articles.description);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const handleOnUpdate = () => {
    const updatedata = { title, description };
    dispatch(update_articles(articles._id, updatedata));
    handleClose();
  };

  return (
    <div>
      <Card style={{ width: "18rem", margin: " 4rem auto " }}>
        <ListGroup variant="flush">
          {articles.address && (
            <ListGroup.Item>{articles.address}</ListGroup.Item>
          )}
          {articles.phone && <ListGroup.Item>{articles.phone}</ListGroup.Item>}
          {articles.description && (
            <ListGroup.Item>{articles.description}</ListGroup.Item>
          )}
          {user && user.role == "user" && (
            <ListGroup.Item
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button variant="primary" onClick={handleShow}>
                EDIT
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>EDIT article</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>title</Form.Label>
                      <Form.Control
                        type="string"
                        placeholder="entre phone number"
                        value={title}
                        onChange={(e) => settitle(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        value={description}
                        onChange={(e) => setdescription(e.target.value)}
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleOnUpdate}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
              <Button
                variant="danger"
                onClick={() => dispatch(delete_articles(articles._id))}
              >
                DELETE
              </Button>
            </ListGroup.Item>
          )}
        </ListGroup>
      </Card>
    </div>
  );
};

export default ArticlesCard;
