import React, { memo } from 'react';

const Boxes = ({ boxes }) => {
  return (
    <div className="boxes-wrapper">
      {boxes.map((boxStyles, index) => (
        <div
          key={index}
          className="box"
          style={boxStyles}
        />
      ))}
    </div>
  );
}

export default memo(Boxes);
