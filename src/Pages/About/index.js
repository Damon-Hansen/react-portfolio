import { Row, Col, Container, Image } from 'react-bootstrap';
import jaxdamon from './jaxdamon.jpg';

const About = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={4}>
          <Image src={jaxdamon} roundedCircle={true} thumbnail={true}></Image>
        </Col>
        <Col sm={8} className="my-auto">
          My name is Damon Hansen. I live in the small town of Wathena, Ks with
          my wife (Alison) and one year old (Jaxson). I am a full stack software
          engineer and I got my certificate through the Kansas University
          full-stack bootcamp program, combined with a background in commercial
          carpentry through the Carpenter’s Union. Carpentry is relevant because
          it taught me many things that would be an asset to development teams.
          These are things like working to continuously be as efficient as
          possible, making sure deadlines are hit, having to be creative when
          things don’t work out as planned, working with a team, and problem
          solving in general. In the bootcamp I completed we learned many
          technologies. The main focus was Mongo, Express, React, and Node. Some
          other technologies include using Github, HTML, CSS, JavaScript, SQL,
          PWA’s, API’s, Bootstrap and React-Bootstrap. I’d say my biggest
          achievement was creating a full stack social media website working
          with three people in a matter of a week and a half. I am excited to
          start working with a team to help develop creative and quality web
          applications.
        </Col>
      </Row>
    </Container>
  );
};

export default About;
