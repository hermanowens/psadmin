"use strict";

var ActionTypes = require('../constants/actionTypes');
var AuthorApi = require('../api/authorApi');
var Dispatcher = require('../dispatcher/appDispatcher');

var AuthorActions = {
    createAuthor: function(author) {
        this.saveAuthor(author, ActionTypes.CREATE_AUTHOR);
    },

    deleteAuthor: function(id) {
        AuthorApi.deleteAuthor(id);

        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_AUTHOR,
            id: id
        });
    },

    saveAuthor: function(author, action) {
        Dispatcher.dispatch({
            actionType: action,
            author: AuthorApi.saveAuthor(author)
        });
    },

    updateAuthor: function(author) {
        this.saveAuthor(author, ActionTypes.UPDATE_AUTHOR);
    }
};

module.exports = AuthorActions;