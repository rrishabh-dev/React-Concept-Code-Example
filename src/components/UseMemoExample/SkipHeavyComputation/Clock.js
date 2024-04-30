import React from 'react';
import format from 'date-fns/format';

const Clock = ({ time }) => {
  console.log('Clock component render');
  return (
    <p className="clock">
      {format(time, 'hh:mm:ss a')}
    </p>
  );
}

export default Clock;
