import { Form, Button, Container } from 'react-bootstrap'


const Contact = () => {
    return <Container>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicInput">
      <Form.Label>First and Last Name</Form.Label>
      <Form.Control type="input" />
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" />
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>


  
    <Form.Group className="mb-3" controlId="formBasicInput">
      <Form.Label>Message</Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </Container>
  };

  export default Contact;