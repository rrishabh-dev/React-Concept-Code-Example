export const calculateWinner = (data) => {
  const ans = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ];

  for (let row of ans) {
    let [x, y, z] = row;
    if (data[x] && data[x] === data[y] && data[y] === data[z]) return data[x];
  }

  return null;
};

export const status = (winner, nextPlayer) => winner ? `Winner is: ${winner}` : `Next Player is: ${nextPlayer}`;
