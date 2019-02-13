import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutMe from '../pages/about-me.js';
import Experience from '../pages/experience.js'
import * as ReactBootstrap from 'react-bootstrap';

const NavMenu = () => (

<ReactBootstrap.Tabs justify defaultActiveKey="home" id="uncontrolled-tab-example">
  <ReactBootstrap.Tab eventKey="home" title="Home">
  <br/>
    <Home />
  </ReactBootstrap.Tab>
  <ReactBootstrap.Tab eventKey="about" title="About Me">
  <br/>
    <About/>
  </ReactBootstrap.Tab>
  <ReactBootstrap.Tab eventKey="experience" title="Experience">
  <br/>
    <Experience />
  </ReactBootstrap.Tab>
</ReactBootstrap.Tabs>






  // <Router>
  //   <ReactBootstrap.Container>
  //     <ReactBootstrap.Nav onSelect={function(evt){console.log(evt);}} justify variant="tabs" defaultActiveKey="/home">
  //       <ReactBootstrap.Nav.Item>
  //         <ReactBootstrap.Nav.Link to="/home" eventKey="/home">Home</ReactBootstrap.Nav.Link>
  //       </ReactBootstrap.Nav.Item>
  //       <ReactBootstrap.Nav.Item>
  //         <ReactBootstrap.Nav.Link to="/about" eventKey="/about">About Me</ReactBootstrap.Nav.Link>
  //       </ReactBootstrap.Nav.Item>
  //       <ReactBootstrap.Nav.Item>
  //         <ReactBootstrap.Nav.Link to="/experience" eventKey="/experience">Experience</ReactBootstrap.Nav.Link>
  //       </ReactBootstrap.Nav.Item>
  //     </ReactBootstrap.Nav>
    
  //   <Route exact path="/home" component={Home} />
  //   <Route path="/about" component={AboutMe} />
  //   <Route path="/experience" component={Experience} />
  //   </ReactBootstrap.Container>
  // </Router>


  // <Router>
  //   <div className="nav-menu">
  //     <ul className="menu">
  //       <li className="menu-item">
  //         <Link className='nav-bar-link' to="/">Home</Link>
  //       </li>
  //       <li className="menu-item">
  //         <Link className='nav-bar-link' to="/about">About</Link>
  //       </li>
  //       <li className="menu-item">
  //         <Link className='nav-bar-link' to="/experience">Experience</Link>
  //       </li>
  //       {/* <li className="menu-item">
  //         <Link className='nav-bar-link' to="/topics">Topics</Link>
  //       </li> */}
  //     </ul>

  //     <hr />

  //     <Route exact path="/" component={Home} />
  //     <Route path="/about" component={AboutMe} />
  //     <Route path="/experience" component={Experience} />
  //     {/* <Route path="/topics" component={Sidebar} /> */}
  //   </div>
  // </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);


const About = () => (
  <div>
    {/* <h3>fdsafdsa</h3> */}
    <AboutMe />
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
