import { useState } from 'react';
import './App.css';
import linuxLogo from './assets/linuxgang-penguin.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>Welcome to our Open Source Development Site</h1>
        <p>Explore our projects, contribute to the community, and learn from others.</p>
      </header>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <footer>
        <p>License: MIT</p>
        <p>Contribute: <a href="https://github.com/Linux-Gang">https://github.com/Linux-Gang</a></p>
      </footer>
      <div className="penguin-container">
      <img align="right" src={linuxLogo} className="penguin-container" />
      </div>
    </div>
  )
}

export default App;
