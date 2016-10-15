var React = require('react');
var ReactDOM = require('react-dom');
var Child = require('./Child.js');
var Sibling = require('./Sibling.js');

var Parent = React.createClass({
	getInitialState: function(){
		return { name: "A" };
	},

	change: function(newOption){
		this.setState({
			name: newOption
		});
	},

	render: function() {
		return (
			<div>
				<Child changeSelect={this.change} />
				<Sibling propName = {this.state.name} />
			</div>
		);
	}
});

ReactDOM.render(<Parent />, document.getElementById('app'));