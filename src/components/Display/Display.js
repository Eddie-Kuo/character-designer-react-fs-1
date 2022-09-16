import React from 'react';

import './Display.css';
import Catchphrase from '../Catchphrase/Catchphrase';

export default function Display({ headStats, middleStats, bottomStats, catches }) {
  return (
    <div className="display">
      <div>Head was changed {`${headStats}`} times, body was changed {`${middleStats}`} times, and bottom was changed {`${bottomStats}`} times </div>
      <p>Past Catchphrases:</p>
      <div>
        {catches.map((anything, index) => (
          <Catchphrase catchphrase={anything} key={anything + index} />
          //index is used to help generate a unique key in situations if the user types the same input - generates an id at the end of the item
        ))}
      </div>

    </div>
  );
}
