import { getHours } from 'date-fns';
import React, { memo, useEffect, useState } from 'react';

import './index.css';
import Clock from './Clock';
import PrimeCalculator from './PrimeCalculator';

// Transform our PrimeCalculator into a pure component:
const PurePrimeCalculator = memo(PrimeCalculator);

const getBackgroundColorFromTime = (time) => {
  const hours = getHours(time);
  
  if (hours < 12) return 'hsl(50deg 100% 90%)'; // A light yellow for mornings
  else if (hours < 18) return 'hsl(220deg 60% 92%)'; // Dull blue in the afternoon
  else return 'hsl(220deg 100% 80%)'; // Deeper blue at night
}

const useTime = () => {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);
  
    return () => {
      window.clearInterval(intervalId);
    }
  }, []);
  
  return time;
}

const SkipHeavyComputation = () => {
  const time = useTime();

  // Come up with a suitable background color,
  // based on the time of day:
  const backgroundColor = getBackgroundColorFromTime(time);

  return (
    <div style={{ backgroundColor }}>
      <Clock time={time} />
      <PurePrimeCalculator />
    </div>
  );
}

export default SkipHeavyComputation;
