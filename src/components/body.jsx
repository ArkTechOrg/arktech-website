import React, { useState } from 'react';
import Penguin from '../assets/section/linuxgang-penguin.svg';

export default function Body() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <section>
        <h1>Join the GNU/Linux Gang</h1>
        <p>Collaborate with Developers and work on Open Source Projects</p>
        <div className="get__started__button__container">
          {isClicked ? (
            <>
              <button className="get__started__button">WhatsApp</button>
              <button className="get__started__button">Discord</button>
            </>
          ) : (
            <button className="get__started__button" onClick={() => setIsClicked(true)}>
              Get Started
            </button>
          )}
        </div>
      </section>
      <div className="penguin">
        <img src={Penguin} alt="Penguin mascot of GNU/Linux Gang" />
      </div>
    </>
  );
}
