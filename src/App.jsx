// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Project from './components/Project';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
      <h1 className="main-heading">Welcome to Linux-Gang</h1>
  <p className="section-heading">Discover and contribute to open-source projects</p>
  <section>
    <h2 className="projects-heading">Featured Projects</h2>
          <div className="projects-grid">
            <Project
              name="React"
              description="A JavaScript library for building user interfaces"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
            />
            <Project
              name="Node.js"
              description="A JavaScript runtime built on Chrome's V8 JavaScript engine"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
            />
            <Project
              name="Python"
              description="A high-level programming language for general-purpose programming"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
