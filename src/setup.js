import touched from './touched';
import board from './board';

const setup = () => {
  // console.log(board);
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      const square = document.createElement('div');
      square.id = `${x},${y}`;
      // square.innerHTML = `${x}, ${y}`;// by lepiej widzieć indeksy
      square.innerHTML = board[x][y] ? board[x][y].display : '';
      square.className = 'square';
      square.className += x % 2 == y % 2 ? ' light' : ' dark';
      square.addEventListener('click', e => {
        touched(e);
      });
      document.getElementById('board').appendChild(square);
    }
  }
};

export default setup;
