import board from "../board";

class Piece {
  constructor(x, y, side) {
    this.x = x;
    this.y = y;
    this.side = side; //'black' or 'white'
  }
  move(id) {
    const newX = Number(id[0]);
    const newY = Number(id[2]);
    console.log(this.name);

    //clearing previous place
    board[this.x][this.y] = null;
    document.getElementById(`${this.x},${this.y}`).innerHTML = "";

    //setting new
    this.x = newX;
    this.y = newY;
    board[this.x][this.y] = this;
    document.getElementById(id).innerHTML = this.display;

    if (this.name === "pawn") {
      if (
        (this.side === "white" && this.x === 0) ||
        (this.side === "black" && this.x === 7)
      ) {
        this.promote();
      }
    }
  }
  findLegalMoves() {}
}

export default Piece;
