import React from 'react';
import './styles.css';

function App() {
  return (
    <div>
      <header>
        <nav>
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Community</a>
          <a href="#">About</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Join the Linux Gang</h1>
          <p>Collaborate with other developers on open source projects.</p>
          <a href="#" className="btn">Get started</a>
        </section>

        <section className="projects">
          <h2>Our Projects</h2>
          <ul>
            <li>
              <a href="#">
                <h3>Project 1</h3>
                <p>Description of Project 1</p>
              </a>
            </li>
            <li>
              <a href="#">
                <h3>Project 2</h3>
                <p>Description of Project 2</p>
              </a>
            </li>
            <li>
              <a href="#">
                <h3>Project 3</h3>
                <p>Description of Project 3</p>
              </a>
            </li>
          </ul>
        </section>

        <section className="community">
          <h2>Join Our Community</h2>
          <p>Connect with other developers and contribute to open source projects.</p>
          <a href="#" className="btn">Join now</a>
        </section>

        <section className="about">
          <h2>About Us</h2>
          <p>We are a community of developers dedicated to creating and contributing to open source projects.</p>
          <a href="#" className="btn">Learn more</a>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Linux Gang</p>
      </footer>
    </div>
  );
}

export default App;
