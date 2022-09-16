import React from 'react';

import './Character.css';

export default function Character({ Head, Middle, Bottom }) {
  return (
    <div className='character'>
      <div>{Head}Head</div>
      <div>{Middle}Middle</div>
      <div>{Bottom}Bottom</div>
    </div>
  );
}
