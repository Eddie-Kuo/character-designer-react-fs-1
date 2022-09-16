import React from 'react';
import { useState } from 'react';
import './Main.css';

import Controls from '../../Controls/Controls';
import Character from '../../Character/Character';
import Catch from '../../Catch/Catch';
import Display from '../../Display/Display';


export default function Main() {
  const [head, setHead] = useState('');

  return (
    <main>
      <div className='left'>
        <Controls setHead={setHead}/>
        <Catch />
        <Display />
      </div>
      <Character head={head}/>
    </main>
  );
}


