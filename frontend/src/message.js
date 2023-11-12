import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Avatar, Card, Skeleton, Switch } from "antd";
const { Meta } = Card;

function Message(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Card
          style={{
            width: 700,
            marginTop: 16,
          }}
        >
          {props.message_content}
        </Card>
      </div>
    </div>
  );
}

export default Message;
