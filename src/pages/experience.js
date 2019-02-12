import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as ReactBootstrap from 'react-bootstrap';

// BEGIN: Import Partial Components 
import Career from "./partials/experience/career";
import Personal from "./partials/experience/personal";
import Education from "./partials/experience/education";
// END: Import Partial Components 

class Experience extends Component {


    render() {
        return (
            <Router>
                <Route path="/experience" component={Topics} />
            </Router>
        );
    }
}

class Topic extends Component {



    constructor(props) {
        super(props);
    }

    render() {

        const topicId = this.props.match.params.topicId;

        if (topicId === 'education') {
            return (
                <div className="content">
                    <ReactCSSTransitionGroup
                        transitionName="fade"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={100}
                        transitionAppear={true}
                        transitionAppearTimeout={500}>
                        <h3 key={topicId}>{topicId}</h3>
                        <Education />
                    </ReactCSSTransitionGroup>
                </div>
            );
        } else if (topicId === 'career') {

            return (
                <div className="content">
                    <ReactCSSTransitionGroup
                        transitionName="fade"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={100}
                        transitionAppear={true}
                        transitionAppearTimeout={500}>
                        <Career />
                    </ReactCSSTransitionGroup>
                </div>


            );
        } else if (topicId === 'personal') {

            return (
                <div className="content">
                    <ReactCSSTransitionGroup
                        transitionName="fade"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={100}
                        transitionAppear={true}
                        transitionAppearTimeout={500}>
                        <Personal />
                    </ReactCSSTransitionGroup>
                </div>


            );
        }
    }
}

// const Topics = ({ match }) => (
//     <div className="page-container">
//         <div className="side-bar">
//             <h2>Experience</h2>
//             <ul>
//                 <li>
//                     <Link className='side-bar-link' to={`${match.url}/career`}>Career</Link>
//                 </li>
//                 <li>
//                     <Link className='side-bar-link' to={`${match.url}/personal`}>Personal Projects</Link>
//                 </li>
//                 <li>
//                     <Link className='side-bar-link' to={`${match.url}/education`}>Education</Link>
//                 </li>
//             </ul>
//         </div>
//         <hr className="vertical-line" />
//         <div className="content-box">
//             <Route path={`${match.url}/:topicId`} component={Topic} />
//             <Route
//                 exact
//                 path={match.url}
//                 render={() => <Career />}
//             />
//         </div>
//     </div>


// );




const Topics = ({ match }) => (
    <div className="page-container">
        <ReactBootstrap.Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <ReactBootstrap.Row>
                <ReactBootstrap.Col sm={3}>
                    <ReactBootstrap.ListGroup variant="flush">
                        <ReactBootstrap.ListGroup.Item action href="#link1">
                            Career
        </ReactBootstrap.ListGroup.Item>
                        <ReactBootstrap.ListGroup.Item action href="#link2">
                            Personal
        </ReactBootstrap.ListGroup.Item>
        <ReactBootstrap.ListGroup.Item action href="#link3">
                            Education
        </ReactBootstrap.ListGroup.Item>
                    </ReactBootstrap.ListGroup>
                </ReactBootstrap.Col>
                <ReactBootstrap.Col sm={8}>
                    <ReactBootstrap.Tab.Content>
                        <ReactBootstrap.Tab.Pane eventKey="#link1">
                            <Career/>
                        </ReactBootstrap.Tab.Pane>
                        <ReactBootstrap.Tab.Pane eventKey="#link2">
                            <Personal/>
                        </ReactBootstrap.Tab.Pane>
                        <ReactBootstrap.Tab.Pane eventKey="#link3">
                            <Education/>
                        </ReactBootstrap.Tab.Pane>
                    </ReactBootstrap.Tab.Content>
                </ReactBootstrap.Col>
            </ReactBootstrap.Row>
        </ReactBootstrap.Tab.Container>;
    </div>


);


export default Experience;
