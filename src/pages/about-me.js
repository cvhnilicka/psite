import React from "react";
import * as ReactBootstrap from 'react-bootstrap';

// BEGIN: Import Partial Components 
import GetLost from './partials/about-me/get-lost'
import Camping from './partials/about-me/camping';
import Climbing from './partials/about-me/climbing';
// END: Import Partial Components 


const AboutMe = () => (
    <div className="page-container">
        <ReactBootstrap.Tab.Container id="list-group-tabs-example" defaultActiveKey="#climbing">
            <ReactBootstrap.Row>
                <ReactBootstrap.Col sm={3}>
                    <h4>Beyond the Code</h4>
                    <ReactBootstrap.ListGroup variant="flush">
                        <ReactBootstrap.ListGroup.Item action href="#climbing">
                            Climbing
        </ReactBootstrap.ListGroup.Item>
                        <ReactBootstrap.ListGroup.Item action href="#camping">
                            Camping
        </ReactBootstrap.ListGroup.Item>
                        <ReactBootstrap.ListGroup.Item action href="#getlost">
                            Getting Lost
        </ReactBootstrap.ListGroup.Item>
                    </ReactBootstrap.ListGroup>
                </ReactBootstrap.Col>
                <ReactBootstrap.Col sm={8}>
                    <ReactBootstrap.Tab.Content>
                        <ReactBootstrap.Tab.Pane eventKey="#climbing">
                            <Climbing />
                        </ReactBootstrap.Tab.Pane>
                        <ReactBootstrap.Tab.Pane eventKey="#camping">
                            <Camping />
                        </ReactBootstrap.Tab.Pane>
                        <ReactBootstrap.Tab.Pane eventKey="#getlost">
                            <GetLost />
                        </ReactBootstrap.Tab.Pane>
                    </ReactBootstrap.Tab.Content>
                </ReactBootstrap.Col>
            </ReactBootstrap.Row>
        </ReactBootstrap.Tab.Container>;
    </div>

);

export default AboutMe;
