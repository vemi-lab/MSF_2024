import logo from './assets/logo.svg';
import vemiLogo from './assets/VEMI-Logo-2020-1024x430.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={vemiLogo} className="App-logo" alt="logo" />
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
