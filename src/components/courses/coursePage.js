"use strict";

var Link = require('react-router').Link;
var React = require('react');

var CourseList = require('./courseList');
var CourseStore = require('../../stores/courseStore');
var AuthorStore = require('../../stores/authorStore');

var CoursePage = React.createClass({
    getInitialState: function() {
        return {
            authors: AuthorStore.getAllAuthors(),
            courses: CourseStore.getAllCourses()
        };
    },

    componentWillMount: function() {
        CourseStore.addChangeListener(this._onChange);
    },

    //Clean up when this component is unmounted
    componentWillUnmount: function() {
        CourseStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState({ courses: CourseStore.getAllCourses() });
    },

    render: function() {
        return (
            <div>
                <h1>Courses</h1>
                <Link activeClassName="active" to="addCourse" className="btn btn-default">Add Course</Link>
                <CourseList authors={this.state.authors} courses={this.state.courses} />
            </div>
        );
    }
});

module.exports = CoursePage;
