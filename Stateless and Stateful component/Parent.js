var React = require('react');
var ReactDOM = require('react-dom');
var Child = require('./Child');
var Sibling = require('./Sibling');

var Parent = React.createClass({
	getInitialState: function() {
		return { name: "anh le"};
	},

	changeName: function(name){ //name ở đây là object event do phía Child.js gọi trực tiếp props: this.props.changeName, không thông qua hàm handleChange() để xử lý)
		this.setState({ name: name.target.value });
	},

	render: function(){
		return (
			<div>
				<h1> Hello World {this.state.name}</h1>
				<Child changeName={this.changeName} />
				<Sibling newName={this.state.name} />
			</div>
		)
	}
});

ReactDOM.render(<Parent />, document.getElementById('app'));