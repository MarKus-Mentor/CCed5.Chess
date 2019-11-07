import Piece from './piece';

class Rook extends Piece {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'rook';
    this.display = `<i class="fas fa-chess-rook ${side}"></i>`; //fontawesome rook
  }
  findLegalMoves() {
    const possibleMoves = [];
    
    for (let i=1;i<8;i++) {
      if (this.x+i<8) {
        possibleMoves.push(`${this.x+i},${this.y}`);
        }
      if (this.x-i>=0) {
        possibleMoves.push(`${this.x-i},${this.y}`);
          }  
      if (this.y+i<8) {
        possibleMoves.push(`${this.x},${this.y+i}`);
        }
      if (this.y-i>=0) {
        possibleMoves.push(`${this.x},${this.y-i}`);
          }
    }

    return possibleMoves;
  }
}

export default Rook;
