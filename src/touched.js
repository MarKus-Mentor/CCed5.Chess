import board from './board';

const touched = e => {
  const x = e.currentTarget.id[0];
  const y = e.currentTarget.id[2];
  if (!board[x][y]) {
    return;
  }
  const possibleMoves = board[x][y].findLegalMoves();
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
