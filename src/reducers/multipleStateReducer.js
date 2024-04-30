const multipleStateReducer = (prevState, action) => {
  let fruitsNew = [];
  let { fruits } = prevState;
  let { actionType, actionData } = action;

  switch (actionType) {
    case 'AddFruit':
      fruitsNew = [...fruits, actionData];
      break;
    case 'RemoveLastFruit':
      fruitsNew = [...fruits.slice(0, fruits.length - 1)];
      break;
    case 'ClearFruitBasket':
      break;
    default:
      throw new Error('Unknown type');
  }

  return {
    ...prevState,
    fruits: fruitsNew,
  };
};

export default multipleStateReducer;
