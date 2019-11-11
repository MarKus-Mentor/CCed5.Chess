import board from './board';

let movesNumber = false;
let unclick = 88;

const touched = e => {
  const x = e.currentTarget.id[0];
  const y = e.currentTarget.id[2];
  let chessSide = 'white';

  resetBacklight();
  if(movesNumber) chessSide = 'white';
  else chessSide = 'black';

  if (!board[x][y] || board[x][y].side == chessSide || unclick==x+y) {
    resetBacklight(); 
    unclick = 88;
    return;
  }
  unclick = x+y;

  const possibleMoves = board[x][y].findLegalMoves();

  for (let el of possibleMoves) {
    let childKnot = document.getElementById(el).childNodes;
    console.log("Elementy z dziecmi: " + childKnot);
    if(document.getElementById(el).childElementCount!=0) 
    {
      console.log(board[x][y].side);
      if(childKnot.item(0).classList[2] == board[x][y].side) {
        let ourElementsPosition = possibleMoves.indexOf(document.getElementById(el).id);
        console.log(document.getElementById(el).id);
        console.log("Przed: " + possibleMoves);
        possibleMoves.splice(ourElementsPosition,1);
        console.log("Po: " + possibleMoves);
      } 
    }
  }

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
      movesNumber = !movesNumber;
    });
  }
};

function resetBacklight ()
{
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
}

export default touched;
