import board from "./board";

let kingWhite;  // wspolrzedne bialego krola
let kingBlack;  // wspolrzedne czarnego krola
let possibleMoveToAvoidMat = false;

const findCheckmate = () => {
  const thretensTheBlackKing = []; // wspolrzedne figur zagrazajacych czarnemu krolowi
  const thretensTheWhiteKing = []; // wspolrzedne figur zagrazajacych bialemu krolowi
  
  for(let x = 0; x < board.length; x++) {
    for(let y = 0; y < board.length; y++) {
      // usuwanie podswietlenia 'check'
      if(document.getElementById(`${x},${y}`).className.includes('check')) {
        document.getElementById(`${x},${y}`).className = document
          .getElementById(`${x},${y}`)
          .className.replace(`check`, ``);
      }
      // usuwanie podswietlenia 'checkMovement'
      if(document.getElementById(`${x},${y}`).className.includes('checkMovement')) {
        document.getElementById(`${x},${y}`).className = document
          .getElementById(`${x},${y}`)
          .className.replace(`checkMovement`, ``);
      }
      // jesli pole nie jest puste i jest krolem to zapisuje wspolrzedne
      if(board[x][y] && board[x][y].name === 'king' && board[x][y].side === 'white') {
        kingWhite = `${x},${y}`;
      }
      else if(board[x][y] && board[x][y].name === 'king' && board[x][y].side === 'black') {
        kingBlack = `${x},${y}`;
      }
    }
  }

  for(let x = 0; x < board.length; x++) {
    for(let y = 0; y < board.length; y++) {
      // jesli nie jest puste, jest białe, ale nie jest krolem to sprawdz czy moze zbic czarnego
      if(board[x][y] && board[x][y].name !== 'king' && board[x][y].side === 'white' && board[x][y].findLegalMoves().includes(`${kingBlack}`)) {
        thretensTheBlackKing.push(`${x},${y}`);
        document.getElementById(kingBlack).className += ` check`;
      }
      // jesli nie jest puste, jest czarne, ale nie jest krolem to sprawdz czy moze zbic bialego
      else if(board[x][y] && board[x][y].name !== 'king' && board[x][y].side === 'black' && board[x][y].findLegalMoves().includes(`${kingWhite}`)) {
        thretensTheWhiteKing.push(`${x},${y}`);
        document.getElementById(kingWhite).className += ` check`;
    }
  }
}

possibleMoveToAvoidMat=false;
if (thretensTheWhiteKing.length!=0) {mat(thretensTheWhiteKing,'white'); possibleMoveToAvoidMat=true;}
if (thretensTheBlackKing.length!=0) {mat(thretensTheBlackKing,'black'); possibleMoveToAvoidMat=true;}
}

let possibleMovesPlayer = [];

function mat(thretens,chessSide)
{
  possibleMovesPlayer = [];
  let KingX; let KingY;
  if(chessSide==='white')
  {
     KingX = kingWhite[0]; KingY = kingWhite[2];
  }else{
     KingX = kingBlack[0]; KingY = kingBlack[2];
  }

  let possibleMovesKing = board[KingX][KingY].findLegalMoves();

let idPieces = [];
let movementArea = [];
let checkMat = true;

for(let el of thretens)
{
  let thretensKingX = el.charAt(0);
  let thretensKingY = el.charAt(2);
  let bias = thretensKingY;

//Movement on X
if(thretensKingX === KingX) 
{
  if(thretensKingY < KingY) 
  {
    for(let i=thretensKingY; i<KingY; i++)
      {
        possibleMovesPlayer.push(thretensKingX+','+i);
    }
  } else{ 
    for(let i=thretensKingY; i>KingY; i--)
      {
        possibleMovesPlayer.push(thretensKingX+','+i);
    }
  }
}
//Movement on Y 
if(thretensKingY === KingY) 
{ 
  if(thretensKingX < KingX) 
  {
    for(let i=thretensKingX; i<KingX; i++) 
      {
        possibleMovesPlayer.push(i+','+thretensKingY);
    }
  }else{
    for(let i=thretensKingX; i>KingX; i--) 
    {
      possibleMovesPlayer.push(i+','+thretensKingY);
    }
  }
}

//Movement bias
if(board[thretensKingX][thretensKingY].name === 'knight')
{
  possibleMovesPlayer.push(thretensKingX+','+thretensKingY);
}else{

  if(thretensKingX < KingX && thretensKingY < KingY)
  {
    for(let i=thretensKingX; i<KingX; i++) 
    {
      possibleMovesPlayer.push(i+','+bias);
      bias++;
    }
  }else if(thretensKingX < KingX && thretensKingY > KingY)
    {
      for(let i=thretensKingX; i<KingX; i++) 
      {
        possibleMovesPlayer.push(i+','+bias);
        bias--;
      }
    }else if(thretensKingX > KingX && thretensKingY < KingY)
      {
        for(let i=thretensKingX; i>KingX; i--) 
        {
          possibleMovesPlayer.push(i+','+bias);
          bias++;
        }
      }else if(thretensKingX > KingX && thretensKingY > KingY)
        {
          for(let i=thretensKingX; i>KingX; i--) 
          {
            possibleMovesPlayer.push(i+','+bias);
            bias--;
          }
        }
      
      }
}

//Possible move of all our pieces
for(let x = 0; x < board.length; x++) {
  for(let y = 0; y < board.length; y++) {
    if(board[x][y] && board[x][y].side === chessSide && board[x][y].name != 'king') 
    {
      idPieces.push(`${x},${y}`);
    }
  }
}

let idPiecesX; let idPiecesY;

for(let i=0;i<idPieces.length;i++)
{
  idPiecesX = idPieces[i].charAt(0);
  idPiecesY = idPieces[i].charAt(2);
  movementArea.push(board[idPiecesX][idPiecesY].findLegalMoves());
}

//Check if we can cover up our king or knock down enemy
for(let el1 of possibleMovesPlayer)
{
  for(let el2 of movementArea)
  {
    if(el2.includes(el1)) checkMat = false;
  }
}

let indexOfElementpossibleMovesKing;
//When we can`t protect our king
if(checkMat)
{
  //Check if king has a field to escape
  for(let el1 of possibleMovesKing)
  {
    for(let el2 of possibleMovesPlayer)
    {
      if(el1 === el2) indexOfElementpossibleMovesKing = possibleMovesKing.indexOf(el1);
    }
  }
  possibleMovesKing.splice(indexOfElementpossibleMovesKing, 1);
  //If there is no escape game over
  if(possibleMovesKing.length===0) fanfary(chessSide);
} 

possibleMovesKing = [];
movementArea = [];
}

function fanfary(side)
{
  document.getElementById('time').style.display = 'none';
  document.getElementById('wrapper').style.display = 'none';
  document.getElementById('fireworks').hidden = false;
  let winText = document.getElementById('winText');
  (side==='black') ? winText.innerHTML = "Dzisiaj wygrała<br>Jasna strona mocy" : winText.innerHTML = "Dzisiaj wygrała<br>Ciemna strona mocy";
}

//Blocking player movement, can only save king
const movementArea = tab => {
  let possibleMove = [];
  if(possibleMoveToAvoidMat) {
  for (let el1 of tab)
  {
    for(let el2 of possibleMovesPlayer)
    {
      if(el1 === el2) possibleMove.push(el1);
    }
  }
  return possibleMove;
   } else return tab;
}

const movementAreaKing = (tab) =>{
  let indexOfElementpossibleMove = 0;
  //Check if king has a field to escape
  for(let el1 of tab)
  {
    for(let el2 of possibleMovesPlayer)
    {
      if(el1 === el2) indexOfElementpossibleMove = tab.indexOf(el1);
    }
  }
  //Possibles moves for king
  tab.splice(indexOfElementpossibleMove, 1);
  return tab;
}

export {findCheckmate, movementArea, movementAreaKing};