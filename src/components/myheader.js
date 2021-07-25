import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import Careericon from './careericon'
import Projecticon from './projecticon'
import Abouticon from './abouticon'
import Resumeicon from './resumeicon'
import styles from "./header.css"

const MyHeader = () => (
  <Navbar className="navbar navbar-light">
    <Navbar.Brand href="/"> Neel Patel</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarResponsive"/>
    <Navbar.Collapse id="navbarResponsive">
      <Nav variant="pills" defaultActiveKey="/" as="ul">
        <Nav.Item as="li">
        <Link to="/" className="nav-link">
        <div className="mytooltip">
              <span><Abouticon /></span>
              <span className="mytooltiptext">About Me</span>
        </div>             
        </Link>   
        </Nav.Item>
        <Nav.Item as="li">
        <Link to="/projects" className="nav-link">
        <div className="mytooltip">
              <span><Projecticon /></span>
              <span className="mytooltiptext">My Projects</span>
        </div>   
          </Link> 
        </Nav.Item>
        <Nav.Item as="li">
        <Link to="/career" className="nav-link">
        <div className="mytooltip">
              <span><Careericon /></span>
              <span className="mytooltiptext">My Career</span>
        </div>        
        </Link>
        </Nav.Item>
        <Nav.Item as="li">
        <Link to="/resume" className="nav-link">
        <div className="mytooltip">
              <span><Resumeicon /></span>
              <span className="mytooltiptext">My Resume</span>
        </div>   
        </Link>
        </Nav.Item>
      </Nav>
      </Navbar.Collapse>
  </Navbar>
)

export default MyHeader;
