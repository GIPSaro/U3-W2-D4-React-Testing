import Navbar from "react-bootstrap/NavBar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
const MyNav = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {" "}
        <img
          src="../vite.svg"
          width="20"
          height="20"
          className="d-inline-block align-item-center App-logo"
          alt="React Bootstrap logo"
        />
        <Navbar.Brand href="#" className="Epic-book">
          Epic-Book
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#home">Browser</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default MyNav;
