import React from 'react';
import './Main.css';

import Controls from '../../components/Controls/Controls';
import Character from '../../components/Character/Character';
import Catchphrases from '../../components/Catchphrases/Catchphrases';
import Display from '../../components/Display/Display';

export default function Main() {
  return (
    <main>
      <div className='left'>
        <Controls />
        <Catchphrases />
        <Display />
      </div>
      <Character />
    </main>
  );
}
