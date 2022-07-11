import { Row, Card, Col } from 'react-bootstrap';
import foodFestival from './foodFestival.PNG';
import pokeQuiz from './pokequiz.PNG';
import socialNetworking from './socialNetworking.PNG';
import gamerLabs from './gamerLabs.PNG';
import budgetTracker from './budgetTracker.PNG';
import noteTaker from './noteTaker.PNG';

const projects = [
  {
    img: foodFestival,
    name: 'Food Festival',
    description: 'This is a Proggressive Web Application that has been audited with Lighthouse and updated to perform better on phones with just a 3G network, and to run without a internet connection.',
    text: ['HTML', 'CSS', 'JavaScript', 'PWA'],
    links: {
      code: 'https://github.com/Damon-Hansen/food-festival',
      live: 'https://damon-hansen.github.io/food-festival/',
    },
  },
  {
    img: pokeQuiz,
    name: 'PokeQuiz',
    description: 'This is a front-end project that allows the user to take a test to see which Pokémon they would be.',
    text: ['HTML', 'CSS', 'JavaScript', 'Bulma'],
    links: {
      code: 'https://github.com/Damon-Hansen/pokequiz',
      live: 'https://bkrayton815.github.io/pokequiz/',
    },
  },
  {
    img: socialNetworking,
    name: 'Social Networking Back-end',
    description:
      'This is a back-end project that uses MongoDB and Express, allows you to create a user and from that user create posts and reactions to that post and then delete them.',
    text: ['Node', 'JavaScript', 'Express', 'Mongoose'],
    links: {
      code: 'https://github.com/Damon-Hansen/Social-Networking-w-Mongo',
    },
  },
  {
    img: gamerLabs,
    name: 'GamerLabs',
    description: 'This is a full stack MERN social media application designed for the user to connect with other users interested in the same games as them. This app also uses the Steam API to grab a users information to showcase their steam profile as well.',
    text: [
      'MongoDB',
      'JavaScript',
      'Express',
      'React',
      'Node',
      'React-Bootstrap',
    ],
    links: {
      code: 'https://github.com/BKrayton815/GamerLabs',
      live: 'https://gamerlabs.herokuapp.com/',
    },
  },
  {
    img: budgetTracker,
    name: 'Budget Tracker',
    description: 'This is a project using Mongo DB that allows a user to track his or her expenses. It saves inputs if you lose internet connection and then will process when your internet connection is restored.',
    text: [
      'MongoDB',
      'Service-worker',
      'JavaScript',
    ],
    links: {
      code: 'https://github.com/Damon-Hansen/budget-tracker',
      live: 'https://damons-budget-tracker.herokuapp.com/',
    }
  },
  {
    img: noteTaker,
    name: 'Note Taker',
    description: 'This is an Express.js and Node.js application that allows the user to take and delete notes for themselves.',
    text: [
      'HTML',
      'CSS',
      'JavaScript',
      'Node',
      'Express',
    ],
    links: {
      code: 'https://github.com/Damon-Hansen/budget-tracker',
      live: 'https://github.com/Damon-Hansen/note-taker',
    }
  }
];
const Portfolio = () => {
  return (
    <Row xs={1} md={2} className="g-4 d-flex">
      {projects.map((project, idx) => (
        <Col key={idx} className=" mb-5 d-flex">
          <Card className="cards">
            <Card.Img className="card-image" variant="top" src={project.img} />
            <Card.Body>
              <Card.Title>{project.name}</Card.Title>
              <Card.Text>
                Technologies Used:
                {project.text.map((technologies, index) => (
                  <span key={technologies} className="m-3">
                    {technologies}
                  </span>
                ))}
              </Card.Text>
              <Card.Text>{project.description}</Card.Text>
              <Card.Link as="card-link">
                <a href={project.links.code}>Github</a>{' '}
              </Card.Link>
              <Card.Link as="card-link">
                <a href={project.links.live}>Live Link</a>{' '}
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Portfolio;
