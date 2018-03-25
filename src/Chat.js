import React, { Component } from "react";
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

class MessageForm extends Component {

    constructor(props) {
      super(props);
      this.state = {text: ''};
  
      this.submit = this.submit.bind(this);
      this.change = this.change.bind(this);
    }
  
    submit(e) {
      e.preventDefault();
  
      if(this.state.text !== '') {
        var message = {
          type : 'message',
          text : this.state.text,
          time : 0, // Set by the server
          user : 0, // Set before sending
          currentuser: true
        }
        this.props.onMessageSubmit(message);  
        this.setState({ text: '' });
      }
    }
  
    change(e) {
      this.setState({ text : e.target.value });
    }
  
    render() {
  
      return (
        <form onSubmit={this.submit} >
          <input autoFocus onChange={this.change} value={this.state.text} placeholder="Type a message"/>
          <input type="submit" value="Send" />
        </form>
      );
    }
  }
  
  class MessageBox extends Component {
  
    render() {
  
      if(this.props.currentuser === true) {
  
        return (
  
          <div>
            <div> {this.props.text} </div>
            <br/>
            <div> {this.props.time} </div>
          </div>
  
        );
  
      }
      else {
  
        return (
  
          <div>
            <div> {this.props.text} </div>
            <br/>
            <div> {this.props.time} </div>
          </div>
  
        );
      }
    }
  }
  
  class StatusBox extends Component {
  
    render() {
  
      return (
  
        <div>
          {this.props.status} <br/>
          there {this.props.count > 1 ? 'are' : 'is'} {this.props.count} {this.props.count > 1 ? 'participants' : 'participant'}
        </div>
  
      );
    }
  }
  
  class MessageList extends Component {
  
      render() {
  
      const listItems = this.props.messagelist.map((message, i) => 
            {
              if(message.type === 'message') return (
                <MessageBox key={i} text={message.text} time={message.time} currentuser={message.currentuser} />
              );
              else return (
                <StatusBox key={i} status={message.status} count={message.count} />
              );
            }
        );
  
          return (
  
              <div>
                  {listItems}
              </div>
  
          );
      }
  }
  
  class Chat extends Component {
  
    constructor(props) {
      super(props);
      this.state = {messages : [], userid : 0, users : 0};
  
      this.userAccept = this.userAccept.bind(this);
      this.userJoin = this.userJoin.bind(this);
      this.userLeft = this.userLeft.bind(this);
      this.messageReceive = this.messageReceive.bind(this);
      this.messageSend = this.messageSend.bind(this);
    }
  
    componentDidMount() {
      socket.emit('user:request');
      socket.on('user:accept', this.userAccept);
      socket.on('user:join', this.userJoin);
      socket.on('user:left', this.userLeft);
      socket.on('send:message', this.messageReceive);
    }
  
    componentWillUnmount() {
      socket.emit('user:left');
    }
  
    userAccept(msg) {
      this.setState({ userid : msg.id });
      this.setState({ users : msg.users });
  
      var newMessages = this.state.messages;
      newMessages.push( { 'type' : 'status', 'status' : 'you joined', 'count' : msg.users} );
      this.setState( {messages : newMessages} );
    }
  
    userJoin() {
      this.setState((prevState, props) => ({ users: prevState.users + 1 }));
  
      var newMessages = this.state.messages;
      newMessages.push( { 'type' : 'status', 'status' : 'someone joined', 'count' : this.state.users} );
      this.setState( {messages : newMessages} );
    }
  
    userLeft() {
      this.setState((prevState, props) => ({ users: prevState.users - 1 }));
  
      var newMessages = this.state.messages;
      newMessages.push( { 'type' : 'status', 'status' : 'someone left', 'count' : this.state.users} );
      this.setState( {messages : newMessages} );
    }
  
    messageReceive(msg) {
      if(msg.user === this.state.userid) {
        msg.currentuser = true;
      }
      else {
        msg.currentuser = false;
      }
      var newMessages = this.state.messages;
      newMessages.push(msg);
      this.setState( {messages : newMessages} );
      window.scrollTo(0, document.body.scrollHeight);
  
    }
  
    messageSend(message) {
      message.user = this.state.userid;
      socket.emit('send:message', message);
    }
  
    render() {
  
      return (
  
        <div>
          <MessageList messagelist={this.state.messages} />
          <MessageForm onMessageSubmit={this.messageSend} />
        </div>
  
      );
    }
  }

export default Chat