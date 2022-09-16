import React from 'react';

import './Display.css';

export default function Display({ headStats, middleStats, bottomStats, catches }) {
  return (
    <fragment className='display'>
      <div>Head was changed {`${headStats}`} times, body was changed {`${middleStats}`} times, and bottom was changed {`${bottomStats}`} times </div>
      <p>Past Catchphrases:</p>
      <ul>
        {catches.map((catch) => (
          <li key={catch}>{catch}</li>
        ))}
      </ul>
    </fragment>
  );
}
