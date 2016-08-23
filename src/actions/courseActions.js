"use strict";

var ActionTypes = require('../constants/actionTypes');
var CourseApi = require('../api/courseApi');
var Dispatcher = require('../dispatcher/appDispatcher');

var CourseActions = {
    createCourse: function(course) {
        this.saveCourse(course, ActionTypes.CREATE_COURSE);
    },

    deleteCourse: function(id) {
        CourseApi.deleteCourse(id);

        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_COURSE,
            id: id
        });
    },

    saveCourse: function(course, action) {
        Dispatcher.dispatch({
            actionType: action,
            course: CourseApi.saveCourse(course)
        });
    },

    updateCourse: function(course) {
        this.saveCourse(course, ActionTypes.UPDATE_COURSE);
    }
};

module.exports = CourseActions;