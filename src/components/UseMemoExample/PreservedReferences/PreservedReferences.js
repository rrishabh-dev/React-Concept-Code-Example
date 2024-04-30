import React, { useId, useMemo, useState } from 'react';

import './index.css';
import Boxes from './Boxes';

const PreservedReferences = () => {
  const id = useId();
  const [name, setName] = useState('');
  const [boxWidth, setBoxWidth] = useState(1);

  const boxes = useMemo(() => {
    return [
      { flex: boxWidth, background: 'hsl(345deg 100% 50%)' },
      { flex: 3, background: 'hsl(260deg 100% 40%)' },
      { flex: 1, background: 'hsl(50deg 100% 60%)' },
    ];
  }, [boxWidth]);

  return (
    <>
      <Boxes boxes={boxes} />
      
      <section>
        <label htmlFor={`${id}-name`}>
          Name:
        </label>
        <input
          type="text"
          value={name}
          id={`${id}-name`}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor={`${id}-box-width`}>
          First box width:
        </label>
        <input
          id={`${id}-box-width`}
          type="range"
          min={1}
          max={5}
          step={0.01}
          value={boxWidth}
          onChange={e => setBoxWidth(Number(e.target.value))}
        />
      </section>
    </>
  );
}

export default PreservedReferences;
