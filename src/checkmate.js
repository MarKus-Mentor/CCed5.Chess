import board from "./board";

let kingWhite;  // wspolrzedne bialego krola
let kingBlack;  // wspolrzedne czarnego krola


const findCheckmate = () => {
  const thretensTheBlackKing = []; // wspolrzedne figur zagrazajacych czarnemu krolowi
  const thretensTheWhiteKing = []; // wspolrzedne figur zagrazajacych bialemu krolowi

  for(let x = 0; x < board.length; x++) {
    for(let y = 0; y < board.length; y++) {
      // jesli pole nie jest puste i jest krolem to zapisuje wspolrzedne
      if(board[x][y] && board[x][y].name === 'king' && board[x][y].side === 'white') kingWhite = `${x},${y}`;
      else if(board[x][y] && board[x][y].name === 'king' && board[x][y].side === 'black') kingBlack = `${x},${y}`;
    }
  }

  // usowanie podswietlenia "check"
  if(document.getElementById(kingBlack).className.includes('check')) {
    document.getElementById(kingBlack).className = document
      .getElementById(kingBlack)
      .className.replace(`check`, ``);
  }
  if(document.getElementById(kingWhite).className.includes('check')) {
    document.getElementById(kingWhite).className = document
      .getElementById(kingWhite)
      .className.replace(`check`, ``);
  }

  for(let x = 0; x < board.length; x++) {
    for(let y = 0; y < board.length; y++) {
      // jesli nie jest puste, jest białe, ale nie jest krolem to sprawdz czy moze zbic czarnego
      if(board[x][y] && board[x][y].name !== 'king' && board[x][y].side === 'white') {
        if(board[x][y].findLegalMoves().includes(`${kingBlack}`)) {
          thretensTheBlackKing.push(`${x},${y}`);
          if(!document.getElementById(kingBlack).className.includes('check'))
          document.getElementById(kingBlack).className += ` check`;
          console.log(`Czarny krol moze byc zbity!`);
          console.log(`Zagraza mu:`);
          thretensTheBlackKing.forEach(n => console.log(`[${n}]`));
        }
      }
      // jesli nie jest puste, jest czarne, ale nie jest krolem to sprawdz czy moze zbic bialego
      else if(board[x][y] && board[x][y].name !== 'king' && board[x][y].side === 'black') {
        if(board[x][y].findLegalMoves().includes(`${kingWhite}`)) {
          thretensTheWhiteKing.push(`${x},${y}`);
          if(!document.getElementById(kingBlack).className.includes('check'))
          document.getElementById(kingWhite).className += ` check`;
          console.log(`Bialy krol moze byc zbity!`);
          console.log(`Zagraza mu:`);
          thretensTheWhiteKing.forEach(n => console.log(`[${n}]`));
        }
      }
      
    }
  }
  console.log(kingWhite);
  console.log(kingBlack);
}

export default findCheckmate;