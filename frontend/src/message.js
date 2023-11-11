import React from "react";
import { Card } from "antd";

function Message(props) {
  return <Card>{props.message_content}</Card>;
}

export default Message;
