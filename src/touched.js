import board from './board';

const touched = e => {
  const x = e.currentTarget.id[0];
  const y = e.currentTarget.id[2];
  if (!board[x][y]) {
    return;
  }

  let possibleMoves = board[x][y];
  switch (board[x][y].name)
  {
    case 'pawn': possibleMoves = board[x][y].findLegalMovesPawn(); break;
    case 'rook': possibleMoves = board[x][y].findLegalMovesRook(); break;
    case 'knight': possibleMoves = board[x][y].findLegalMovesKnight(); break;
    case 'bishop': possibleMoves = board[x][y].findLegalMovesBishop(); break;
    case 'king': possibleMoves = board[x][y].findLegalMovesKing(); break;
    case 'queen': possibleMoves = board[x][y].findLegalMovesQueen(); break;
  }

  for (let el of possibleMoves) {
    document.getElementById(el).className += ` possibleMove`;
    document.getElementById(el).addEventListener('click', e => {
      board[x][y].move(e.currentTarget.id);
      for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
          document.getElementById(`${x},${y}`).className = document
            .getElementById(`${x},${y}`)
            .className.replace(`possibleMove`, '');

          //TODO: rozwiązać tematykę event listenerów sprytniej, przenosząc każdy do osobnego pliku
          let old_element = document.getElementById(`${x},${y}`);
          let new_element = old_element.cloneNode(true);
          old_element.parentNode.replaceChild(new_element, old_element);

          // document.getElementById(`${x},${y}`).removeEventListener('click');
          document.getElementById(`${x},${y}`).addEventListener('click', e => {
            touched(e);
          });
        }
      }
    });
  }
};

export default touched;
