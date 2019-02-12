import React from "react";
// import ListGroup from 'react-bootstrap'
import * as ReactBootstrap from 'react-bootstrap';

const Education = () => (
    <div className="info-block">
        <h3>Education Page</h3>
        <p>Here will be  a blurb about UW Madison and my time there</p>
        <ul>
            <li>This list will show projects from school.</li>
            <li>OS Projects</li>
            <li>Data Science/DeepLearning Projects</li>
            <li>Other?</li>
            <div className="panel panel-default">
                <div className="panel-body">A Basic Panel</div>
            </div>
        </ul>

        <ReactBootstrap.ListGroup variant="flush">
            <ReactBootstrap.ListGroup.Item>Cras justo odio</ReactBootstrap.ListGroup.Item>
            <ReactBootstrap.ListGroup.Item>Dapibus ac facilisis in</ReactBootstrap.ListGroup.Item>
            <ReactBootstrap.ListGroup.Item>Morbi leo risus</ReactBootstrap.ListGroup.Item>
            <ReactBootstrap.ListGroup.Item>Porta ac consectetur ac</ReactBootstrap.ListGroup.Item>
        </ReactBootstrap.ListGroup>


        <ReactBootstrap.Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <ReactBootstrap.Row>
                <ReactBootstrap.Col sm={4}>
                    <ReactBootstrap.ListGroup variant="flush">
                        <ReactBootstrap.ListGroup.Item action href="#link1">
                            Link 1
        </ReactBootstrap.ListGroup.Item>
                        <ReactBootstrap.ListGroup.Item action href="#link2">
                            Link 2
        </ReactBootstrap.ListGroup.Item>
        <ReactBootstrap.ListGroup.Item action href="#link3">
                            Link 3
        </ReactBootstrap.ListGroup.Item>
                        <ReactBootstrap.ListGroup.Item action href="#link4">
                            Link 4
        </ReactBootstrap.ListGroup.Item>
        <ReactBootstrap.ListGroup.Item action href="#link5">
                            Link 5
        </ReactBootstrap.ListGroup.Item>
                        <ReactBootstrap.ListGroup.Item action href="#link6">
                            Link 6
        </ReactBootstrap.ListGroup.Item>
                    </ReactBootstrap.ListGroup>
                </ReactBootstrap.Col>
                <ReactBootstrap.Col sm={8}>
                    <ReactBootstrap.Tab.Content>
                        <ReactBootstrap.Tab.Pane eventKey="#link1">
                            <h3>page 1</h3>
                        </ReactBootstrap.Tab.Pane>
                        <ReactBootstrap.Tab.Pane eventKey="#link2">
                            <h3>page 2</h3>
                        </ReactBootstrap.Tab.Pane>
                        <ReactBootstrap.Tab.Pane eventKey="#link3">
                            <h3>page 3</h3>
                        </ReactBootstrap.Tab.Pane>
                        <ReactBootstrap.Tab.Pane eventKey="#link4">
                            <h3>page 4</h3>
                        </ReactBootstrap.Tab.Pane>
                        <ReactBootstrap.Tab.Pane eventKey="#link5">
                            <h3>page 5</h3>
                        </ReactBootstrap.Tab.Pane>
                        <ReactBootstrap.Tab.Pane eventKey="#link6">
                            <h3>page 6</h3>
                        </ReactBootstrap.Tab.Pane>
                    </ReactBootstrap.Tab.Content>
                </ReactBootstrap.Col>
            </ReactBootstrap.Row>
        </ReactBootstrap.Tab.Container>;
    </div>
);

export default Education;