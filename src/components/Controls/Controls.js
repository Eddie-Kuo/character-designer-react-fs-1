import React from 'react';

import './Controls.css';

export default function Controls() {
  return (
    <div className='controls'>
      <label>Head</label>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>

      <label>Middle</label>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
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
