import "./App.css";

import MessagesView from "./messages_view.js";
import SendMessageView from "./send_message.js";

function App() {
  return (
    <div className="App">
      <MessagesView className="messages-view" />
      <SendMessageView className="send-messages-box" />
    </div>
  );
}

export default App;
