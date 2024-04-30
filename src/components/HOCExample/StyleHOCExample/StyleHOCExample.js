import React from 'react';
import TextComponent from './TextComponent';
import InputComponent from './InputComponent';

const StyleHOCExample = () => {
  return (
    <div>
      <TextComponent text="Some Random Text" />
      <br />
      <InputComponent />
    </div>
  )
}

export default StyleHOCExample;
