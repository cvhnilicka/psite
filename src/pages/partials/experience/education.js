import React from "react";
// import ListGroup from 'react-bootstrap'
import * as ReactBootstrap from 'react-bootstrap';


// Import PDFS
import ReportPDF from '../../../pdfs/lstm-report.pdf'
import Lab2PDF from '../../../pdfs/Lab2.pdf'
import ShavlikPDF from '../../../pdfs/Maclin-Shavlik1993_Article_UsingKnowledge-basedNeuralNetw.pdf'

const h3_underlined = {
    'textDecorationLine':'underline'
}


const Education = () => (
    <div className="edge-fade">
        <div className="info-block">

            <ReactBootstrap.Tab.Container id="left-tabs-example" defaultActiveKey="education">
                <ReactBootstrap.Row>

                    <ReactBootstrap.Col sm={9}>
                        <ReactBootstrap.Tab.Content>                                                            {/* BEGIN: Content Column */}


                            <ReactBootstrap.Tab.Pane eventKey="education">                                          {/* BEGIN: education Content Pane */}
                                <h3>Education</h3>
                                <p>I attended the University of Wisconsin-Madison and while there, earned a Bachelors of Science in Computer Science
                                    with an emphasis in applied mathematics.
                                </p>
                                <h5>Course Work Focused On:</h5>
                                <ul>
                                    <li>Data Science</li>
                                    <li>Machine Learning</li>
                                    <li>Systems Engineering</li>
                                </ul>
                                <h6>Some of my school projects and papers can be found to the right.</h6>

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

                            {/* =================================================================================================================================================
    ================================================ BEGIN: OS PROJECTS CONTENT PANES =================================================================================
============================================================================================================================================================================= */}



                            <ReactBootstrap.Tab.Pane eventKey="os-a">                                         {/* BEGIN: ds-a Content Pane */}
                                <div className="project-container">
                                    <h3>os-a</h3>
                                </div>
                            </ReactBootstrap.Tab.Pane>                                                          {/* END: ds-a Content Pane */}

                            <ReactBootstrap.Tab.Pane eventKey="os-b">                                         {/* BEGIN: ds-b Content Pane */}
                                <div className="project-container">
                                    <h3>os-b</h3>
                                </div>
                            </ReactBootstrap.Tab.Pane>                                                          {/* END: ds-b Content Pane */}


                            <ReactBootstrap.Tab.Pane eventKey="os-c">                                         {/* BEGIN: ds-c Content Pane */}
                                <div className="project-container">
                                    <h3>os-c</h3>
                                </div>
                            </ReactBootstrap.Tab.Pane>                                                          {/* END: ds-c Content Pane */}

                            <ReactBootstrap.Tab.Pane eventKey="os-d">                                         {/* BEGIN: ds-d Content Pane */}
                                <div className="project-container">
                                    <h3>os-d</h3>
                                </div>
                            </ReactBootstrap.Tab.Pane>                                                          {/* END: ds-d Content Pane */}



                            {/* ===============================================================================================================================================
    ================================================ END: OS PROJECTS CONTENT PANES =================================================================================
============================================================================================================================================================================= */}




                            {/* =================================================================================================================================================
    ================================================ BEGIN: DATA SCIENCE PROJECTS CONTENT PANES =================================================================================
============================================================================================================================================================================= */}



                            <ReactBootstrap.Tab.Pane eventKey="ds-a">                                         {/* BEGIN: ds-a Content Pane */}
                                <div className="project-container">
                                    <h3 style={h3_underlined}>Sentiment Analysis Using LSTMs</h3>
                                    <h5>Abstract</h5>
                                    <p>We aimed to explore the domain of sentiment analysis with multiple
                                    Long Short Term Memory (LSTM) Recurrent Neural Network architectures.
                                    LSTM cells are well suited to classify over time series related data
                                    for they provide a constant stream of relevant information through recurrence,
                                    while at the same time forgetting irrelevant information. We make use of LSTMs
                                    to predict the sentiment of an arbitrary tweet as either positive or negative. Sentiments
                                    classification is could be useful for companies in order to assess people’s
                                    sentiment about their brand, products, and services. We use the Sentiment140 dataset,
                                    it consists of tweets that were collected and labeled using emoticons that appeared in
                                    tweet. These emoticons severe as noisy labels. We also preprocessed the tweets in order
                                    to limit word embedding entries in our network. Using various LSTM architectures, our models
                                    were able to reach accuracies of over 80%.
                                    </p>
                                    <br/>
                                    <br/>
                                    <a target="_blank" href="https://github.com/ede0m/lstm_sent140">Github Repo</a>
                                    <br/>
                                    <a target='_blank' href={ReportPDF}>Report</a>
                                </div>
                            </ReactBootstrap.Tab.Pane>                                                          {/* END: ds-a Content Pane */}

                            <ReactBootstrap.Tab.Pane eventKey="ds-b">                                         {/* BEGIN: ds-b Content Pane */}
                                <div className="project-container">
                                    <h3 style={h3_underlined}>Protein Secondary Structure Folding ANN</h3>
                                    <p>
                                    The second lab for my Deep Learning class focused on replicating
                                    previous work done by our professor, Jude Shavlik. It involved
                                    utilizing a sliding window to predict a protein's secondary structure.
                                    </p>
                                    <br/>


                                    <h4>Data Set</h4>
                                    <p>Test set for study of secondary structure of globular proteins by <strong>Ning Qing</strong> and <strong>Terry Sejnowski.</strong></p>
                                    <p>There were 128 protiens in the UC-Irvine archive. Train and Test were combined into one file (with train in front). Data was split into three test sets for our version of this network: Train, Tune and Test.</p>

                                    <p>Out of 128 proteins, they were broken up as follows:</p>
                                    <ul>
                                        <li>tune: index % 5 = 0</li>
                                        <li>train: index % 6 = 0</li>
                                        <li>test: the rest of the proteins</li>
                                    </ul>

                                    <h4>Network</h4>

                                    <p>This network is implemented with:</p>
                                    <ul>
                                        <li>Hinton's Droput</li>
                                        <li>Momentum Term for backpropagation</li>
                                        <li>Early Stopping</li>
                                    </ul>
                                    <p>Network preforms best with the configuration found in the main method.</p>
                                    <br/>
                                    <a target='_blank' href={ShavlikPDF}>Approminately replicated methodology</a>
                                    <br/>
                                    <a target='_blank' href={Lab2PDF}>Report</a>
                                    <br/>
                                    <a target='_blank' href="https://github.com/ede0m/Protein_SSF_ANN">Repo</a>
                                    <br/>
                                    <br/>
                                </div>
                            </ReactBootstrap.Tab.Pane>                                                          {/* END: ds-b Content Pane */}


                            <ReactBootstrap.Tab.Pane eventKey="ds-c">                                         {/* BEGIN: ds-c Content Pane */}
                                <div className="project-container">
                                    <h3 style={h3_underlined}>Wine Perceptron</h3>
                                    <p>This was the first perceptron that I wrote in Java. It was our initial homework for my Deep Learning class and we were create a perceptron
                                        to categorize the <a style={{float: "none"}} target="_blank" href="https://archive.ics.uci.edu/ml/datasets/wine">UC Irvine - Wine</a> as well as the 
                                        <a style={{float: "none"}} target="_blank" href="https://archive.ics.uci.edu/ml/datasets/Thoracic+Surgery+Data">UC Irvine - Thoracic Surgery</a> datasets.
                                    </p>
                                    <br/>
                                    <a target="_blank" href="https://github.com/cvhnilicka/wine-perceptron">Repo</a>

                                </div>
                            </ReactBootstrap.Tab.Pane>                                                          {/* END: ds-c Content Pane */}


                            {/* ===============================================================================================================================================
    ================================================ END: DATA SCIENCE PROJECTS CONTENT PANES =================================================================================
============================================================================================================================================================================= */}


                        </ReactBootstrap.Tab.Content>                                                           {/* END: Content Column */}
                    </ReactBootstrap.Col>

                    <ReactBootstrap.Col sm={3}>                                                                 {/* BEGIN: Tab Column */}

                        <ReactBootstrap.Nav variant="pills" className="flex-column">                            {/* BEGIN: NAV */}

                            <ReactBootstrap.Nav.Item>
                                <ReactBootstrap.Nav.Link eventKey="education">Education</ReactBootstrap.Nav.Link>      {/* Nav Tab */}
                            </ReactBootstrap.Nav.Item>

                            <h5>Data Science Projects</h5>

                            <ReactBootstrap.Nav.Item>
                                <ReactBootstrap.ListGroup as="ul">
                                    <ReactBootstrap.ListGroup.Item as={ReactBootstrap.Nav.Link} eventKey="ds-a">
                                        Sentiment Analysis - LSTM
                                    </ReactBootstrap.ListGroup.Item>


                                    <ReactBootstrap.ListGroup.Item as={ReactBootstrap.Nav.Link} eventKey="ds-b">
                                        Protein Secondary Structure Folding - ANN
                                    </ReactBootstrap.ListGroup.Item>
                                    <ReactBootstrap.ListGroup.Item as={ReactBootstrap.Nav.Link} eventKey="ds-c">
                                        Wine Perceptron
                                    </ReactBootstrap.ListGroup.Item>
                                </ReactBootstrap.ListGroup>
                            </ReactBootstrap.Nav.Item>

                        </ReactBootstrap.Nav>                                                                   {/* END: NAV */}







                        {/* BEGIN: NAV */}  
                        {/* <ReactBootstrap.Nav variant="pills" className="flex-column">                            
                            <h5>OS Projects</h5>

                            <ReactBootstrap.Nav.Item>
                                <ReactBootstrap.ListGroup as="ul">
                                    <ReactBootstrap.ListGroup.Item as={ReactBootstrap.Nav.Link} eventKey="os-a">
                                        A
                                    </ReactBootstrap.ListGroup.Item>


                                    <ReactBootstrap.ListGroup.Item as={ReactBootstrap.Nav.Link} eventKey="os-b">
                                        B
                                    </ReactBootstrap.ListGroup.Item>
                                    <ReactBootstrap.ListGroup.Item as={ReactBootstrap.Nav.Link} eventKey="os-c">
                                        C
                                    </ReactBootstrap.ListGroup.Item>
                                    <ReactBootstrap.ListGroup.Item as={ReactBootstrap.Nav.Link} eventKey="os-d">
                                        D
                                    </ReactBootstrap.ListGroup.Item>
                                </ReactBootstrap.ListGroup>
                            </ReactBootstrap.Nav.Item>



                        </ReactBootstrap.Nav>                                                                    */}
                        {/* END: NAV */}
                    </ReactBootstrap.Col>                                                                       {/* END: Tab Column */}
                </ReactBootstrap.Row>
            </ReactBootstrap.Tab.Container>;
</div>
    </div>
);


export default Education;
