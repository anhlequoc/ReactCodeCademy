#React from Codecademy.com: https://www.codecademy.com/courses/react-101
- muốn thực hiện phép tính trong html, dùng {}, nếu không có {} thì nó sẽ hiển thị là string bình thường
	ReactDOM.render(<h1>{2 + 3}</h1>);
	-> tương tự với các đoạn code javascript khác (https://www.codecademy.com/courses/react-101/lessons/react-jsx-advanced/exercises/jsx-pi-20-digits?action=resume)
	(The curly braces themselves won't be treated as JSX nor as JavaScript. They are markers that signal the beginning and end of a JavaScript injection into JSX, similar to the quotation marks that signal the boundaries of a string.)

- trong jsx luôn cần có dấu / cho closed tag: <br />, <input />..., nếu không sẽ báo lỗi

- jsx dùng className thay cho class (do javascript đã có từ khóa class), khi render ra html, react sẽ tự động đổi className thành class
	<div className="big">this is big div </div>

- JSX elements can have event listeners, just like HTML elements can. Programming in React means constantly working with event listeners.
	Ex: <img onClick={myFunc} />
	(Note that in HTML, event listener names are written in all lowercase, such as onclick or onmouseover. In JSX, event listener names are written in camelCase, such as onClick or onMouseOver.)

- Here's a rule that you need to know: you can not inject an if statement into a JSX expression.
	This code will break:
	(
	  <h1>
	    { if (purchase.complete) 'Thank you for placing an order!' }
	  </h1>
	)
	more details: https://facebook.github.io/react/tips/if-else-in-JSX.html
	-> xử lý:
		+ đặt if ở ngoài hoặc
		+
			var headline = (
			  <h1>
			    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
			  </h1>
			);

- '&&' operator: works best in conditionals that will sometimes do an action, but other times do nothing at all.
	Here's an example:
		var tasty = (
		  <ul>
		    <li>Applesauce</li>
		    { !baby && <li>Pizza</li> } //chỉ hiện ra Pizza khi !baby true
		    { age > 15 && <li>Brussels Sprouts</li> } // tương tự, chỉ hiện ra Brussels Sprouts khi age > 15 là true
		    { age > 20 && <li>Oysters</li> } // như trên
		    { age > 25 && <li>Grappa</li> } // như trên
		  </ul>
		);

- '.map' keyword: The array method .map comes up often in React. It's good to get in the habit of using it alongside JSX. If you want to create a list of JSX elements, then .map is often your best bet. It can look odd at first:
	Ex:
		var strings = ['Home', 'Shop', 'About Me'];
		var listItems = strings.map(function(string){
		  return <li>{string}</li>;
		});
		<ul>{listItems}</ul>

#Component: is a function or object which returns some amount of HTML
-> so it make sense when we can have different components for different functions or different purposes within our application, such as:
	- a single component for searchbar on top of web page
	- a single component that represent the video title and video description panel
-> a componet can be nested into another one

-> (codecademy.com) every component must come from a component class
-> Khai báo component (class) trong React như sau. trong hàm React.createClass() cần truyền vào 1 object có 1 attribute là render (value của nó là 1 function)
	Ex 1: (newbies)
		var React = require('react');
		var ReactDOM = require('react-dom');

		var componentBlueprint = {
		  render: function() {
		    return <h1>Hello world</h1>;
		  }
		};
		var MyComponentClass = React.createClass(componentBlueprint);

	Ex 2:
		var React = require('react');
		var ReactDOM = require('react-dom');

		var MyComponentClass = React.createClass(
			{
				render: function() {
					return <h1>Hello world</h1>
				}
			}
		);

-> Sau khi có class (component class), sẽ khai báo 1 instance của component class đó, như sau:
	<MyComponentClass /> //viết hoa để React hiểu rằng đây là 1 component class, chứ không phải html tag
	//instance sẽ kế thừa tất cả các attributes ở class của nó

-> khi call instance <MyComponentClass />, sẽ trả về <h1>Hello world</h1>, truyền vào ReactDOM.render() để add vào virtual DOM
	(<MyComponentClass /> will call its render function, returning <h1>Hello world</h1>. ReactDOM.render will take that <h1>Hello world</h1> and add it to the virtual DOM, eventually making it visible on the screen.)
	ReactDOM.render(<MyComponentClass />, document.getElementById('app'));

	Example 1:
		var React = require('react');
		var ReactDOM = require('react-dom');


		var owl = {
		  title: "Excellent Owl",
		  src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg"
		};

		// Component class starts here:
		var Owl = React.createClass(
			{
		    render: function() {
		      return (
		      	<div>
		        	<h1>{owl.title}</h1>
		          <img src={owl.src} alt={owl.title} />
		        </div>
		      )
		    }
		  }
		);

		ReactDOM.render(<Owl />, document.getElementById('app'));

	Example 2:
		var React = require('react');
		var ReactDOM = require('react-dom');

		var friends = [
		  {
		    title: "Yummmmmmm",
		    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
		  },
		  {
		    title: "Hey Guys!  Wait Up!",
		    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
		  },
		  {
		    title: "Yikes",
		    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
		  }
		];

		// New component class starts here:
		var Friend = React.createClass(
			{
		    render: function() {
		      var friend = friends[2];
		      return (
		      	<div>
		        	<h1>{friend.title}</h1>
		          <img src={friend.src}/>
		        </div>
		      );
		    }
		  }
		);

		ReactDOM.render(<Friend />, document.getElementById('app'));

	Example 3:
		var React = require('react');
		var ReactDOM = require('react-dom');

		var fiftyFifty = Math.random() < 0.5;

		// React.createClass call begins here:
		var TonightsPlan = React.createClass(
			{
		    render: function() {
		      var todo = '';
		      if (fiftyFifty) {
		        todo = "Tonight I'm going out WOOO";
		      } else {
		        todo = "Tonight I'm going to bed WOOO";
		      }
		      
		      return <h1>{todo}</h1>;
		    }
		  }
		);

		ReactDOM.render(<TonightsPlan />, document.getElementById('app'));

#Event: In React, you define event handlers as property values on the instructions object. Like this
	React.createClass({
	  myFunc: function () {
	    alert('Stop it.  Stop hovering.');
	  },

	  render: function () {
	    return (
	      <div onHover={this.myFunc}>
	      </div>;
	    );
	  }
	});

# A component renders another component
	- should import module from other files if needed
		such as: var NavBar = require('./NavBar');
# Component props:
	- Props is the infomration that a component pass to another component
	- A component's props is an object
	- để access vào component's props, dùng: this.props (use inside the render function()). Most of the information in this.props is pretty useless! But some of it is extremely important.
	- pass infomration to React component by giving the component an attribute:
		such as: <Example message="This is some top secret info." />
		+ nếu value của message không phải là string, cần wrap value đó trong ngoặc nhọn: {2}, {['top', 'secret', 'lol']}

	- Example component props:
		file 1: Talker.js
			var React = require('react');
			var ReactDOM = require('react-dom');
			var Button = require('./Button');

			var Talker = React.createClass({
			  talk: function () {
			    for (var speech = '', i = 0; i < 10000; i++) {
			      speech += 'blah ';
			    }
			    alert(speech);
			  },			  
			  render: function () {
			    return <Button talk={this.talk}/>;
			  }
			});
			ReactDOM.render(
			  <Talker />,
			  document.getElementById('app')
			);

		file 2: Button.js
			var React = require('react');
			var Button = React.createClass({
			  render: function () {
			    return (
			      <button onClick={this.props.talk}> //gọi props của class Button mà được Talker truyền vào, ở đây là props.talk
			        Click me!
			      </button>
			    );
			  }
			});

			module.exports = Button;

#Component props naming:
	- If you are listening for a "click" event, then you name your event handler handleClick. If you are listening for a "keyPress" event, then you name your event handler handleKeyPress:
		React.createClass({
		  handleHover: function () {
		    alert('I am an event handler.');
		    alert('I will be called in response to "hover" events.');
		  }
		});

	- Your prop name should be the word on, plus your event type. If you are listening for a "click" event, then you name your prop onClick. If you are listening for a "keyPress" event, then you name your prop onKeyPress:
		React.createClass({
		  handleHover: function () {
		    alert('I am an event handler.');
		    alert('I will listen for a "hover" event.');
		  },

		  render: function () {
		    return <Child onHover={this.handleHover} />;
		  }
		});

#this.props.children: chứa toàn bộ phàn nằm giữa <MyComponentClass></MyComponentClass>
	ví dụ:
	<List>
			<li>item 1</li>
			<li>item 2</li>		
	</List>
	-> this.props.children = ['<li>item 1</li>', <li>item 2</li>]

#getDefaultProps: is a function used when render function of a component return blank
	example:
	var React = require('react');
	var ReactDOM = require('react-dom');

	var myCom = React.createClass({
		getDefaultProps: function(){
			return {text: "yo"};
		},
		render: function() {
			return <button>{this.props.text}</button> // in case this.props.text is blank, it will call getDefaultProps()
		}
	});
	ReactDOM.render(<myCom />, document.getElementById('app'));

#State:
	- A React component can access dynamic information in two ways: props and state.
	- Unlike props, a component's state is not passed in from the outside. A component decides its own state.
	- To make a component have state, write a getInitialState function, getInitialState should return an object.
		ex:
		 getInitialState: function() {
		    return { title: 'Best App'};
		  }
  	- To read a component's state, use the expression this.state.name-of-property:
  		ex: this.state.title;
	- A component can also change its own state. A component changes its state by calling the function this.setState.
	- this.setState() takes two arguments: an object that will update the component's state, and a callback. You basically never need the callback. 
	- this.setState() takes an object, and merges that object with the component's current state. If there are properties in the current state that aren't part of that object, then those properties remain how they were.
		Ex:
			var React = require('react');
			var ReactDOM = require('react-dom');

			var green = '#39D1B4';
			var yellow = '#FFD712';

			var Toggle = React.createClass({
			  getInitialState: function() {
			    return { color: green };
			  },
			  changeColor: function() {
			    var newColor = this.state.color == green ? yellow : green;
			    this.setState({ color: newColor });
			  },
			  render: function () {
			    return (
			      <div style={{background: this.state.color}}>
			        <h1>
			          <button onClick={this.changeColor}>Change color</button>
			        </h1>
			      </div>
			    );
			  }
			});
			ReactDOM.render(<Toggle />, document.getElementById('app'));

	- IMPORTANT: Inside of the render function, it's this line: <div style={{background:this.state.color}}>
		that changes a virtual DOM object's color to the new this.state.color, eventually causing a change in the screen. If you call changeColor, shouldn't you then also have to call render again? changeColor only makes it so that, the next time that you render, the color will be different. Why can you see the new background right away, if you haven't re-rendered the component?

	--> Here's why: Any time that you call this.setState, this.setState AUTOMATICALLY calls render as soon as the state has changed.
	--> Think of this.setState as actually being two things: this.setState, immediately followed by render.
	--> That is why you can't call this.setState from inside of the render function! this.setState automatically calls render. If render calls this.setState, you will create an INFINITIVE LOOP!!!

--- REACT PART II ---
- Rendering is the only way for a component to pass props to another component.
- That means that Child.js needs to use module.exports. Any component rendered by a different component must be included in module.exports.
	See Ex:
	Child.js
		var React = require('react');

		var Child = React.createClass({
		  render: function() {
		    return <h1>Hey, my name is {this.props.name}!</h1>;
		  }
		});

		module.exports = Child;

	Parent.js
		var React = require('react');
		var ReactDOM = requirer('react-dom');
		var Child = require('./Child');

		var Parent = React.createClass({
			render: function() {
				return <Child name = {this.state.name} />;
			},

			getInitialState: function() {
				return { name: 'Frurther' };
			}
		});

		ReactDOM.render(<Parent />, document.getElementById('app'));

- You learned earlier that a component can change its state by calling this.setState. You may have been wondering: how does a component change its props? The answer: it doesn't!
A component should never update this.props. Look at Bad.js to see an example of what not to do.
	Bad.js:
		var React = require('react');

		var Bad = React.createClass({
		  render: function () {
		    this.props.message = 'yo'; // NOOOOOOOOOOOOOO!!!
		    return <h1>{this.props.message}</h1>;
		  }
		});

This is potentially confusing. props and state store dynamic information. Dynamic information can change, by definition. If a component can't change its props, then what are props for?

- A React component should use PROPS to store information that can be changed, but can only be changed by a different component.
- A React component should use STATE to store information that the component itself can change.

--- Automatic Binding ---
Take a look at changeName. You can see that it calls this.setState.

In order for changeName to work, the "this" in this.setState must be the instructions object of the Parent class. You're trying to set a <Parent />'s state, not some other type of component's state.

The meaning of this is determined when a function is called, not when when a function is defined. changeName is called by an event listener... on a <Child />. Shouldn't that make this point to the instructions object of the Child class, instead of the Parent class?

You'd think that it would! Fortunately it doesn't happen that way, thanks to some React magic called automatic binding.

Automatic binding allows you to pass functions as props, and any this values in the functions' bodies will automatically refer to whatever they referred to when the function was defined. No binding to worry about!
	Parent.js:
		var React = require('react');
		var ReactDOM = require('react-dom');
		var Child = require('./Child');

		var Parent = React.createClass({
		  getInitialState: function () {
		    return { name: 'Frarthur' };
		  },

		  changeName: function(newName) {
		    this.setState({
		      name: newName
		    })
		  },
		  render: function () {
		    return (
		    	<Child 
		    		name={this.state.name} onChange={this.changeName} /> //automatic bindling: this ở đây ko refer đến Child.js mà refer đến object nó được define (thay vì object nó được call) là Parent.js
		    );
		  }
		});

		ReactDOM.render(
			<Parent />, 
			document.getElementById('app')
		);



--- Styling in React ---
- <h1 style = {{ background: 'red', color: 'blue' }}> content h1 </h1> //value của style là 1 object
- If you inject an object literal into JSX, and your entire injection is only that object literal, then you will end up with double curly braces. There's nothing unusual about how they work, but they look funny and can be confusing.
- có thể viết:
	var styles = {
		background: 'red',
		color: 'blue'
	};
	<h1 style = {styles}> h1 content </h1>

- In React, style names are instead written in camelCase:
	var styles = {
	  marginTop:       "20px",
	  backgroundColor: "green"
	};

- export styles to use in other componenets:
	// facebook color palette
	var blue  = 'rgb(139, 157, 195)';
	var darkBlue  = 'rgb(059, 089, 152)';
	var lightBlue = 'rgb(223, 227, 238)';
	var grey      = 'rgb(247, 247, 247)';
	var white     = 'rgb(255, 255, 255)';

	module.exports = {
	  blue: blue,
	  darkBlue: darkBlue,
	  lightBlue: lightBlue,
	  grey: grey,
	  white: white
	};

### Separate Container Components from Presentational Component
Separating container components from presentational components is a popular React programming pattern.
Here's the basic idea behind it: if a component has to have state, make calculations based on props, or manage any other complex logic, then that component shouldn't also have to render HTML-like JSX.

Instead of rendering HTML-like JSX, the component should render another component. It should be that component's job to render HTML-like JSX.

Following this pattern separates your business logic from your presentational logic, which is a Good Thing.

---
- A presentational component will always get rendered by a container component.
- The container component does the work of figuring out what to display. The presentational component does the work of actually displaying it. If a component does a significant amount of work in both areas, then that's a sign that you should use this pattern!

###Stateless Functional Components
- If you have a component class with nothing but a render function, then you can rewrite that component class in a very different way. Instead of using React.createClass, you can write it as JavaScript function!

- A component class written as a function is called a STATELESS FUNCTIONAL COMPONENT. Stateless functional components have some advantages over typical component classes. We'll cover those advantages in this lesson.

- Stateless functional components usually have props passed to them.
- To access these props, give your stateless functional component a parameter. This parameter will automatically be equal to the component's props object.


###propTypes
- propTypes are useful for two reasons:
	- Validation can ensure that your props are doing what they're supposed to be doing. If props are missing, or if they're present but they aren't what you're expecting, then a warning will print in the console.

	- The 2nd is arguably more useful: Documentation. Documenting props makes it easier to glance at a file and quickly understand the component class inside. When you have a lot of files, and you will, this can be a huge benefit.

	- Examples:
		propTypes: {
			message:   React.PropTypes.string.isRequired,
		    style:     React.PropTypes.object.isRequired,
		    isMetric:  React.PropTypes.bool.isRequired,
		    miles:     React.PropTypes.number.isRequired,
		    milesToKM: React.PropTypes.func.isRequired,
		    races:     React.PropTypes.array.isRequired
		}

- To write propTypes for a stateless functional component, you define a propTypes object, as a property of the stateless functional component itself. Here's what that looks like:
	- Example:
		function Example(props){
			return <h1>{props.message}</h1>
		}

		Example.propTypes = {
			message: React.PropTypes.string.isRequired
		}

###Form
- In a React form, you want the server to know about every new character or deletion, as soon as it happens. That way, your screen will always be in sync with the rest of your application.
- A traditional form doesn't update the server until a user hits "submit." But you want to update the server any time a user enters or deletes any character.
- There are two terms that will probably come up when you talk about React forms: controlled component and uncontrolled component. Like automatic binding, controlled vs uncontrolled components is a topic that you should be familiar with, but don't need to understand deeply at this point.
- An uncontrolled component is a component that maintains its own internal state. A controlled component is a component that does not maintain any internal state. Since a controlled component has no state, it must be controlled by someone else.

- Think of a typical <input type='text' /> element. It appears onscreen as a text box. If you need to know what text is currently in the box, then you can ask the <input />, possibly with some code like this:
	```
		var input = document.querySelector('input[type="text"]');
		var typedText = input.value; // input.value will be equal to whatever text is currently in the text box.
	```

- The important thing here is that the <input /> keeps track of its own text. You can ask it what its text is at any time, and it will be able to tell you.
- The fact that <input /> keeps track of information makes it an uncontrolled component. It maintains its own internal state, by remembering data about itself.
- A controlled component, on the other hand, has no memory. If you ask it for information about itself, then it will have to get that information through props. Most React components are controlled.
- In React, when you give an <input /> a value attribute, then something strange happens: the <input /> BECOMES controlled. It stops using its internal storage. This is a more 'React' way of doing things. You can find more information about controlled and uncontrolled components (https://facebook.github.io/react/docs/forms.html)

###Lifecycle Method
- Lifecycle methods are methods that get called at certain moments in a component's life.
- You can write a lifecycle method that gets called right before a component renders for the first time.
- You can write a lifecycle method that gets called right after a component renders, every time except for the first time.
- You can attach lifecycle methods to a lot of different moments in a component's life. This has powerful implications!

- There are 3 CATEGORIES of lifecycle methods: mounting, updating, and unmounting. This lesson is about the first category: mounting lifecycle methods.

#### Mounting
- A component "mounts" when it renders for the first time. This is when mounting lifecycle methods get called. There are three mounting lifecycle methods:
	```
		componentWillMount //If you need to do something only the first time that a component renders, then it's probably a job for a mounting lifecycle method!
		render //render belongs to two categories: mounting lifecycle methods, and updating lifecycle methods. - updating lifecycle will be discussed later
		componentDidMount //componentDidMount gets called right after the HTML from render has finished loading. componentDidMount gets used a lot!
		//If your React app uses AJAX to fetch initial data from an API, then componentDidMount is the place to make that AJAX call. More generally, componentDidMount is a good place to connect a React app to external applications, such as web APIs or JavaScript frameworks. componentDidMount is also the place to set timers using setTimeout or setInterval.
		//You want something to happen right after the very first rendering... that's exactly what componentDidMount is for!
	```
When a component mounts, it automatically calls these three methods, in order.
- Example:
	```
		var React = require('react');
		var ReactDOM = require('react-dom');

		var Flashy = React.createClass({
		  componentWillMount: function () {
		    alert('AND NOW, FOR THE FIRST TIME EVER...  FLASHY!!!!');
		  },

		  componentDidMount: function() {
		    alert('YOU JUST WITNESSED THE DEBUT OF...  FLASHY!!!!!!!'); 
		  },
		  
		  render: function () {

		    alert('Flashy is rendering!');
		   
		    return (
		      <h1 style={{ color: this.props.color }}>
		        OOH LA LA LOOK AT ME I AM THE FLASHIEST
		      </h1>
		    );
		  }
		});

		ReactDOM.render(
		  <Flashy color='red' />,
		  document.getElementById('app')
		);

		setTimeout(function () {
		  ReactDOM.render(
		    <Flashy color='green' />,
		    document.getElementById('app')
		  );
		}, 2000);
	```

#### Updating:
- What is updating? The first time that a component instance renders, it does not update. A component updates every time that it renders, starting with the second render.
- There are five updating lifecycle methods: //các hàm này chỉ chạy từ lần render thứ 2nd, lần đầu tiên render không chạy
	componentWillReceiveProps
	shouldComponentUpdate
	componentWillUpdate
	render
	componentDidUpdate
- Whenever a component instance updates, it automatically calls all five of these methods, in order.

##### 	componentWillReceiveProps	
- When a component instance updates, componentWillReceiveProps gets called before the rendering begins. As one might expect, componentWillReceiveProps only gets called if the component will receive props:
	---
		// componentWillReceiveProps will get called here:
		ReactDOM.render(
		  <Example prop="myVal" />,
		  document.getElementById('app')
		);

		// componentWillReceiveProps will NOT get called here:
		ReactDOM.render(
		  <Example />,
		  document.getElementById('app')
		);
	---
- This is a common use of componentWillReceiveProps: comparing incoming props to current props or state, and deciding what to render based on that comparison.

##### shouldComponentUpdate
- When a component updates, shouldComponentUpdate gets called after componentWillReceiveProps, but still before the rendering begins.
- shouldComponentUpdate should return either true or false. If shouldComponentUpdate returns true, then nothing noticeable happens. But if shouldComponentUpdate returns false, then the component will not update! None of the remaining lifecycle methods for that updating period will be called, including render.
- The best way to use shouldComponentUpdate is to have it return false only under certain conditions. If those conditions are met, then your component will not update.
- shouldComponentUpdate automatically receives two arguments: nextProps and nextState. It's typical to compare nextProps and nextState to the current this.props and this.state, and use the results to decide what to do. See how Example.js does this
	```
	//Example.js
		var React = require('react');
		var Example = React.createClass({
		  getInitialState: function () {
		    return { subtext: 'Put me in an <h2> please.' };
		  },

		  shouldComponentUpdate: function (nextProps, nextState) {
		    if ((this.props.text == nextProps.text) && 
		      (this.state.subtext == nextState.subtext)) {
		      alert("Props and state haven't changed, so I'm not gonna update!");
		      return false;
		    } else {
		      alert("Okay fine I will update.")
		      return true;
		    }
		  },

		  render: function () {
		    return (
		      <div>
		        <h1>{this.props.text}</h1>
		        <h2>{this.state.subtext}</h2>
		      </div>
		    );
		  }
		});
	```

##### componentWillUpdate
- componentWillUpdate gets called in between shouldComponentUpdate and render.
- componentWillUpdate receives two arguments: nextProps and nextState. Read Example.js to see it in action.
	```
	//Example.js
		var React = require('react');
		var Example = React.createClass({
		  componentWillUpdate: function (nextProps, nextState) {
		    alert('Component is about to update!  Any second now!');
		  },

		  render: function () {
		    return <h1>Hello world</h1>;
		  }
		});
	```
- You cannot call this.setState from the body of componentWillUpdate! Which begs the question, why would you use it? The main purpose of componentWillUpdate is to interact with things outside of the React architecture. If you need to do non-React setup before a component renders, such as checking the window size or interacting with an API, then componentWillUpdate is a good place to do that.

##### render

##### componentDidUpdate
- When a component instance updates, componentDidUpdate gets called after any rendered HTML has finished loading.
- componentDidUpdate automatically gets passed two arguments: prevProps and prevState. prevProps and prevState are references to the component's props and state before the current updating period began. You can compare them to the current props and state.
- componentDidUpdate is usually used for interacting with things outside of the React environment, like the browser or APIs. It's similar to componentWillUpdate in that way, except that it gets called after render instead of before.


#### unmounting
- A component's unmounting period occurs when the component is removed from the DOM. This could happen if the DOM is rerendered without the component, or if the user navigates to a different website or closes their web browser.
- componentWillUnmount is the only unmounting lifecycle method!

##### componentWillUnmount
- componentWillUnmount gets called right before a component is removed from the DOM. If a component initiates any methods that require cleanup, then componentWillUnmount is where you should put that cleanup.
	```
	//Example.js
		var React = require('react');

		var Example = React.createClass({
		  componentWillUnmount: function () {
		    alert('Goodbye world');
		  },

		  render: function () {
		    return <h1>Hello world</h1>;
		  }
		});
	```