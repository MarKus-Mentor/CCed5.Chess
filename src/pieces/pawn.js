import Piece from './piece';

import board from '../board';

class Pawn extends Piece {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'pawn';
    this.display = `<i class="fas fa-chess-pawn ${side}"></i>`;
  }

  findLegalMoves() {
    console.log(this.x, this.y);

    const possibleMoves = [];

    if (this.side === 'white' && !board[this.x - 1][this.y]) {
      this.x - 1 >= 0 && possibleMoves.push(`${this.x - 1},${this.y}`);
      if (this.x === 6) {
        this.x - 2 >= 0 && possibleMoves.push(`${this.x - 2},${this.y}`);
        console.log(!!board[2][0]);
        console.log(!!board[1][0]);
      }
    }
    if (this.side === 'black' && !board[this.x + 1][this.y]) {
      this.x + 1 <= 7 && possibleMoves.push(`${this.x + 1},${this.y}`);
      if (this.x === 1) {
        this.x + 2 <= 7 && possibleMoves.push(`${this.x + 2},${this.y}`);
      }
    }
    if (board[this.x - 1][this.y]) {
      console.log('dziala');
    }
    return possibleMoves;
  }
  promote() {}
  enPassant() {}
}

export default Pawn;
