import Piece from './piece';
import board from '../board';

class Queen extends Piece {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'queen';
    this.display = `<i class="fas fa-chess-queen ${side}"></i>`; //fontawesome queen
  }
  findLegalMoves() {
    const possibleMoves = [];

    for(let i=1; i<8; i++) {
      // ruchy w gore
      this.x - i >= 0 && possibleMoves.push(`${this.x - i},${this.y}`);
      // ruchy skosne prawo && gora
      this.x - i >= 0 && this.y + i <= 7 && possibleMoves.push(`${this.x - i},${this.y + i}`);
      // ruchy w prawo
      this.y + i <= 7 && possibleMoves.push(`${this.x},${this.y + i}`);
      // ruchy skosne prawo && dol
      this.x + i <= 7 && this.y + i <= 7 && possibleMoves.push(`${this.x + i},${this.y + i}`);
      // ruchy w dol
      this.x + i <= 7 && possibleMoves.push(`${this.x + i},${this.y}`);
      // ruchy skosne lewo && dol
      this.x + i <= 7 && this.y - i >= 0 && possibleMoves.push(`${this.x + i},${this.y - i}`);
      // ruchy w lewo
      this.y - i >= 0 && possibleMoves.push(`${this.x},${this.y - i}`);
      // ruchy skosne lewo && gora
      this.x - i >= 0 && this.y - i >= 0 && possibleMoves.push(`${this.x - i},${this.y - i}`);
    }
    
    return possibleMoves;
  }
}

export default Queen;
