"use strict";

var React = require('react');
var Router = require('react-router');
var toastr = require('toastr');

var AuthorStore = require('../../stores/authorStore');
var CourseActions = require('../../actions/courseActions');
var CourseForm = require('./courseForm');
var CourseStore = require('../../stores/courseStore');

var ManageCoursePage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom: function(transition, component) {
            if (component.state.dirty && !confirm('Leave without saving?')) {
                transition.abort();
            }
        }
    },

    getInitialState: function() {
        return {
            author: { id: '', name: '' },
            authors: AuthorStore.getAllAuthors(),
            course: { id: '', title: '', author: { id: '', name: ''}, category: '', length: '', watchHref: '' },
            errors: {},
            dirty: false
        };
    },

    componentWillMount: function() {
        var courseId = this.props.params.id; //from the path '/course:id'
        if (courseId) {
            var course = CourseStore.getCourseById(courseId);
            var author = AuthorStore.getAuthorById(course.author.id);
            this.setState({
                course: course,
                author: { id: author.id, name: author.name }
            });
        }
    },

    courseFormIsValid: function() {
        var formIsValid = true;
        this.state.errors = {}; //clear any previous errors.

        if (this.state.course.title.length < 3) {
            this.state.errors.title = 'Title must be at least 3 characters.';
            formIsValid = false;
        }

        if (this.state.course.category.length < 3) {
            this.state.errors.category = 'Category must be at least 3 characters.';
            formIsValid = false;
        }

        if (this.state.course.length.length < 3) {
            this.state.errors.length = 'Length must be at least 3 characters.';
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});
        return formIsValid;
    },

    saveCourse: function(event) {
        event.preventDefault();

        if (!this.courseFormIsValid()) {
            return;
        }

        if (this.state.course.id) {
            CourseActions.updateCourse(this.state.course);
        } else {
            CourseActions.createCourse(this.state.course);
        }

        this.setState({dirty: false});
        toastr.success('Course saved.');
        this.transitionTo('courses');
    },

    setCourseState: function(event) {
        this.setState({dirty: true});
        var field = event.target.name;
        this.state.course[field] = event.target.value;
        return this.setState({course: this.state.course});
    },

    setCourseStateAuthor: function(event) {
        this.setState({dirty: true});
        var field = event.target.name;
        var author = AuthorStore.getAuthorById(event.target.value);
        this.state.course[field] = { id: author.id, name: author.name };
        return this.setState({course: this.state.course});
    },

    render: function() {
        return (
            <CourseForm
                course={this.state.course}
                authors={this.state.authors}
                onChange={this.setCourseState}
                onChangeSelect={this.setCourseStateAuthor}
                onSave={this.saveCourse}
                errors={this.state.errors} />
        );
    }
});

module.exports = ManageCoursePage;