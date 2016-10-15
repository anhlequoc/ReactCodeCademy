var React = require('react');
//var ReactDOM = require('react-dom');

var Sibling = React.createClass({
	render: function(){
		return (
			<p> this is sibling chagned: {this.props.propName} </p>
		);
	}
});

module.exports = Sibling;