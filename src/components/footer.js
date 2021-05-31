import React from 'react'
import footer from './footer.css'
import Linkedin from '../components/linkedin'
import Github from '../components/github'
const Footer = () => (
  <footer>
    <div className="footerwrap">
      <div className="contactinfo"><a href="mailto:contact@neel-patel.com">
        contact@neel-patel.com</a>
      </div>
      <div>
        &copy; Copyright 2018 Neel Patel
      </div>
    </div>
    <div className="socialIcons">
      <a href= "https://www.github.com/neelpatel14">
      <Github /> </a>
      <a href="https://www.linkedin.com/in/npatel14"><Linkedin /></a>
    </div>
  </footer>
)

export default Footer;
