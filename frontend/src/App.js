import "./App.css";

import MessagesView from "./messages_view.js";

function App() {
  return (
    <div className="App">
      <MessagesView messages={["message 1", "message 2"]} />
    </div>
  );
}

export default App;
