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

  return (
    <main>
      <div className='left'>
        <Controls head={head} setHead={setHead}/>
        <Catch />
        <Display />
      </div>
      <Character head={head}/>
    </main>
  );
}