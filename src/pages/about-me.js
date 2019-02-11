import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class AboutMe extends Component {


    render() {
        return (
            <Router>
            <Route path="/about" component={Topics} />
            </Router>
        );
    }
}

class Topic extends Component {



    constructor(props) {
        super(props);

        this.state = {
            contentMap: {
                'climbing': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Dui ut ornare lectus sit amet. Pulvinar proin gravida hendrerit lectus. Nisl suscipit adipiscing bibendum est ultricies. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Odio eu feugiat pretium nibh ipsum consequat nisl. Viverra vitae congue eu consequat ac felis. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Tincidunt eget nullam non nisi est. At erat pellentesque adipiscing commodo elit. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Nunc sed blandit libero volutpat sed cras ornare. Etiam erat velit scelerisque in dictum non consectetur a erat. Faucibus interdum posuere lorem ipsum dolor sit amet.",
                'camping': "Volutpat odio facilisis mauris sit amet massa vitae. Ultrices in iaculis nunc sed augue lacus. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Odio ut sem nulla pharetra diam sit amet nisl. Arcu cursus euismod quis viverra nibh cras. Sed libero enim sed faucibus turpis in eu mi bibendum. Faucibus pulvinar elementum integer enim neque. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Tortor at risus viverra adipiscing at in tellus integer feugiat. Pellentesque massa placerat duis ultricies lacus sed. Elit at imperdiet dui accumsan sit amet nulla. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Ultrices dui sapien eget mi proin sed libero. Condimentum id venenatis a condimentum vitae.",
                'get-lost': "Malesuada fames ac turpis egestas sed. Nunc mattis enim ut tellus elementum sagittis vitae et leo. In iaculis nunc sed augue lacus viverra vitae congue. Tincidunt dui ut ornare lectus sit amet. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Nunc mattis enim ut tellus elementum sagittis vitae et leo. Suspendisse potenti nullam ac tortor. Orci dapibus ultrices in iaculis nunc sed augue lacus. Egestas sed tempus urna et pharetra pharetra massa. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Vulputate mi sit amet mauris commodo. Ornare aenean euismod elementum nisi quis."
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
        return (

            <div className="content">
            <ReactCSSTransitionGroup
            transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={100}
          transitionAppear={true}
          transitionAppearTimeout={500}>
            <h3 key={topicId}>{topicId}</h3>
            <p key={index}>{this.state.contentMap[this.props.match.params.topicId]}</p>
            </ReactCSSTransitionGroup>
            </div>


        );
    }
}


const Topics = ({ match }) => (
    <div className="page-container">
    <div className="side-bar">
    <h2>Beyond the code</h2>
    <ul>
    <li>
    <Link className='side-bar-link' to={`${match.url}/climbing`}>Climbing</Link>
    </li>
    <li>
    <Link className='side-bar-link' to={`${match.url}/camping`}>Camping</Link>
    </li>
    <li>
    <Link className='side-bar-link' to={`${match.url}/get-lost`}>Getting Lost</Link>
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



export default AboutMe;
