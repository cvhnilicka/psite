import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutMe from '../pages/about-me.js';
import Experience from '../pages/experience.js'
import Sidebar from "./sidebar.js"

const NavMenu = () => (
  <Router>
    <div className="nav-menu">
      <ul className="menu">
        <li className="menu-item">
          <Link className='nav-bar-link' to="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link className='nav-bar-link' to="/about">About</Link>
        </li>
        <li className="menu-item">
          <Link className='nav-bar-link' to="/experience">Experience</Link>
        </li>
        {/* <li className="menu-item">
          <Link className='nav-bar-link' to="/topics">Topics</Link>
        </li> */}
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={AboutMe} />
      <Route path="/experience" component={Experience} />
      {/* <Route path="/topics" component={Sidebar} /> */}
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <AboutMe/>
  </div>
);

const Topics = ({ match }) => (
  <div className="side-bar">
    <h2>Topics</h2>
    <ul>
      <li>
        <Link className='side-bar-link' to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link className='side-bar-link' to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link className='side-bar-link' to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={DefaultTopic}
    />
  </div>
);

const DefaultTopic = () => (
    <div><h3>Default</h3></div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default NavMenu;
