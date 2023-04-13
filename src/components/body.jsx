import React, { useState } from 'react'
import Penguin from '../assets/section/linuxgang-penguin.svg';

export default function Body() {
    const [isClicked, setClicked] = useState(false);
    return (
        <React.Fragment>
            <section>
                <h1>Join the GNU/Linux Gang</h1>
                <p>Collaborate with Developers and work on Open Source Projects</p>
                {isClicked ? <><button className="get__started__button">WhatSapp</button><button className="get__started__button">Discord</button></>
                 : <button className="get__started__button" onClick={()=>setClicked(true)}>Get Started</button>}
            </section>
            <div class="penguin">
                <img src={Penguin} alt="Linux Gang Penguin" />
            </div></React.Fragment>
    );
}
