// app.js
import { ConfigProvider } from 'antd';
import "./App.css";

import MessagesView from "./messages_view.js";
import SendMessageView from "./send_message.js";

function App() {
  return (
    <ConfigProvider
    theme={{
      token: {
        // Seed Token
        //colorPrimary: '#8f1a00',
        //borderRadius: 2,

        // Alias Token
        colorBgContainer: '#fffff0',
        colorBorderSecondary:'#b3b3a0'
      },
    }}
    >

    <div className="App">
      <MessagesView className="messages-view" />
      <SendMessageView className="send-messages-box" />
    </div>

    </ConfigProvider>
  );
}



export default App;