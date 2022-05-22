import { Row, Col, Container, Image } from 'react-bootstrap';
import jaxdamon from './jaxdamon.jpg'

const About = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={4}><Image src={jaxdamon} roundedCircle = {true} thumbnail = {true}></Image></Col>
        <Col sm={8} className='my-auto'>
          My name is Damon Hansen. I live in the small town of Wathena, Ks with
          my wife (Alison) and one year old (Jaxson). I am currently a
          journeyman carpenter having completed my union training and am looking
          to start down a new career path. I decided to go back to school and do
          a bootcamp for a full stack computer coding course at KU in order to
          get to work doing things I enjoy and something that isn't going to be
          quite as hard on my body. I am making this career change not only for
          my health, but also to help ensure that I will be able to be there for
          my family when they need me.
        </Col>
      </Row>
    </Container>
  );
};

export default About;
