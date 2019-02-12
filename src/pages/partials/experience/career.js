import React from "react";
import * as ReactBootstrap from 'react-bootstrap';


const Career = () => (
    <div className="edge-fade">
        <div className="info-block">
        <ReactBootstrap.Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <ReactBootstrap.Row>

                    <ReactBootstrap.Col sm={9}>
                        <ReactBootstrap.Tab.Content>                                                            {/* BEGIN: Content Column */}


                            <ReactBootstrap.Tab.Pane eventKey="first">                                          {/* BEGIN: First Content Pane */}
                            <div className="career-container">
                        <h3>Software Engineer</h3><h4>CDK Global</h4>

                        <p className="career-dates">March 2018 - Present</p>


                        <hr style={{ width: `inherit` }} /> {/* HORIZONTAL BREAK*/}
                        
                        
                        <div className="position-details">

                            <h5>Application Performance Monitoring</h5>
                            <ul>
                                <li>Research and present solutions for monitoring applications while in production</li>
                                <li>Implement software monitoring solutions to our global infrastructure</li>
                                <li>Analyze AppDynamics data to identify underperforming applications</li>
                                <li>Consult global application teams on the health of their application and where improvements can be made</li>
                            </ul>
                        </div>
                        <div className="position-details">

                            <h5>Development Operations</h5>
                            <ul>
                                <li>Research and present solutions for our global development pipeline to optimize productivity while reducing overhead</li>
                                <li>Implement, monitor, and support the development pipeline that is used by over 8,000 engineers globally</li>
                                <li>Create in-house plugins for our development pipeline tools</li>
                            </ul>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="career-container">
                        <h3>Software Engineer - Intern</h3><h4>CDK Global</h4>
                        <p className="career-dates">Summer 2017</p>

                        <hr style={{ width: `inherit` }} /> {/* HORIZONTAL BREAK*/}

                        <div className="position-details">
                            <h5>Application Lyfecycle management</h5>
                            <ul>
                                <li>Built a platform that would audit each development team by gathering data on their development process, analyzing the use of our tools, and then determining a maturation level for each team</li>
                                <li>This platform helped catch large data anomalies that sparked the start of a year long project</li>
                            </ul>
                        </div>
                    </div>
                            </ReactBootstrap.Tab.Pane>                                                          {/* END: First Content Pane */}


                            <ReactBootstrap.Tab.Pane eventKey="second">                                         {/* BEGIN: Second Content Pane */}
                            <div className="career-container">
                        <h3>Chief Technical Officer</h3><h4>Akuraa Technologies</h4>
                        <p className="career-dates">January 2018 - December 2018</p>

                        <hr style={{ width: `inherit` }} /> {/* HORIZONTAL BREAK*/}

                        <div className="position-details">
                            <h5>AkuComm</h5>
                            <ul>
                                <li>Implemented an agile software development process to organize and manage
a team of engineers spanning eight different time zones</li>
                                <li>TLed team of fellow engineers in database structure</li>
                                <li>Led the successful engineering of the backend and socket servers while
assisting with the front end server</li>
                                <li>Communicated development updates to the AkuComm founders</li>
                            </ul>
                        </div>
                    </div>
                            </ReactBootstrap.Tab.Pane>                                                          {/* END: Second Content Pane */}

                            <ReactBootstrap.Tab.Pane eventKey="third">                                         {/* BEGIN: Third Content Pane */}
                            <div className="career-container">
                        <h3>Co-Founder</h3><h4>Mutika Solutions</h4>
                        <p className="career-dates">October 2017 - February 2018</p>

                        <hr style={{ width: `inherit` }} /> {/* HORIZONTAL BREAK*/}

                        <div className="position-details">
                            <h5>Technical Manager</h5>
                            <ul>
                                <li>Built quick, scalable, data-driven applications</li>
                            </ul>
                        </div>
                    </div>
                            </ReactBootstrap.Tab.Pane>                                                          {/* END: Third Content Pane */}

                        </ReactBootstrap.Tab.Content>                                                           {/* END: Content Column */}
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col sm={3}>                                                                 {/* BEGIN: Tab Column */}
                        <ReactBootstrap.Nav variant="pills" className="flex-column">                            {/* BEGIN: NAV */}
                            <h5>Career Experience</h5>

                            <ReactBootstrap.Nav.Item>
                                <ReactBootstrap.Nav.Link eventKey="first">CDK Global</ReactBootstrap.Nav.Link>       {/* Nav Tab */}
                            </ReactBootstrap.Nav.Item>


                            <ReactBootstrap.Nav.Item>
                                <ReactBootstrap.Nav.Link eventKey="second">Akuraa Technologies</ReactBootstrap.Nav.Link>      {/* Nav Tab */}
                            </ReactBootstrap.Nav.Item>

                            <ReactBootstrap.Nav.Item>
                                <ReactBootstrap.Nav.Link eventKey="third">Mutika Solutions</ReactBootstrap.Nav.Link>      {/* Nav Tab */}
                            </ReactBootstrap.Nav.Item>

                        </ReactBootstrap.Nav>                                                                   {/* END: NAV */}
                    </ReactBootstrap.Col>                                                                       {/* END: Tab Column */}
                </ReactBootstrap.Row>
            </ReactBootstrap.Tab.Container>;
            <br />
            <br />
        </div>
    </div>
);

export default Career;