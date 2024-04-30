const formReducers = (state, action) => {
  switch(action.type) {
    case "HANDLE INPUT TEXT":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "TOGGLE CONSENT":
      return {
        ...state,
        hasConsented: !state.hasConsented,
      };
    default:
      return state;
  }
};

export default formReducers;
