import React from 'react';

import './Character.css';

export default function Character({ head, middle, bottom }) {
  return (
    <div className='character'>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/${head}-head.png`}/>
      </div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/${middle}-middle.png`} />
      </div>
      <div>{bottom}Bottom</div>
    </div>
  );
}
