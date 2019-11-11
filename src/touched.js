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
    // zmiana koloru indeksow na czarne na polach possibleMoves
    if(el === "7,0") {
    document.getElementById(`index${el}`).className = document
      .getElementById(`index${el}`)
      .className.replace(`dark`, `lightIndex`);
    document.getElementById(`indexLetter${el}`).className = document
      .getElementById(`indexLetter${el}`)
      .className.replace(`dark`, `lightIndex`);
    }
    else if(el.endsWith(",0"))
    document.getElementById(`index${el}`).className = document
      .getElementById(`index${el}`)
      .className.replace(`dark`, `lightIndex`);
    else if(el.startsWith("7,"))
    document.getElementById(`indexLetter${el}`).className = document
      .getElementById(`indexLetter${el}`)
      .className.replace(`dark`, `lightIndex`);
    document.getElementById(el).addEventListener('click', e => {
      board[x][y].move(e.currentTarget.id);
      for (let x = 0; x < board.length; x++) {
        // zmiana koloru indeksow na poczatkowe po ruchu
        document.getElementById(`index${x},0`).className = document
          .getElementById(`index${x},0`)
          .className.replace(`lightIndex`, `dark`);
        document.getElementById(`indexLetter7,${x}`).className = document
          .getElementById(`indexLetter7,${x}`)
          .className.replace(`lightIndex`, `dark`);
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
