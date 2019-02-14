import React from "react";
// import ListGroup from 'react-bootstrap'
import * as ReactBootstrap from 'react-bootstrap';




const Education = () => (
    <div className="edge-fade">
        <div className="info-block">

            <ReactBootstrap.Tab.Container id="left-tabs-example" defaultActiveKey="education">
                <ReactBootstrap.Row>

                    <ReactBootstrap.Col sm={9}>
                        <ReactBootstrap.Tab.Content>                                                            {/* BEGIN: Content Column */}


                            <ReactBootstrap.Tab.Pane eventKey="education">                                          {/* BEGIN: education Content Pane */}
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

                            </ReactBootstrap.Tab.Pane>                                                          {/* END: education Content Pane */}


                            <ReactBootstrap.Tab.Pane eventKey="first">                                          {/* BEGIN: First Content Pane */}
                                <div className="project-container">
                                    <h3>RaspberryPiServer</h3>
                                    <a target="_blank" href="https://github.com/cvhnilicka/RaspberryPiServer">Repo</a>
                                    <p>A simple socket server running in my house to keep a live report of smart light usage as well as current load on the network. </p>
                                </div>
                            </ReactBootstrap.Tab.Pane>                                                          {/* END: First Content Pane */}


                            <ReactBootstrap.Tab.Pane eventKey="second">                                         {/* BEGIN: Second Content Pane */}
                                <div className="project-container">
                                    <h3>Coffeescript Chat Server</h3>
                                    <a target="_blank" href="https://github.com/cvhnilicka/chatRoomCoffee">Repo</a>
                                    <p>A simple socket server written with Coffeescript that provides a live chat environment. </p>
                                </div>
                            </ReactBootstrap.Tab.Pane>                                                          {/* END: Second Content Pane */}


                        </ReactBootstrap.Tab.Content>                                                           {/* END: Content Column */}
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col sm={3}>                                                                 {/* BEGIN: Tab Column */}

                        <ReactBootstrap.Nav variant="pills" className="flex-column">                            {/* BEGIN: NAV */}

                            <ReactBootstrap.Nav.Item>
                                <ReactBootstrap.Nav.Link eventKey="education">Education</ReactBootstrap.Nav.Link>      {/* Nav Tab */}
                            </ReactBootstrap.Nav.Item>


                            <h5>OS Projects</h5>

                            <ReactBootstrap.Nav.Item>
                                <ReactBootstrap.ListGroup as="ul">
                                    <ReactBootstrap.ListGroup.Item as={ReactBootstrap.Nav.Link} eventKey="second">
                                        Cras justo odio
  </ReactBootstrap.ListGroup.Item>
                                    <ReactBootstrap.ListGroup.Item as="li">Dapibus ac facilisis in</ReactBootstrap.ListGroup.Item>
                                    <ReactBootstrap.ListGroup.Item as="li">
                                        Morbi leo risus
  </ReactBootstrap.ListGroup.Item>
                                    <ReactBootstrap.ListGroup.Item as="li">Porta ac consectetur ac</ReactBootstrap.ListGroup.Item>
                                </ReactBootstrap.ListGroup>;
                            </ReactBootstrap.Nav.Item>



                        </ReactBootstrap.Nav>                                                                   {/* END: NAV */}








                        <ReactBootstrap.Nav variant="pills" className="flex-column">                            {/* BEGIN: NAV */}
                            <h5>DS projects</h5>

                            <ReactBootstrap.Nav.Item>
                                <ReactBootstrap.ListGroup as="ul">
                                    <ReactBootstrap.ListGroup.Item as={ReactBootstrap.Nav.Link} eventKey="second">
                                        Cras justo odio
  </ReactBootstrap.ListGroup.Item>
                                    <ReactBootstrap.ListGroup.Item as="li">Dapibus ac facilisis in</ReactBootstrap.ListGroup.Item>
                                    <ReactBootstrap.ListGroup.Item as="li">
                                        Morbi leo risus
  </ReactBootstrap.ListGroup.Item>
                                    <ReactBootstrap.ListGroup.Item as="li">Porta ac consectetur ac</ReactBootstrap.ListGroup.Item>
                                </ReactBootstrap.ListGroup>;
                            </ReactBootstrap.Nav.Item>


                        </ReactBootstrap.Nav>                                                                   {/* END: NAV */}
                    </ReactBootstrap.Col>                                                                       {/* END: Tab Column */}
                </ReactBootstrap.Row>
            </ReactBootstrap.Tab.Container>;
</div>
    </div>
);


export default Education;