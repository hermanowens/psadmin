"use strict";

var React = require('react');

var Select = React.createClass({
    propTypes: {
        error: React.PropTypes.string,
        label: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired,
        options: React.PropTypes.object.isRequired,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.string
    },

    render: function () {
        var wrapperClass = 'form-group';
        if (this.props.error && this.props.error.length > 0) {
            wrapperClass += " " + 'has-error';
        }

        var createOptions = function (option) {
            return (
                <option key={option.id} value={option.id}>{option.name}</option>
            );
        };

        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <select name={this.props.name}
                            className="form-control"
                            placeholder={this.props.placeholder}
                            ref={this.props.name}
                            onChange={this.props.onChange}
                            value={this.props.value}
                    >
                        {this.props.options.map(createOptions, this)}
                    </select>
                    <div className="input">{this.props.error}</div>
                </div>
            </div>
        );
    }
});

module.exports = Select;
