import Pawn from './pieces/pawn';
import King from "./pieces/king";
import Queen from "./pieces/queen";
import Rook from "./pieces/rook";
import Knight from "./pieces/knight";
import Bishop from "./pieces/bishop";

const board = new Array(8);
for (let i = 0; i < 8; i++) {
  board[i] = new Array(8);
}

// pobieramy tablicę z localStorage, albo generujemy nową jeli jeszcze jej tam nie ma i zapisujemy do localStorage

let boardStorage = JSON.parse(localStorage.getItem("board"));
console.log(boardStorage);

if (boardStorage) {
  for (let x = 0; x < boardStorage.length; x++) {
    for (let y = 0; y < boardStorage.length; y++) {
      let piece = boardStorage[x][y];
      if (piece !== null) {
        let instance;
        switch (piece.name) {
          case "pawn":
            instance = new Pawn(piece.x, piece.y, piece.side);
            board[instance.x][instance.y] = instance;
            break;
          case "king":
            instance = new King(piece.x, piece.y, piece.side);
            board[instance.x][instance.y] = instance;
            break;
          case "queen":
            instance = new Queen(piece.x, piece.y, piece.side);
            board[instance.x][instance.y] = instance;
            break;
          case "rook":
            instance = new Rook(piece.x, piece.y, piece.side);
            board[instance.x][instance.y] = instance;
            break;
          case "knight":
            instance = new Knight(piece.x, piece.y, piece.side);
            board[instance.x][instance.y] = instance;
            break;
          case "bishop":
            instance = new Bishop(piece.x, piece.y, piece.side);
            board[instance.x][instance.y] = instance;
            break;
        }
        boardStorage[x][y] = instance;
      }
    }
  }
} else {
  let pawn = new Pawn(6, 0, 'white');
  board[pawn.x][pawn.y] = pawn;
  pawn = new Pawn(6, 1, 'white');
  board[pawn.x][pawn.y] = pawn;

  localStorage.setItem("board", JSON.stringify(board));
}

export default board;
