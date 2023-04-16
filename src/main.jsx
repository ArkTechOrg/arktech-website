import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/style.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <footer>
      <p>
        &copy; ArkTech {new Date().getFullYear()}
      </p>
    </footer>
  </React.StrictMode>,
  document.getElementById('foot')
);
