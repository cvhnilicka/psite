import React from "react";
import * as ReactBootstrap from 'react-bootstrap';

// BEGIN: Import Partial Components 
import Career from "./partials/experience/career";
import Personal from "./partials/experience/personal";
import Education from "./partials/experience/education";
// END: Import Partial Components 



const Experience = () => (
    <div className="page-container">
        <ReactBootstrap.Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <ReactBootstrap.Row>
                <ReactBootstrap.Col sm={3}>
                    <h4>Experience</h4>
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
                            <Career />
                        </ReactBootstrap.Tab.Pane>
                        <ReactBootstrap.Tab.Pane eventKey="#link2">
                            <Personal />
                        </ReactBootstrap.Tab.Pane>
                        <ReactBootstrap.Tab.Pane eventKey="#link3">
                            <Education />
                        </ReactBootstrap.Tab.Pane>
                    </ReactBootstrap.Tab.Content>
                </ReactBootstrap.Col>
            </ReactBootstrap.Row>
        </ReactBootstrap.Tab.Container>;
    </div>


);


export default Experience;
