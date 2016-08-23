"use strict";

var React = require('react');

var Input = require('../common/textInput');
var Select = require('../common/select');

var CourseForm = React.createClass({
    propTypes: {
        course:	React.PropTypes.object.isRequired,
        errors: React.PropTypes.object,
        onChange: React.PropTypes.func.isRequired,
        onSave:	React.PropTypes.func.isRequired
    },

    render: function() {
        return (
            <form>
                <h1>Manage Course</h1>
                <Input
                    name="title"
                    label="Title"
                    value={this.props.course.title}
                    onChange={this.props.onChange}
                    error={this.props.errors.title} />

                <Select
                    name="author"
                    label="Author"
                    value={this.props.course.author.id}
                    options={this.props.authors}
                    onChange={this.props.onChangeSelect}
                    error={this.props.errors.author} />

                <Input
                    name="category"
                    label="Category"
                    value={this.props.course.category}
                    onChange={this.props.onChange}
                    error={this.props.errors.category} />

                <Input
                    name="length"
                    label="Length"
                    value={this.props.course.length}
                    onChange={this.props.onChange}
                    error={this.props.errors.length} />

                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
            </form>
        );
    }
});

module.exports = CourseForm;
