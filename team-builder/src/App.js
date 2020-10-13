import React, {useState} from 'react';
import Particles from 'react-particles-js'; 
import { v4 as uuid } from 'uuid' // GROSS
import './App.css';
import TeamForm from './Form'
import Member from './Member'
import ParticleComponent from './ParticleComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
