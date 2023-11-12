import React from "react";
import { Input, Button } from "antd";

const { TextArea } = Input;

class SendMessageView extends React.Component {
  constructor(props) {
    super(props);
  }

  send_message() {
    let message_content =
      document.getElementById("message-submission").textContent;

    const xhr = new XMLHttpRequest();

    xhr.open("POST", "http://127.0.0.1:5000/send_message");

    let formData = new FormData();

    formData.append("message_content", message_content);
    formData.append("message_time", 0);

    xhr.send(formData);
  }

  render() {
    return (
      <div  className="messages-view">
        <TextArea id="message-submission" rows={20} />
        <Button onClick={this.send_message}>Post Message</Button>
      </div>
    );
  }
}

export default SendMessageView;
