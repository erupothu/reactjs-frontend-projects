import React from 'react';
import './App.css';
import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';
import AppRouter from './AppRouter';


function App() {

  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
