//This is Presentational Component - has one render function, and no other properties.

var React = require('react');

var GuineaPigs = React.createClass({
	render: function() {
		var src = this.props.src;
		return (
			<div>
				<h1>GuineaPigs</h1>
				<img src={src} />
			</div>
		)
	}
});

module.exports = GuineaPigs;