var React = require('react');

var Child = React.createClass({
	handleChange: function (e) {
		var newName = e.target.value;
		this.props.changeName(newName);
	},
	//hàm handleChange này được gọi khi viết <select onChange={this.handleChange}> thay vì <select onChange={this.props.changeName}> 

	render: function(){
		return (
			<select onChange={this.props.changeName}> 
			/*
				chú ý là hàm onChange truyền vào 1 tham số là object: event. do đó ở file Parent.js, this.props.changeName phải gọi hàm có xử lý tham số này, cụ thể: 
			*/
			
			/**
				- When a user selects a new dropdown item, it will invoke changeName, but it won't pass the correct argument! Instead of passing a new name, it will pass an EVENT OBJECT, as all event listeners do.
				- This is a common problem when passing down an event handler in React! The solution is to define another function.
				- This new function should take an event object as an argument, extract the name that you want from that event object, and then call the event handler, passing in the extracted name! It sounds like a lot, but you will see this happen so often that it will soon feel intuitive.
			**/
				<option>A</option>
				<option>B</option>
				<option>C</option>
			</select>
		)
	}
});

module.exports = Child;