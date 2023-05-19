import React, { useState } from 'react';
import './App.css';

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
  const [ display, setDisplay ] = useState('Start Playing');

  // TODO user stories 5 & 6

  return (
    <div id="drum-machine" className="App">
      <div className='container'>
        <div id="display">{display}</div>
        <div className='drum-pad-container'>
          {drumKeys.map((key) => (
            <button 
              className='drum-pad' 
              key={key.id}
              id={key.id}
              onClick={() => setDisplay(key.id)} 
            >
              <audio 
                className='clip' 
                id={key.keyTrigger} 
                src={key.url}
              />
              {key.keyTrigger}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
