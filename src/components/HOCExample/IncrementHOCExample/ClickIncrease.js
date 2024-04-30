import { useState } from "react";

import withCounter from '../../../hoc/withCounter';

const ClickIncrease = ({ name, counter, incrementCounter }) => {
  const [fontSize, setFontSize] = useState(10);

  return (
    <div>
      <button onClick={() => setFontSize((size) => size + 1)}>
        Increase with click
      </button>
      <p style={{ fontSize }}>
        Size of font in onClick function: {fontSize}
      </p>
      <p>Value of 'name' in <strong>ClickIncrease:</strong> {name}</p>
      <button onClick={() => incrementCounter()}>Increment counter</button> 
      <p>Value of 'counter' in <strong>ClickIncrease:</strong> {counter}</p>
    </div>
  );
}

export default withCounter(ClickIncrease, 5);
