import React from 'react'
import PropTypes from 'prop-types'
import withRouter from 'react-router-dom/withRouter'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
// import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import { Grid, Col, Row, Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

import MyHeader from '../components/myheader'
import MyGrid from '../components/mygrid'
import About from '../components/about'
import about from '../components/about.png'
import Footer from '../components/footer'
import './animations.css'
import './index.css'

class TransitionHandler extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.location.pathname === window.location.pathname;
  }

  render() {
    const {children} = this.props;
    return (
      <div className="transition-container">
        {children}
      </div>
    );
  }
}

const Layout = ({ children, location }) => (
  <div>
    <Helmet
      meta={[
        { name: 'description', content: "Neel Patel's Website" },
        { name: 'keywords', content: 'website, Neel Patel' },
      ]}
    >
      <title>{ "Neel's Site "} </title>
      <link rel="icon" type="image/png" href={about} sizes="16x16" />
      </Helmet>
    <MyHeader />
    <TransitionGroup>
      <CSSTransition
          key={location.pathname}
          classNames="example"
          timeout={{ enter: 500, exit: 300 }}
      >
        <TransitionHandler
            location={location}

        >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children()}
        </div>
            <Footer />
        </TransitionHandler>
      </CSSTransition>
    </TransitionGroup>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
