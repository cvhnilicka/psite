import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Career from "./partials/experience/career"
import Personal from "./partials/experience/personal"

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
                this.setState({ animate: true });
            });
        });
    }

    render() {

        const topicId = this.props.match.params.topicId;
        const index = this.state.contentMap[this.props.match.params.topicId].substr(0, 1);

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

const Topics = ({ match }) => (
    <div className="page-container">
        <div className="side-bar">
            <h2>Experience</h2>
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
        <hr className="vertical-line" />
        <div className="content-box">
            <Route path={`${match.url}/:topicId`} component={Topic} />
            <Route
                exact
                path={match.url}
                render={() => <Career />}
            />
        </div>
    </div>


);

const Education = () => (
    <h3>University of Wisconsin-Madison</h3>
);


export default Experience;
