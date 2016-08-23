"use strict";

var React = require('react');
var Router = require('react-router');

var InitializeActions = require('./actions/initializeActions');
var routes = require('./routes');

InitializeActions.initApp();

Router.run(routes, function(Handler) {
	React.render(<Handler/>, document.getElementById('app'));
});
