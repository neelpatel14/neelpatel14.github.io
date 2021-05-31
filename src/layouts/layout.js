import React from 'react'
import PropTypes from 'prop-types'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

import MyHeader from '../components/myheader'
// import Footer from '../components/footer'
import './animations.css'
import './index.css'


export default function App() {
    return (
      <Router>
        <div>
        <MyHeader />
          <Switch>
            <Route path="/projects">
            </Route>
            <Route path="/resume">
            </Route>
            <Route path="/">
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  