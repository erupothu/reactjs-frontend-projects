import React from 'react';
import './App.css';
import Header from './components/headers/Header';
import Home from './pages/home/Home';
import AppRouter from './AppRouter';

function App() {
  return (
    <div className="App">
      <AppRouter></AppRouter>
    </div>
  );
}

export default App;
