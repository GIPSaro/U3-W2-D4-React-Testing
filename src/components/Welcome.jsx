import { Alert } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
function Welcome() {
  return (
    <Container className="mt-3">
      <Card>
        <Card.Header as="h1">Shop Libri Fantasy 📖</Card.Header>
        <Card.Body>
          <Alert variant="warning" className="text-center">
            I migliori libri fantasy del momento
          </Alert>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Welcome;
