import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutMe from '../pages/about-me.js';
import Experience from '../pages/experience.js'
import * as ReactBootstrap from 'react-bootstrap';

import Home from '../pages/home'

const NavMenu = () => (

  <ReactBootstrap.Tabs justify defaultActiveKey="home" id="uncontrolled-tab-example">
    <ReactBootstrap.Tab eventKey="home" title="Home">
      <br />
      <Home />
    </ReactBootstrap.Tab>
    <ReactBootstrap.Tab eventKey="about" title="About Me">
      <br />
      <AboutMe />
    </ReactBootstrap.Tab>
    <ReactBootstrap.Tab eventKey="experience" title="Experience">
      <br />
      <Experience />
    </ReactBootstrap.Tab>
  </ReactBootstrap.Tabs>

);


export default NavMenu;
