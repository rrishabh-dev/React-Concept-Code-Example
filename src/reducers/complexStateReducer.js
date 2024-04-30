const complexStateReducer = (prevState, action) => {
  switch (action.type) {
    case 'USERNAME':
      return {
        ...prevState,
        username: action.payload,
      };
    case 'PASSWORD':
      return {
        ...prevState,
        password: action.payload,
      };
    case 'LOGGED_IN':
      return {
        ...prevState,
        isLoggedIn: true,
      };
    case 'LOGGED_OUT':
      return {
        ...prevState,
        isLoggedIn: false,
        username: '',
        password: '',
      };
    case 'IS_LOADING':
      return {
        ...prevState,
        isLoading: true,
      };
    case 'IS_NOT_LOADING':
      return {
        ...prevState,
        isLoading: false,
      };
    case 'ERROR':
      return {
        ...prevState,
        isError: true,
        isLoading: false,
      };
    default:
      break;
  }
};

export default complexStateReducer;
