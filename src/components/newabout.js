import React from 'react'
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import profpic from '../assets/profpic.png'
import uvapic from '../assets/uva.jpg'
import '../components/aboutcss.css'
const NewAboutPage = () => (

<Carousel fade='true' interval='20000'>
  <Carousel.Item>
    <img className="d-block w-100" src={profpic} alt="About Me"/>
    <Carousel.Caption>
      <h3>About Me</h3>
      <p>  I am currently a software engineer working at Appian Incorporated in Tysons Corner, Virginia. Before Appian, I completed my Bachelor's of Science from the University of Virginia with a double major in
  Computer Science and Financial Economics in Spring of 2018. I finished by degree in 3 years, while also being part of UVA's Rodman Scholarship program.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className="d-block w-100" src={profpic} alt="About Me"/>
    <Carousel.Caption>
      <h3>Platforms / Software</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className="d-block w-100" src={uvapic} alt="About Me"/>
    <Carousel.Caption>
      <h3>Languages</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)
export default NewAboutPage;