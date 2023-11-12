import React from "react";

import Message from "./message.js";

class MessagesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.get_messages();
  }

  get_messages() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "http://127.0.0.1:5000/get_messages");
    xhr.send();

    xhr.onload = () => {
      console.log(xhr.responseText);
      this.setState({ messages: JSON.parse(xhr.responseText) });
    };
  }

  render() {
    return (
      <div
        className="messages-view"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          overflowY: "auto",
        }}
      >
        {this.state.messages.reverse().map((message) => {
          return <Message message_content={message.content} />;
        })}
      </div>
    );
  }
}

export default MessagesView;
