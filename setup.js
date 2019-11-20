import touched from './touched';
import board from './board';

const setup = () => {
  // console.log(board);
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  for (let x = 0; x < board.length; x++) {
    // tworzymy indeksy z cyframi
    const index = document.createElement('div');
    index.id = `index${x},0`;
    index.innerHTML = `${board.length - x}`;
    index.className = 'index';
    index.className += ' num';
    index.className += x % 2 ? ' dark' : ' light';
    document.getElementById('board').appendChild(index);
    index.style.top = `${0 + 10*x}vh`;

    // tworzymy indeksy z literami
    const indexLetter = document.createElement('div');
    indexLetter.id = `indexLetter7,${x}`;
    indexLetter.innerHTML = `${alphabet[x]}`;
    indexLetter.className = 'index';
    indexLetter.className += ' letter';
    indexLetter.className += x % 2 ? ' light' : ' dark';
    document.getElementById('board').appendChild(indexLetter);
    indexLetter.style.right = `${70 - 10*x}vh`;

    for (let y = 0; y < board[x].length; y++) {
      const square = document.createElement('div');
      square.id = `${x},${y}`;
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
