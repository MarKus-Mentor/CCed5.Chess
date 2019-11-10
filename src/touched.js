import board from './board';

let movesNumber = false;    // MENTOR: nazwa zmiennej - co mówi?
let unclick = 88;           // MENTOR: czy '88' czemuś służy?

const touched = e => {
  const x = e.currentTarget.id[0];
  const y = e.currentTarget.id[2];
  let chessSide = 'white';
console.log(unclick);
  resetBacklight();
  if(movesNumber) chessSide = 'white';      // MENTOR: może skrócić zapis?
  else chessSide = 'black';

  if (!board[x][y] || board[x][y].side == chessSide || unclick==x+y) {    // MENTOR: działa, dopóki 'x' i 'y' są stringami; ja bym się zabezpieczył w przypadku 'x+y'
    resetBacklight();                                                     // MENTOR: wytłumaczyć warunek
    unclick = 88;
    return;
  }
  unclick = x+y;

  const possibleMoves = board[x][y].findLegalMoves();

  for (let el of possibleMoves) {
    let childKnot = document.getElementById(el).childNodes;
    console.log("Elementy z dziecmi: " + childKnot);
    if(document.getElementById(el).childElementCount!=0)                  // MENTOR: pobieranie danych z DOM zamiast JS = 'childElementCount'
    {
      console.log(board[x][y].side);                                      // MENTOR: to chyba wygląda na generalne usuwanie 'swoich' z 'possibleMoves'
      if(childKnot.item(0).classList[2] == board[x][y].side) {            // MENTOR: znowu '==' zamiast '==='; a co kiedy zmieni się kolejność w 'classList'? Dlatego IMG nie działa!
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
    document.getElementById(el).addEventListener('click', e => {
      board[x][y].move(e.currentTarget.id);
      movesNumber = !Boolean(movesNumber);                      // MENTOR: poprawić dziwoląga
    });
  }
};

function resetBacklight ()
{
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
}

export default touched;
