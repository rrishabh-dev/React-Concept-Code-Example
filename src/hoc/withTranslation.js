import React, { useState } from 'react';

const withTranslation = (WrappedComponent, translation) => {
  const NewComponent = (props) => {
    const [language, setLanguage] = useState('en');

    const translate = (key) => translation[language][key] || key;

    const changeLanguage = (lang) => setLanguage(lang);

    return (
      <WrappedComponent
        {...props}
        language={language}
        translate={translate}
        changeLanguage={changeLanguage}
      />
    );
  };

  return NewComponent;
}

export default withTranslation;
