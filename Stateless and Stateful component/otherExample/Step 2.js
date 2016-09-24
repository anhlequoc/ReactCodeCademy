var React = require('react');
var ReactDOM = require('react-dom');
var ChildClass = require('./Step 3');

var ParentClass = React.createClass({
  getInitialState: function () {
    return { totalClicks: 0 };
  },

  handleClick: function () {
    var total = this.state.totalClicks;
    this.setState(
      { totalClicks: total + 1 }
    );
  },

  // The stateful component class passes down
  // handleClick to a stateless component class:
  render: function () {
    return (
      <div>
        <ChildClass onClick={this.handleClick} />
        <h1> Clicks: {this.state.totalClicks}</h1>
      </div>
    );
  }
});

ReactDOM.render(<ParentClass />, document.getElementById('app'));