import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


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

        this.state = {
            contentMap: {
                'career': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Dui ut ornare lectus sit amet. Pulvinar proin gravida hendrerit lectus. Nisl suscipit adipiscing bibendum est ultricies. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Odio eu feugiat pretium nibh ipsum consequat nisl. Viverra vitae congue eu consequat ac felis. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Tincidunt eget nullam non nisi est. At erat pellentesque adipiscing commodo elit. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Nunc sed blandit libero volutpat sed cras ornare. Etiam erat velit scelerisque in dictum non consectetur a erat. Faucibus interdum posuere lorem ipsum dolor sit amet.",
                'education': "Education",
                'personal': "Malesuada fames ac turpis egestas sed. Nunc mattis enim ut tellus elementum sagittis vitae et leo. In iaculis nunc sed augue lacus viverra vitae congue. Tincidunt dui ut ornare lectus sit amet. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Nunc mattis enim ut tellus elementum sagittis vitae et leo. Suspendisse potenti nullam ac tortor. Orci dapibus ultrices in iaculis nunc sed augue lacus. Egestas sed tempus urna et pharetra pharetra massa. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Vulputate mi sit amet mauris commodo. Ornare aenean euismod elementum nisi quis."
            },
            animate: false,
        }
    }

    componentDidMount() {
        requestAnimationFrame(() => {
      // Firefox will sometimes merge changes that happened here
      requestAnimationFrame(() => {
        this.setState({animate: true});
    });
});
    }

    render() {

        const topicId = this.props.match.params.topicId;
        const index = this.state.contentMap[this.props.match.params.topicId].substr(0,1);

        if (topicId == 'education') {
            return (
                <div className="content">
                <ReactCSSTransitionGroup
                transitionName="fade"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={100}
              transitionAppear={true}
              transitionAppearTimeout={500}>
                <h3 key={topicId}>{topicId}</h3>
                <Education/>
                </ReactCSSTransitionGroup>
                </div>
            );
        } else if (topicId == 'career') {

        return (

            <div className="content">
            <ReactCSSTransitionGroup
            transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={100}
          transitionAppear={true}
          transitionAppearTimeout={500}>
            <Career/>
            </ReactCSSTransitionGroup>
            </div>


        );
    } else if (topicId == 'personal') {

    return (

        <div className="content">
        <ReactCSSTransitionGroup
        transitionName="fade"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={100}
      transitionAppear={true}
      transitionAppearTimeout={500}>
        <Personal/>
        </ReactCSSTransitionGroup>
        </div>


    );
}
    }
}


const Topics = ({ match }) => (
    <div className="page-container">
    <div className="side-bar">
    <h2>Beyond the code</h2>
    <ul>
    <li>
    <Link className='side-bar-link' to={`${match.url}/career`}>Career</Link>
    </li>
    <li>
    <Link className='side-bar-link' to={`${match.url}/personal`}>Personal Projects</Link>
    </li>
    <li>
    <Link className='side-bar-link' to={`${match.url}/education`}>Education</Link>
    </li>
    </ul>
    </div>
    <hr className="vertical-line"/>
    <div className="content-box">
    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
    exact
    path={match.url}
    render={() => <h3>Please select a topic.</h3>}
    />
    </div>
    </div>


);

const Personal = () => (
    <h3>Personal projects</h3>
);

const Education = () => (
    <h3>University of Wisconsin-Madison</h3>
);

const Career = () => (
    <div className="edge-fade">
    <div className="info-block">
        <ul>
            <li className="career-position">
                <div className="career-container">
                    <h3>Software Engineer</h3><h4>CDK Global</h4>

                    <p className="career-dates">March 2018 - Present</p>
                    <hr style={{width: `inherit`}}/>
                    <div className="position-details">

                    <h5>Application Performance Monitoring</h5>
                    <ul>
                        <li>Research and present solutions for monitoring applications while in production</li>
                        <li>Implement software monitoring solutions to our global infrastructure</li>
                        <li>Analyze AppDynamics data to identify underperforming applications</li>
                        <li>Consult global application teams on the health of their application and where
        improvements can be made</li>
                    </ul>
                    </div>
                    <div className="position-details">

                    <h5>Development Operations</h5>
                    <ul>
                        <li>Research and present solutions for our global development pipeline to optimize
        productivity while reducing overhead</li>
                        <li>Implement, monitor, and support the development pipeline that is used by over
        8,000 engineers globally</li>
                        <li>Create in-house plugins for our development pipeline tools</li>
                    </ul>
                </div>
                </div>
            </li>
            <li className="career-position">
                <div className="career-container">
                    <h3>Software Engineer - Intern</h3><h4>CDK Global</h4>
                    <p className="career-dates">Summer 2017</p>
                    <div className="position-details">
                    <h5>Application Lyfecycle management</h5>
                    <ul>
                        <li>Built a platform that would audit each development team by gathering data on
their development process, analyzing the use of our tools, and then
determining a maturation level for each team</li>
                        <li>This platform helped catch large data anomalies that sparked the start of a
year long project</li>
                    </ul>
                    </div>
                </div>
            </li>




            <li className="career-position">
                <div className="career-container">
                    <h3>Chief Technical Officer</h3><h4>Akuraa Technologies</h4>
                    <p className="career-dates">January 2018 - December 2018</p>
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
            </li>
            <li className="career-position">
                <div className="career-container">
                    <h3>Co-Founder</h3><h4>Mutika Solutions</h4>
                    <p className="career-dates">October 2017 - February 2018</p>
                    <div className="position-details">
                    <h5>Technical Manager</h5>
                    <ul>
                        <li>Built quick, scalable, data-driven applications</li>
                    </ul>
                    </div>
                </div>
            </li>
        </ul>
        <br/>
    </div>
    </div>
);



export default Experience;
