import { Row, Card, Col } from 'react-bootstrap'
import foodFestival from './foodFestival.PNG'
import pokeQuiz from './pokequiz.PNG'
import socialNetworking from './socialNetworking.PNG'
import gamerLabs from './gamerLabs.PNG'

const projects = [
  {
    img: foodFestival,
    name: 'Food Festival',
    text: ['HTML', 'CSS', 'JavaScript', 'PWA'],
    links: {
      code: 'https://github.com/Damon-Hansen/food-festival',
      live: 'https://damon-hansen.github.io/food-festival/'
    }
  },
  {
    img: pokeQuiz,
    name: 'PokeQuiz',
    text: ['HTML', 'CSS', 'JavaScript', 'Bulma'],
    links: {
      code: 'https://github.com/Damon-Hansen/pokequiz',
      live: 'https://bkrayton815.github.io/pokequiz/'
  }
},
{
  img: socialNetworking,
  name: 'Social Networking Back-end',
  text: ['Node', 'JavaScript', 'Express', 'Mongoose'],
  links: {
    code: 'https://github.com/Damon-Hansen/Social-Networking-w-Mongo'
  }
},
{
  img: gamerLabs,
  name: 'GamerLabs',
  text: ['MongoDB', 'JavaScript', 'Express', 'React', 'Node', 'React-Bootstrap'],
  links: {
    code: 'https://github.com/BKrayton815/GamerLabs',
    live: 'https://gamerlabs.herokuapp.com/'
}
}
]

const Portfolio = () => {
    return <Row xs={1} md={2} className="g-4">
    {projects.map((project, idx) => (
      <Col key={idx}>
        <Card>
          <Card.Img variant="top" src={project.img} />
          <Card.Body>
            <Card.Title>{project.name}</Card.Title>
            <Card.Text>
              Technologies Used:
            {project.text.map((technologies, index) => (
              <span key={technologies} className='m-3'>{technologies}</span>
            ))}
            </Card.Text>
            <Card.Link as="card-link"><a href={project.links.code}>Github</a> </Card.Link>
            <Card.Link as="card-link"><a href={project.links.live}>Live Link</a> </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  };

  export default Portfolio;