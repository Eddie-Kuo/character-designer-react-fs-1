import React from 'react';

import './Character.css';

export default function Character({ head, Middle, Bottom }) {
  return (
    <div className='character'>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/${head}-head.png`}/>
      </div>
      <div>{Middle}Middle</div>
      <div>{Bottom}Bottom</div>
    </div>
  );
}
