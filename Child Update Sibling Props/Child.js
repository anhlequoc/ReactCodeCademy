var React = require('react');
//var ReactDOM = require('react-dom');

var Child = React.createClass({
	handleChange: function(event) {
		var name = event.target.value;
		this.props.changeSelect(name);
	},
	render: function(){
		return (
			<select id="select" onChange={this.handleChange}> Select Option
				<option value="A">A</option>
				<option value="B">B</option>
				<option value="C">C</option>
			</select>

		);
	}
});

module.exports = Child;