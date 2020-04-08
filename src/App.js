import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
    <Navbar />
      <header className="App-header">
        <div>
          <h2>
            Andrew Doolittle
          </h2>
        </div>
        <div>
          Full Stack Software Engineer
        </div>
        <a href="https://github.com/azdoolittle"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ei-sc-github.svg/512px-Ei-sc-github.svg.png"></img></a>
      </header>
    </div>
  );
}

export default App;
