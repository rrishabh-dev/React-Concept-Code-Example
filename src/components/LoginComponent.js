import withTranslation from "../hoc/withTranslation";

const i18n = {
  en: {
    "Please Login": 'Please Login',
  },
  es: {
    "Please Login": 'Por favor Iniciar sesión',
  },
  fr: {
    "Please Login": 'Veuillez vous connecter'
  },
  hi: {
    "Please Login": 'कृपया लॉगिन करें'
  }
};

const LoginComponent = ({ translate, language, changeLanguage }) => {
  const languageNames = new Intl.DisplayNames(['en'], {
    type: 'language'
  });

  return (
    <div>
      <p>{translate('Please Login')}</p>
      <p>Current language: {languageNames.of(language)}</p>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
      <button onClick={() => changeLanguage('fr')}>Français</button>
      <button onClick={() => changeLanguage('hi')}>हिंदी</button>
    </div>
  );
};

export default LoginComponent;
export const LoginComponentWithTranslation = withTranslation(LoginComponent, i18n);
