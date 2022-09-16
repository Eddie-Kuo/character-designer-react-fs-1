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

  return (
    <main>
      <div className='left'>
        <Controls head={head} setHead={setHead} middle={middle} setMiddle={setMiddle} bottom={bottom} setBottom={setBottom} />
        <Catch />
        <Display />
      </div>
      <Character head={head} middle={middle} bottom={bottom} />
    </main>
  );
}