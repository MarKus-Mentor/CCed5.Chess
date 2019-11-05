import Piece from './piece';

class King extends Piece {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'king';
    this.display = `<i class="fas fa-chess-king ${side}"></i>`; //fontawesome king
  }
  findLegalMoves() {
    const possibleMoves = [];

    return possibleMoves;
  }
}

export default King;
