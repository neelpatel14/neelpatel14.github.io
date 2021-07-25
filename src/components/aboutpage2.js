import React from 'react'
import { Container, Row, Col, Card, CardGroup} from 'react-bootstrap';
import profpic from '../assets/profpic.png'
import  * as aboutstyle from './about.module.css'

const AboutPage = () => (
<div>
<Container fluid>
<Row>
    <Col>
  <Card border='dark'>
  <Card.Img variant="top" src={profpic}/>
  <Card.Body>
    <Card.Title>About Me</Card.Title>
    <Card.Text>
    I am currently a software engineer working at Appian Incorporated in Tysons Corner, Virginia. Before Appian, I completed my Bachelor's of Science from the University of Virginia with a double major in
  Computer Science and Financial Economics in Spring of 2018. I finished by degree in 3 years, while also being part of UVA's Rodman Scholarship program.
    </Card.Text>
  </Card.Body>
</Card>
    </Col>
    </Row>
</Container>
<Container fluid>
<Row>
<Col>
<CardGroup>
<Card>
  <Card.Body>
    <Card.Title>Languages</Card.Title>
    <Card.Subtitle>The following are programming languages I've worked with.</Card.Subtitle>
    <Card.Text>
    <ul className="items">
  <li className="item"> Python</li>
  <li className="item"> Java</li>
  <li className="item"> C++</li >
  <li className="item"> Html, Javascript, CSS</li>
  <li className="item"> ReactJS</li>
  <li className="item"> GatsbyJS</li >
  <li className="item"> Jquery</li>
  </ul>
    </Card.Text>
  </Card.Body>
</Card>
<Card>
  <Card.Body>
    <Card.Title>Platforms/Software</Card.Title>
    <Card.Subtitle>The following are programming languages I've worked with.</Card.Subtitle>
    <Card.Text>
    <ul className="items">
    <li className="item"> Eclipse</li >
  <li className="item"> PyCharm</li>
  <li className="item"> Amazon Web Services</li>
  <li className="item"> Django</li>
  <li className="item"> Heroku</li>
  </ul>
    </Card.Text>
  </Card.Body>
</Card>
</CardGroup>
</Col>
    </Row>
</Container>
</div>
)

export default AboutPage;
