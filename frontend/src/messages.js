import React from "react";

import MessagesView from "./messages_view.js";

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }
  render() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "http://127.0.0.1:5000/get_messages");
    xhr.send();

    xhr.onload = () => {
      console.log(xhr.responseText);
      localStorage.setItem("messages", xhr.responseText);
      this.setState({ messages: JSON.parse(localStorage.getItem("messages")) });
      window.addEventListener("new-message", () => {
        this.setState({
          messages: JSON.parse(localStorage.getItem("messages")),
        });
      });
    };

    return (
      <MessagesView className="messages-view" messages={this.state.messages} />
    );
  }
}

export default Messages;
