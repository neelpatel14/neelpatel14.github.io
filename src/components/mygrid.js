import React from 'react'
import { Container, Col, Row,} from 'react-bootstrap';
import { StaticImage } from "gatsby-plugin-image"
const MyGrid = () => (
  <Container>

    <Row className="show-grid">

      <Col xs={13} sm={6} md={6} lg={5} >
        <a href="https://mapmaker.housingvirginia.org/">
        <div className="box">
          <StaticImage src="../assets/mapmaker.JPG" alt="mapmaker" />
          <div className="middle">
            <div className="text">Mapmaker was a project developed for the Housing Virginia Non-Profit. It is a mapping visualization system that leverage Arcgis software to create graphics of statistical data.</div>
          </div>
        </div>
        </a>
      </Col>

      <Col xs={13} sm={6} md={6} lg={5}>
        <a href="http://evening-shelf-33806.herokuapp.com/home/">
        <div className="box">
          <StaticImage src="../assets/lokahi.JPG" alt="lokahi" />
          <div className="middle">
            <div className="text">A Django Web application that acts as a fully functional system for an artificial company (called Lokahi Fintech). Deployed on Heroku, and includes functionality
		such as user authentication, downloadable files, encryption, etc.</div>
          </div>
        </div>
        </a>
      </Col>

    </Row>

    <Row className="show-grid">

      <Col xs={13} sm={6} md={6} lg={5}>
      <a href="https://github.com/neelpatel14">
      <div className="box">
        <StaticImage src="../assets/code.JPG" alt="code" />
        <div className="middle">
          <div className="text">Large Scale Web Application for contracting development work. Leverages technologies such as Django, Docker, Selenium, Travis, Kafka, ElasticSearch, etc. No Live Server.</div>
        </div>
      </div>
      </a>
      </Col>

      <Col xs={13} sm={6} md={6} lg={5}>
        <a href="http://plato.cs.virginia.edu/~np2ch/">
        <div className="box">
          <StaticImage src="../assets/weatherbets.JPG" alt="weather" />
          <div className="middle">
            <div className="text">PHP Application for a fake betting system that leverage a backend MySQL Database. Also leverages an API from WeatherUnderground for real-time weather data.</div>
          </div>
        </div>
          </a>
      </Col>

    </Row>
    <Row className="show-grid">

      <Col xs={13} sm={6} md={6} lg={5}>
      <a href="https://neel-patel.com">
      <div className="box">
        <StaticImage src="../assets/website.jpg" alt="website" />
        <div className="middle">
          <div className="text">This website was developed entirely by me. The first iteration of this site was a Java Web Application utilizing the Maven Framework. These days, it leverages technologies such as GatsbyJS and ReactJS, for a nice, modern flare.</div>
        </div>
      </div>
      </a>
      </Col>


    </Row>

  </Container>
)


export default MyGrid;
