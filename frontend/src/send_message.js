import React from "react";
import { Input, Button, ConfigProvider } from "antd";

const { TextArea } = Input;

class SendMessageView extends React.Component {
  constructor(props) {
    super(props);
  }

  send_message() {
    let message_content =
      document.getElementById("message-submission").textContent;
    document.getElementById("message-submission").value = "";
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "http://127.0.0.1:5000/send_message");

    let formData = new FormData();

    formData.append("message_content", message_content);
    formData.append("message_time", 0);

    xhr.send(formData);

    let messages = JSON.parse(localStorage.getItem("messages"));
    messages[messages.length] = {
      message_content: message_content,
      message_time: 0,
    };

    localStorage.setItem("messages", JSON.stringify(messages));

    window.dispatchEvent(new Event("new-message"));
  }

  render() {
    return (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#26343f",
            colorPrimaryText: "fffff0",
          },
        }}
      >
        <div className="messages-view">
          <TextArea className="text-box" id="message-submission" rows={20} />
          <Button
            className="submit-button"
            onClick={this.send_message}
            type="primary"
            shape="round"
            size={"middle"}
          >
            Post Message
          </Button>
        </div>
      </ConfigProvider>
    );
  }
}

export default SendMessageView;
