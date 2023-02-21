import React from 'react';
import './App.css';
import Socket from './pages/socket';
import Grafico from './pages/grafico';

function App() {
  return (
    <div className="App">
      <Grafico />
      <Socket />    
    </div>
  );
}

export default App;
