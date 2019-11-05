import Piece from './piece';

class Pawn extends Piece {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'pawn';
    this.display = `<i class="fas fa-chess-pawn ${side}"></i>`;
  }
  findLegalMoves() {
    // console.log(this.x, this.y);
    const possibleMoves = [];
    if (this.side == 'white') {
      this.x - 1 > 0 && possibleMoves.push(`${this.x - 1},${this.y}`);
      this.x - 2 > 0 && possibleMoves.push(`${this.x - 2},${this.y}`);
    }
    return possibleMoves;
  }
  promote() {}
  enPassant() {}
}

export default Pawn;
