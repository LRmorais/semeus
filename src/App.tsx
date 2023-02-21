import React from 'react';
import './App.css';
// import Socket from './pages/socket';
import Grafico from './pages/grafico';
import AppBar from './components/appBar'
import Socket from './components/socket';
import Grid from './components/grid/index';

function App() {
  return (
    <div className="App">
      <AppBar/>
      <Grid>
        <Grafico /> 
      </Grid>   
      {/* <Socket />     */}

    </div>
  );
}

export default App;
