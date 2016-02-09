'use strict';

//load React libraries
var React = require('react');
var ReactDOM = require('react-dom');


var MessageItem = React.createClass({

  handleClick: function(){
      console.log('you clicked '+this.props.message);
  },

  render: function() {
    return <li onClick={this.handleClick}>{this.props.message}</li>;
  }
});

var MessageList = React.createClass({
  render: function() {      
    
    var msgItems = this.props.messages.map(function(value, index) {
        return <MessageItem message={index+ " " + value} />
    }, this)
    
    return (
      <ul> {msgItems} </ul>
    );
  }
});

var messages = [
  "Hello world!", "Goodbye y'all!", "Is it dinner yet?", 
  "Cats are fun!", "But dogs are funner"  
];

//render all
ReactDOM.render(<MessageList messages={messages} />, document.getElementById('content'));