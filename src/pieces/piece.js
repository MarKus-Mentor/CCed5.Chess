import board from '../board';

class Piece {
  constructor(x, y, side) {
    this.x = x;
    this.y = y;
    this.side = side; //'black' or 'white'
  }

  move(id) {
    const newX = Number(id[0]);
    const newY = Number(id[2]);

    //clearing previous place
    const oldXY = {...board[this.x][this.y]};
    board[this.x][this.y] = null;
    document.getElementById(`${this.x},${this.y}`).innerHTML = '';

    //setting new
    this.x = newX;
    this.y = newY;
    board[this.x][this.y] = this;
    const newXY = {...board[this.x][this.y]};
    document.getElementById(id).innerHTML = this.display;

    // log move to the console
    const yArr = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const figure = `${this.side} ${this.name}`;
    const figureLocation = `${yArr[this.y]}${this.x}`;
    console.log(`${figure} go to ${figureLocation}`);

    // add move to localStorage
    const boardStorage = JSON.parse(localStorage.getItem("board"));
    let piecePosition = boardStorage[oldXY.x][oldXY.y];
    piecePosition.x = newXY.x;
    piecePosition.y = newXY.y;
    boardStorage[newXY.x][newXY.y] = piecePosition;
    boardStorage[oldXY.x][oldXY.y] = null;
    localStorage.setItem("board", JSON.stringify(boardStorage));
  }

  findLegalMoves() {}
}

export default Piece;
