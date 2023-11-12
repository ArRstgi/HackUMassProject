import React from "react";

import Message from "./message.js";

class MessagesView extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { messages: JSON.parse(localStorage.getItem("messages")) };
    //this.add_messages_to_local_storage();

    /*window.addEventListener(
      "new-message",
      this.get_messages_from_local_storage()
    );*/
    /*window.addEventListener("new-message", () => {
      alert("new-message event called");
    });*/
  }

  /*get_messages_from_local_storage() {
    if (JSON.parse(localStorage.getItem("messages")) != this.state.messages) {
      this.setState({ messages: JSON.parse(localStorage.getItem("messages")) });
    }
  }*/

  /*add_messages_to_local_storage() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "http://127.0.0.1:5000/get_messages");
    xhr.send();

    xhr.onload = () => {
      console.log(xhr.responseText);
      if (xhr.responseText != localStorage.getItem("messages")) {
        localStorage.setItem("messages", xhr.responseText);
        this.get_messages_from_local_storage();
      }
    };
  }*/

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
        {this.props.messages.reverse().map((message) => {
          return <Message message_content={message.content} />;
        })}
      </div>
    );
  }
}

export default MessagesView;
