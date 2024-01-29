import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Navigation_Bar() {
  return (
    <Navbar expand="md" className="bg-body-tertiary shadow-sm sticky-top">
      <Container>
        <Link className="navbar-brand" to={"/"}>To-do-app</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to={"/"}>Home</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
