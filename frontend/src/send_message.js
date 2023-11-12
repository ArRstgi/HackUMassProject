import React from "react";
import { Input, Button } from "antd";

const { TextArea } = Input;

class SendMessageView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TextArea rows={20} />
        <Button>Post Message</Button>
      </div>
    );
  }
}

export default SendMessageView;
