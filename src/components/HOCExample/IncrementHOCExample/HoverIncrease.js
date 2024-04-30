import { useState } from "react";

import withCounter from '../../../hoc/withCounter';

const HoverIncrease = ({ name, counter, incrementCounter, secretText }) => {
  const [fontSize, setFontSize] = useState(10);

  return (
    <div>
      <button onMouseOver={() => setFontSize((size) => size + 1)}>
        Increase on hover
      </button>
      <p style={{ fontSize }}>
        Size of font in onMouseOver function: {fontSize}
      </p>
      <p> Value of 'name' in <strong>HoverIncrease:</strong> {name}</p>
      <button onMouseOver={() => incrementCounter()}>Increment counter</button> 
      <p>Value of 'counter' in <strong>HoverIncrease:</strong> {counter}</p>
      <br />
      <bold>SecretText:</bold> <strong><i>{secretText}</i></strong>
    </div>
  );
}

export default withCounter(HoverIncrease, 5);
