import React, { useState } from 'react';

import './Catch.css';

export default function Catch({ setCatches }) {
  const [currentCatch, setCurrentCatch] = useState('');
  const handleSaveCatch = () => {
    setCatches((prevCatches) => [currentCatch, ...prevCatches]);
    setCurrentCatch('');
  };

  return (
    <div className='catch'>
      <h4>Input your Catchphrases!</h4>
      <form>
        <input type="text" value={currentCatch} onChange={(e) => setCatches(e.target.value)} ></input>
        <button onClick={handleSaveCatch} >Submit</button>
      </form>
    </div>
  );
}
