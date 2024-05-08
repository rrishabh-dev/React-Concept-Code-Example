import React, { useState } from 'react';

import './TicTacToe.css';
import { calculateWinner, status } from './helper';

const TicTacToe = () => {
  const [data, setData] = useState(Array(9).fill(null));
  const nextPlayer = data.filter(Boolean).length % 2 === 0 ? "X" : "O";
  const winner = calculateWinner(data);

  const squareSelected = (square) => {
    console.log(square);
    const temp = [...data];
    console.log(temp);
    temp[square] = nextPlayer;
    setData(temp);
  };

  const resetGame = () => setData(Array(9).fill(null));

  const squareData = (square) => {
    return (
      <div
        className="column"
        onClick={!data[square] ? () => squareSelected(square) : null}
      >
        {data[square]}
      </div>
    );
  };

  return (
    <div className="main-container">
      <h1>Tic Tac Toe</h1>
      <div>{status(winner, nextPlayer)}</div>
      <div className="board">
        <div className="row">
          {squareData(0)}
          {squareData(1)}
          {squareData(2)}
        </div>
        <div className="row">
          {squareData(3)}
          {squareData(4)}
          {squareData(5)}
        </div>
        <div className="row">
          {squareData(6)}
          {squareData(7)}
          {squareData(8)}
        </div>
      </div>

      <button className="reset" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default TicTacToe;
