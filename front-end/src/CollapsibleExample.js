import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsPersonCircle } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      // bg="dark"
      variant="dark"
      // style={{ backgroundColor: "transperant"}} // change
    >
      <Container style={{ maxWidth: "1400px" }}>
        <Navbar.Brand href="/individual">Codeforces Analyser</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link
              href="/individual"
              style={{ width: "126.03px", fontSize: "18px", color: "white" }}
            >
              {" "}
              <BsPersonCircle style={{ marginRight: "4px" }} /> Individual
            </Nav.Link>
            <Nav.Link
              href="/compare"
              style={{ width: "115.86", fontSize: "18px", color: "white" }}
            >
              {" "}
              <BsFillPersonPlusFill style={{ marginRight: "4px" }} />
              Compare
            </Nav.Link>
            <Nav.Link
              href="#deets"
              style={{ width: "130.65px", fontSize: "18px", color: "white" }}
            >
              <IoIosMail style={{ marginRight: "4px" }} />
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
