import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import { useUser } from "../../Context/UserContext";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const { state, dispatch } = useUser();
  const { user } = state;
  const navigate = useNavigate()

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg">
            <Card.Header className="text-center bg-dark text-white">
              <h2>{user?.fullName || "User Profile"}</h2>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Email:</strong> {user?.userEmail || "N/A"}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Plan:</strong> {user?.plan || "No Plan"}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Account Created:</strong>{" "}
                  {new Date(user?.createdAt).toLocaleDateString()}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Last Updated:</strong>{" "}
                  {new Date(user?.updatedAt).toLocaleDateString()}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
              <Link to="/class_site/edit-profile">
                <Button variant="primary">Edit Profile</Button>
              </Link>
              <Button
                variant="danger"
                onClick={() => {
                  dispatch({ type: "LOGOUT" });
                  navigate("/class_site")
                }}
              >
                Logout
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
