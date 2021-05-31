import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import profpic from '../components/profpic.png'
import  * as aboutstyle from './about.module.css'

const AboutPage = () => (

<Container className={aboutstyle.container}>
<Row className="show-grid">
    <Col xs={13} sm={6} md={6} lg={5} >
    <div>
  I am currently a software engineer working at Appian Incorporated in Reston, Virginia. I completed my Bachelor's of Science from the University of Virginia with a double major in
  Computer Science and Financial Economics in Spring of 2018. I believe my training gives me a unique insight into not only on the development side of technology firms, but also on the broader market picture.
  </div>
    </Col>
    <Col xs={13} sm={6} md={6} lg={5} >

    <img className={aboutstyle.profile} src={profpic} style={{display:"block"}}></img>
    </Col>
    </Row>
    <Row className="show-grid">
    <Col xs={13} sm={6} md={6} lg={5} >
    <div className={aboutstyle.languages}>
  <h3> Languages</h3>
  <ul className="items">
  <li className="item"> Python</li>
  <li className="item"> Java</li>
  <li className="item"> C++</li >
  <li className="item"> Html, Javascript, CSS</li>
  <li className="item"> ReactJS</li>
  <li className="item"> GatsbyJS</li >
  <li className="item"> Jquery</li>
  </ul>
  </div>
</Col>

<Col xs={13} sm={6} md={6} lg={5} >
<div className={aboutstyle.skills}>
  <div className={aboutstyle.software}>
  <h3> Platforms/Software</h3>
  <li className="item"> Eclipse</li >
  <li className="item"> PyCharm</li>
  <li className="item"> Amazon Web Services</li>
  <li className="item"> Django</li>
  <li className="item"> Heroku</li>
  </div>
  </div>
</Col>
    </Row>
</Container>
)

export default AboutPage;
