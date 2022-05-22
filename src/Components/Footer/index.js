import { Navbar, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light" fixed="bottom">
      <Nav className="m-auto">
        {' '}
        <Navbar.Text className='mx-5'>
          LinkedIn{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/damon-hansen-511031227/"
          >
            Damon Hansen
          </a>
        </Navbar.Text>
        <Navbar.Text>
          Github{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Damon-Hansen"
          >
            Damon Hansen
          </a>
        </Navbar.Text>
      </Nav>
    </Navbar>
  );
};

export default Footer;
