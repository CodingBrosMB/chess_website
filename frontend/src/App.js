import React from 'react';
import './App.css';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import NavBar from './components/NavBar';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/CodingBrosMB">
        CodingBrosMB
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Awesome Chess</h1>
      </header>
      <main className="App-main">
        <NavBar />
        <h1>brought to you by<br />CodingBrosMB</h1>
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
      </main>
      <footer className="App-footer">
        <Copyright />
      </footer>
    </div>
  );
}

export default App;
