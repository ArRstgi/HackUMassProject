import React from "react";

import MessagesView from "./messages_view.js";

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.fetch_from_server = this.fetch_from_server.bind(this);
  }

  componentDidMount() {
    this.fetch_from_server();
    window.addEventListener("new-message", this.fetch_from_server);
  }

  fetch_from_server() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "http://127.0.0.1:5000/get_messages");
    xhr.send();

    xhr.onload = () => {
      this.setState({ messages: JSON.parse(xhr.responseText) });
    };
  }

  render() {
    return (
      <MessagesView className="messages-view" messages={this.state.messages} />
    );
  }
}

export default Messages;
