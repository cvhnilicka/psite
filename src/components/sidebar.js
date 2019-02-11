import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        return (
        <div className="side-bar">
            <h2>Beyond the code</h2>
            <ul>
                <li>
                    <Link className='side-bar-link'  to={`${this.props.match.url}/climbing`}>Climbing</Link>
                </li>
                <li>
                    <Link className='side-bar-link'  to={`${this.props.match.url}/camping`}>Camping</Link>
                </li>
                <li>
                    <Link  className='side-bar-link' to={`${this.props.match.url}/get-lost`}>Getting Lost</Link>
                </li>
            </ul>

            <Route path={`${this.props.match.url}/:topidId`} component={Topic} />
            <Route
            exact
            path={this.props.match.url}
            render={() => <h4>Please select a topic</h4>}
            />
        </div>
    );
    }

}


const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topidId}</h3>
    </div>
);

export default Sidebar;
