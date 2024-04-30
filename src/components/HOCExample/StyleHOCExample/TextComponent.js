import React from 'react';

import withHover from '../../../hoc/withHover';
import withFancyText from '../../../hoc/withFancyText';

const TextComponent = ({ text, isHovered }) => {
  return (
    <>
      <div>Text with HOC's styling.</div>
      <div style={{ color: 'darkmagenta' }}>Text with custom styling.</div>
      <hr />
      <p style={{ backgroundColor: isHovered ? "lightblue" : "white" }}>{ text }</p>
    </>
  )
}

export default withFancyText(withHover(TextComponent));
