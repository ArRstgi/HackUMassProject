// app.js
import { ConfigProvider } from "antd";
import "./App.css";
import React from "react";

import MessagesView from "./messages_view.js";
import Messages from "./messages.js";
import SendMessageView from "./send_message.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }
  render() {
    /*const xhr = new XMLHttpRequest();

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
    };*/

    return (
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            //colorPrimary: '#8f1a00',
            //borderRadius: 2,

            // Alias Token
            colorBgContainer: "#fffff0",
            colorBorderSecondary: "#b3b3a0",
          },
        }}
      >
        <div className="App">
          <Messages></Messages>
          <SendMessageView className="send-messages-box" />
        </div>
      </ConfigProvider>
    );
  }
}

export default App;
