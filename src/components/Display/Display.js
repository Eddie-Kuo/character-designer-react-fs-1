import React from 'react';

import './Display.css';

export default function Display({ headStats, middleStats, bottomStats }) {
  return (
    <div className='display'>Head was changed {`${headStats}`} times, body was changed {`${middleStats}`} times, and bottom was changed {`${bottomStats}`} times </div>
  );
}
