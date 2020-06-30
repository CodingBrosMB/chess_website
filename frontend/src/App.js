import React from 'react';
import './App.css';
import MenuAppBar from './components/AppBar';


function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <header className="App-header">
        <h1>Awesome Chess</h1><br /><h2>brought to you by<br />CodingBrosMB</h2>
        <p>
          Work in Progress
        </p>
        <a
          className="App-link"
          href="https://github.com/CodingBrosMB/chess_website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check our Repository
        </a>
      </header>
        
    </div>
  );
}

export default App;
