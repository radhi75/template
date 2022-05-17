import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { add_articles } from "../../redux/Action/articles";
const EnseignantProfile = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const enseignant = useSelector((state) => state.authreducer.user);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleregister = (e) => {
    e.preventDefault();
    dispatch(add_articles({ title, description }, navigate));
  };
  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>{enseignant && enseignant.name}</Card.Title>
            <Button variant="primary" onClick={handleShow}>
              article
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>add article</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>title</Form.Label>
                    <Form.Control
                      type="title"
                      placeholder="location"
                      onChange={(e) => settitle(e.target.value)}
                      value={title}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      onChange={(e) => setdescription(e.target.value)}
                      value={description}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleregister}>
                  send
                </Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default EnseignantProfile;
