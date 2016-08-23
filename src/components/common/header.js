"use strict";

var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <Link activeClassName="active" to="app" className="navbar-brand">
                        <img src="images/pluralsight-logo.png"/>
                    </Link>
                    <ul className="nav navbar-nav">
                        <li><Link activeClassName="active" to="app">Home</Link></li>
                        <li><Link activeClassName="active" to="about">About</Link></li>
                        <li><Link activeClassName="active" to="authors">Authors</Link></li>
                        <li><Link activeClassName="active" to="courses">Courses</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;
