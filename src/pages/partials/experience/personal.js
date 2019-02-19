import React from "react";
import * as ReactBootstrap from 'react-bootstrap';

const Personal = () => (
    <div className="edge-fade">
        <div className="info-block">

            <ReactBootstrap.Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <ReactBootstrap.Row>

                    <ReactBootstrap.Col sm={9}>
                        <ReactBootstrap.Tab.Content>                                                            {/* BEGIN: Content Column */}


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

                            <ReactBootstrap.Tab.Pane eventKey="third">                                         {/* BEGIN: Third Content Pane */}
                                <div className="project-container">
                                    <h3>Mail Room Logistics</h3>
                                    <a target="_blank" href="https://github.com/cvhnilicka/MailRoomLogistics">Repo</a>
                                    <p>The beginning of an Android application for my university's tech department to use in their mailroom for logistics </p>
                                </div>
                            </ReactBootstrap.Tab.Pane>                                                          {/* END: Third Content Pane */}



                            <ReactBootstrap.Tab.Pane eventKey="fifth">                                         {/* BEGIN: Fifth Content Pane */}
                                <div className="project-container">
                                    <h3>Appointment Application</h3>
                                    <a target="_blank" href="https://github.com/cvhnilicka/Appointment-verison1">Repo</a>
                                    <p>An application to set up appointments with our Tech Department</p>
                                </div>
                            </ReactBootstrap.Tab.Pane>                                                          {/* END: Fifth Content Pane */}

                            <ReactBootstrap.Tab.Pane eventKey="sixth">                                         {/* BEGIN: Sixth Content Pane */}
                                <div className="project-container">
                                    <h3>Personal AI</h3>
                                    <a target="_blank" href="https://github.com/cvhnilicka/PersonalAI">PersonalAI</a>
                                    <a target="_blank" href="https://github.com/cvhnilicka/lil_bill">Lil Bill</a>
                                    <p>A couple of attempts messing around with building an  'ai' assistent.</p>
                                </div>
                            </ReactBootstrap.Tab.Pane>                                                          {/* END: Sixth Content Pane */}

                        </ReactBootstrap.Tab.Content>                                                           {/* END: Content Column */}
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col sm={3}>                                                                 {/* BEGIN: Tab Column */}
                        <ReactBootstrap.Nav variant="pills" className="flex-column">                            {/* BEGIN: NAV */}
                            <h5>Personal Projects</h5>

                            <ReactBootstrap.Nav.Item>
                                <ReactBootstrap.Nav.Link eventKey="first">RaspberryPiServer</ReactBootstrap.Nav.Link>       {/* Nav Tab */}
                            </ReactBootstrap.Nav.Item>


                            <ReactBootstrap.Nav.Item>
                                <ReactBootstrap.Nav.Link eventKey="second">Coffeescript Chat Server</ReactBootstrap.Nav.Link>      {/* Nav Tab */}
                            </ReactBootstrap.Nav.Item>

                            <ReactBootstrap.Nav.Item>
                                <ReactBootstrap.Nav.Link eventKey="third">Mail Room Logistics</ReactBootstrap.Nav.Link>      {/* Nav Tab */}
                            </ReactBootstrap.Nav.Item>

                            <ReactBootstrap.Nav.Item>
                                <ReactBootstrap.Nav.Link eventKey="fifth">Appointment Application</ReactBootstrap.Nav.Link>      {/* Nav Tab */}
                            </ReactBootstrap.Nav.Item>


                            <ReactBootstrap.Nav.Item>
                                <ReactBootstrap.Nav.Link eventKey="sixth">Personal AI</ReactBootstrap.Nav.Link>      {/* Nav Tab */}
                            </ReactBootstrap.Nav.Item>


                        </ReactBootstrap.Nav>                                                                   {/* END: NAV */}
                    </ReactBootstrap.Col>                                                                       {/* END: Tab Column */}
                </ReactBootstrap.Row>
            </ReactBootstrap.Tab.Container>;
</div>
    </div>
);


export default Personal;
