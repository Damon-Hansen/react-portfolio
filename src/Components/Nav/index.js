import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'




const Navigation = (props) => {
const clickHandler = (event) => {
props.setPageToRender(event.target.id);
}

    return (
<Navbar sticky="top" bg="light" expand="lg" className='mb-5'>
  {/* <Container> */}
    <Navbar.Brand href="#home" style={{ marginLeft: "1rem"}}>Damon Hansen</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto" style={{ marginRight: "1rem"}}>
        <Nav.Link id="about" href="#" onClick={clickHandler} >About</Nav.Link>
        <Nav.Link id="portfolio" href="#" onClick={clickHandler} >Portfolio</Nav.Link>
        <Nav.Link id="contact" href="#" onClick={clickHandler} >Contact</Nav.Link>
        <Nav.Link id="resume" href="https://docs.google.com/document/d/1QB5orR0Wv4OJx1-INq_-HhtUcEV3p8z9-4uxLVPzUwQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer" onClick={clickHandler} >Resume</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  {/* </Container> */}
</Navbar>
    )
}

export default Navigation