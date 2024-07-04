import { Card, Col, Row } from "react-bootstrap";
import fantasy from "../books/fantasy.json";

const AllTheBooks = () => {
  console.log(fantasy);

  return (
    <Row>
      {fantasy.map((book) => {
        return (
          <Col xs={12} md={3} key={book.asin}>
            <Card className="book-cover">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default AllTheBooks;
