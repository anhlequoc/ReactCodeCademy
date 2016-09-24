var React = require('react');

var Sibling = React.createClass({
	render: function(){
		return(
			<h1>this is the selected name: {this.props.newName}</h1>
		);
	}
});

module.exports = Sibling;