import React, { useReducer } from 'react';

import './MultipleStates.css';
import multipleStateReducer from '../../../reducers/multipleStateReducer';

const randomFruits = ['apple', 'orange', 'mango', 'pineapple', 'pear'];

const initialState = { fruits: ['apple'] };

// get a random fruit
const getRandomFruit = () => randomFruits[Math.trunc((Math.random() * randomFruits.length) % randomFruits.length)];

const MultipleStates = () => {
  const [state, dispatch] = useReducer(multipleStateReducer, initialState);

  const onAdd = () => dispatch({ actionType: 'AddFruit', actionData: getRandomFruit() });
  const onRemove = () => dispatch({ actionType: 'RemoveLastFruit' });
  const onClear = () => dispatch({ actionType: 'ClearFruitBasket' });

  return (
    <div>
      <h2>
        useReducer() use case - Manage multiple states: modify an array
      </h2>
      <hr />

      <h3>Shopping cart</h3>
      <h4>Items:</h4>
      <button onClick={onAdd} className="add">+ Add random fruit to cart</button>
      <button onClick={onRemove} className="remove">- Remove last from cart</button>
      <button onClick={onClear} className="clear">X Clear array</button>

      <h5>Fruits:</h5>
      <ul className="fruit-basket">
        {state.fruits.length
          ? state.fruits.map((item, i) => (
              <li className="fruit" key={i}>
                {item}
              </li>
            ))
          : '(empty)'}
      </ul>
      <hr />
    </div>
  );
}

export default MultipleStates;
