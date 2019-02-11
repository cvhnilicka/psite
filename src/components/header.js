import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
    <header
    style={{
        background: `#5c5cd6`,
        marginBottom: `1.45rem`,
    }}
    >
    <Router>
        <div
        style={{
            margin: `0 auto`,
            maxWitdh: 960,
            padding: `1.45rem 1.0875rem`,
        }}
        >
            <h1 style={{ margin: 0 }}>
                <Route
                path="/"
                style={{
                    color: `white`,
                    textDecoration: `none`,
                }}>
                </Route>
            </h1>
        </div>
        </Router>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Cormick Hnilicka`,
}

export default Header
