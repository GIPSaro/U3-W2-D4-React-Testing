import { useState } from "react";
import { Card } from "react-bootstrap";
// import CommentArea from './CommentArea'

const SingleBook = (props) => {
  // state = {
  //   selected: false,
  // }
  const [selectedBook, setSelectedBook] = useState("");
  const changeSelectedBook = () => {
    setSelectedBook(props.book.asin);
    props.changeSelectedBook(props.book.asin);
  };

  return (
    <>
      <Card
        // onClick={() => this.setState({ selected: !this.state.selected })}
        onClick={changeSelectedBook}
        style={{
          border: selectedBook === props.book.asin ? "3px solid red" : "none",
        }}
      >
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
      {/* {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
    </>
  );
};

export default SingleBook;
