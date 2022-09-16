import React from 'react';

import './Catch.css';

export default function Catch({ handleSaveCatch, setCurrentCatch, currentCatch }) {

  return (
    <div className='catch'>
      <h4>Input your Catchphrases!</h4>
      <form>
        <input type="text" value={currentCatch} onChange={(e) => setCurrentCatch(e.target.value)} ></input>
        <button onClick={handleSaveCatch} >Submit</button>
      </form>
    </div>
  );
}
