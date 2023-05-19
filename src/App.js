import React, { useState } from 'react';
import './App.css';

// TODO store drum keys values - key, id, audio url
const drumKeys = [
  {
    id: 'Heater-1',
    keyCode: 81,
    keyTrigger: 'Q',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    id: 'Heater-2',
    keyCode: 87,
    keyTrigger: 'W',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    id: 'Heater-3',
    keyCode: 69,
    keyTrigger: 'E',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    id: 'Heater-4',
    keyCode: 65,
    keyTrigger: 'A',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    id: 'Clap',
    keyCode: 83,
    keyTrigger: 'S',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    id: 'Open-HH',
    keyCode: 68,
    keyTrigger: 'D',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    id: "Kick-n'-Hat",
    keyCode: 90,
    keyTrigger: 'Z',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    id: 'Kick',
    keyCode: 88,
    keyTrigger: 'X',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    id: 'Closed-HH',
    keyCode: 67,
    keyTrigger: 'C',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
]

function App() {
  // TODO set initial state of display
  const [ display, setDisplay ] = useState('Start Playing');

  /**
   * TODO create drum pad component
   * map drumKeys to render 9 buttons displaying their respective key (Q, W, E, A, S, D, Z, X, C)
   * Each key contains a audio element with src="its audio url" and id="its key value e.g. Q"
  */

 // TODO Event listener click and event listener key press

 // TODO change state of display to triggered audio's name

  return (
    <div id="drum-machine" className="App">
      <div className='container'>
        <div id="display">{display}</div>
        <div className='drum-pad-container'>{drumKeys.map((key) => (
          <button className='drum-pad' key={key.id}>{key.keyTrigger}</button>
        ))}</div>
      </div>
    </div>
  );
}

export default App;
