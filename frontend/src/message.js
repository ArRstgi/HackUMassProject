// import React from "react";
// import { Card } from "antd";

// function Message(props) {
//   return <Card>{props.message_content}</Card>;
// }

// export default Message;

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Avatar, Card, Skeleton, Switch } from 'antd';
const { Meta } = Card;

function Message(props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh' }}>
      <div>
        <Card
          style={{
            width: 400,
            marginTop: 16,
          }}
        >
        <Meta
          description={props.message_content}
        />
        </Card>
      </div>
    </div>
  );
};

export default Message;