import React from 'react';
import { useState } from 'react';
import './Main.css';

import Controls from '../../Controls/Controls';
import Character from '../../Character/Character';
import Catch from '../../Catch/Catch';
import Display from '../../Display/Display';

export default function Main() {
  const [head, setHead] = useState('');
//head is the state variable and setHead is the setter function that will change that state
  const [middle, setMiddle] = useState('');
  const [bottom, setBottom] = useState('');

  const [headStats, setHeadStats] = useState(0);
  const [middleStats, setMiddleStats] = useState(0);
  const [bottomStats, setBottomStats] = useState(0);

  const [catches, setCatches] = useState([]);

  const handleHeadIncrement = () => {
    setHeadStats((prevState) => prevState + 1);
  };

  const handleMiddleIncrement = () => {
    setMiddleStats((prevState) => prevState + 1);
  };

  const handleBottomIncrement = () => {
    setBottomStats((prevState) => prevState + 1);
  };

  return (
    <main>
      <div className='left'>
        <Controls head={head} setHead={setHead} 
          middle={middle} setMiddle={setMiddle} 
          bottom={bottom} setBottom={setBottom} 
          handleHeadIncrement={handleHeadIncrement} 
          handleMiddleIncrement={handleMiddleIncrement} 
          handleBottomIncrement={handleBottomIncrement} />
        <Catch catches={catches} setCatches={setCatches} />
        <Display headStats={headStats} middleStats={middleStats} bottomStats={bottomStats} catches={catches} />
      </div>
      <Character head={head} middle={middle} bottom={bottom} />
    </main>
  );
}