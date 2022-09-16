import React from 'react';

import './Controls.css';

export default function Controls({ head, setHead, middle, setMiddle }) {
  return (
    <div className='controls'>
      <label>Head</label>
      <select value={head} onChange={(e) => setHead(e.target.value)} >
        <option value="tiger">Tiger</option>
        <option value="hippo">Hippo</option>
        <option value="cheetah">Cheetah</option>
        <option value="cow">Cow</option>
        <option value="monkey">Monkey</option>
      </select>

      <label>Middle</label>
      <select value={middle} onChange={(e) => setMiddle(e.target.value)} >
        <option value="blue">Blue</option>
        <option value="pink">Pink</option>
        <option value="white">White</option>
        <option value="yellow">Yellow</option>
      </select>

      <label>Bottom</label>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
  );
}
